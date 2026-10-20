// The site's root layout lives under app/[lang], so the Studio needs its own
export default function StudioLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
