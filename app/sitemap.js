const baseUrl = "https://botirportfolio.vercel.app";

export default function sitemap() {
  const routes = ["", "/services", "/resume", "/work", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
