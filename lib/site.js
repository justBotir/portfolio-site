// Canonical URL of the deployed site.
// Set NEXT_PUBLIC_SITE_URL in Vercel (or .env.local) once the real domain is known;
// on Vercel, VERCEL_PROJECT_PRODUCTION_URL is filled in automatically.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");
