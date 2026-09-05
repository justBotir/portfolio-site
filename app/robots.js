export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://botirportfolio.vercel.app/sitemap.xml",
  };
}
