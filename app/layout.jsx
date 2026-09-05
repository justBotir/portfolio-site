import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { siteUrl } from "@/lib/site";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Botir Qakhramoniy | Full Stack Developer",
    template: "%s | Botir Qakhramoniy",
  },
  description:
    "Portfolio of Botir Qakhramoniy, a full-stack developer from Khorezm, Uzbekistan, building modern web applications with React, Next.js and Node.js.",
  keywords: [
    "Botir Qakhramoniy",
    "full stack developer",
    "frontend developer",
    "React",
    "Next.js",
    "Node.js",
    "Uzbekistan",
  ],
  authors: [{ name: "Botir Qakhramoniy" }],
  creator: "Botir Qakhramoniy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Botir Qakhramoniy",
    title: "Botir Qakhramoniy | Full Stack Developer",
    description:
      "Portfolio of Botir Qakhramoniy, a full-stack developer building modern web applications with React, Next.js and Node.js.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Botir Qakhramoniy | Full Stack Developer",
    description:
      "Portfolio of Botir Qakhramoniy, a full-stack developer building modern web applications with React, Next.js and Node.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
      </body>
    </html>
  );
}
