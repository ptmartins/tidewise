import { NextResponse } from 'next/server';
import { verifyWebhook } from '@clerk/nextjs/webhooks';
import { writeClient } from '../../../../../sanity/lib/writeClient';

// Called by a Clerk webhook (event: user.deleted). When someone deletes their
// account, their reports stay as scientific records but lose everything that
// points back to them: email, observer name and account ID. Signed with
// CLERK_WEBHOOK_SIGNING_SECRET, which verifyWebhook reads from the environment.
export async function POST(request) {
    let event;
    try {
        event = await verifyWebhook(request);
    } catch {
        return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });
    }

    if (event.type !== 'user.deleted' || !event.data.id) return NextResponse.json({ ignored: event.type });
    // Clerk retries on failure, so a missing token shows up in its dashboard instead of being lost
    if (!writeClient) return NextResponse.json({ message: 'Storage is not configured' }, { status: 503 });

    try {
        const userId = event.data.id;
        const ids = await writeClient.fetch(
            '*[(_type == "report" && userId == $userId) || (_type == "rateLimit" && string::startsWith(_id, $counters))]{ _id, _type }',
            { userId, counters: `rateLimit.report.${userId}.` },
        );

        const transaction = writeClient.transaction();
        for (const { _id, _type } of ids) {
            if (_type === 'rateLimit') transaction.delete(_id);
            else transaction.patch(_id, (patch) => patch.unset(['email', 'observer', 'userId']));
        }
        if (ids.length) await transaction.commit();

        return NextResponse.json({ anonymised: ids.length });
    } catch (error) {
        console.error('Account clean-up failed', error);
        return NextResponse.json({ message: 'Clean-up failed' }, { status: 500 });
    }
}
