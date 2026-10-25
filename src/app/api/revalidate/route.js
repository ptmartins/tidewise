import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

// Called by a Sanity GROQ webhook whenever a document is created, updated or
// deleted (projection: `{_type}`). Every fetcher in src/lib/data tags its cache
// with the document type it reads, so revalidating that tag refreshes the
// pages that show it the next time they're visited.
export async function POST(request) {
    const secret = process.env.SANITY_REVALIDATE_SECRET;
    if (!secret) return NextResponse.json({ message: 'SANITY_REVALIDATE_SECRET is not set' }, { status: 500 });

    try {
        // The third argument waits a moment so the query API already sees the change
        const { isValidSignature, body } = await parseBody(request, secret, true);

        if (!isValidSignature) return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });
        if (!body?._type) return NextResponse.json({ message: 'Missing _type in body' }, { status: 400 });

        revalidateTag(body._type, 'max');
        return NextResponse.json({ revalidated: body._type });
    } catch (error) {
        console.error('Revalidation failed', error);
        return NextResponse.json({ message: 'Could not parse the webhook' }, { status: 400 });
    }
}
