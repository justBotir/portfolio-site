import { siteUrl } from "@/lib/site";

export default function sitemap() {
  const routes = ["", "/services", "/resume", "/work", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
