import { notFound } from "next/navigation";

// With Cache Components, a placeholder param lets unknown paths render on
// demand (like unknown species slugs) instead of an empty prerendered shell
export function generateStaticParams() {
  return [{ rest: ["not-found"] }];
}

// Unmatched URLs under a locale render the localized [lang]/not-found page
export default async function CatchAll({ params }) {
  await params;
  notFound();
}
