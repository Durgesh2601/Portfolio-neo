import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display } from "next/font/google";

import { ThemeScript } from "@/components/theme-script";
import { siteConfig } from "@/src/data/site";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap"
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap"
});

const themeStyles = `
:root {
  --background: ${siteConfig.theme.light.background};
  --surface: ${siteConfig.theme.light.surface};
  --surface-alt: ${siteConfig.theme.light.surfaceAlt};
  --foreground: ${siteConfig.theme.light.foreground};
  --muted: ${siteConfig.theme.light.muted};
  --border: ${siteConfig.theme.light.border};
  --accent: ${siteConfig.theme.light.accent};
  --accent-soft: ${siteConfig.theme.light.accentSoft};
  --shadow: 0 24px 80px rgba(32, 18, 10, 0.12);
}

:root[data-theme="dark"] {
  --background: ${siteConfig.theme.dark.background};
  --surface: ${siteConfig.theme.dark.surface};
  --surface-alt: ${siteConfig.theme.dark.surfaceAlt};
  --foreground: ${siteConfig.theme.dark.foreground};
  --muted: ${siteConfig.theme.dark.muted};
  --border: ${siteConfig.theme.dark.border};
  --accent: ${siteConfig.theme.dark.accent};
  --accent-soft: ${siteConfig.theme.dark.accentSoft};
  --shadow: 0 26px 90px rgba(0, 0, 0, 0.32);
}
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | Frontend Engineer`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${siteConfig.name} | Frontend Engineer`,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: `${siteConfig.name} Portfolio`,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio preview`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Frontend Engineer`,
    description: siteConfig.description,
    images: ["/twitter-image"]
  },
  category: "technology"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: siteConfig.theme.light.background },
    { media: "(prefers-color-scheme: dark)", color: siteConfig.theme.dark.background }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${playfair.variable}`}>
        <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
