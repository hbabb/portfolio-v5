import type { Metadata } from "next";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { Poppins } from "next/font/google";
import React from "react";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/providers/themeProvider";

import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Heath Babb | Developer & Civil Designer",
    template: "%s | Heath Babb",
  },
  description:
    "Professional CV and portfolio of Heath Babb — full-stack developer and civil design expert.",
  keywords: [
    "frontend developer",
    "civil designer",
    "Next.js",
    "TypeScript",
    "portfolio",
    "web development",
    "Heath Babb",
  ],
  authors: [{ name: "Heath Babb" }],
  creator: "Heath Babb",
  publisher: "Heath Babb",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://heath-babb.dev",
    siteName: "Heath Babb Portfolio",
    title: "Heath Babb | Developer & Civil Designer",
    description:
      "Explore the CV and portfolio of Heath Babb — full-stack developer and civil design expert.",
    images: [
      {
        url: "/og-img.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Open Graph Image",
      },
    ],
=======
  title: "Heath Babb | Developer & Civil Designer",
  description:
    "Professional CV and experience of Heath Babb — blending civil engineering expertise with full-stack web development.",
  metadataBase: new URL("https://heath-babb.dev"),
  openGraph: {
    title: "Heath Babb | Developer & Civil Designer",
    description:
      "Explore the CV and upcoming portfolio of Heath Babb — full-stack developer and civil design expert.",
    url: "https://heath-babb.dev",
    siteName: "Heath Babb Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heath Babb | Developer & Civil Designer",
    description:
      "Full-stack portfolio of Heath Babb, combining software development and civil design.",
    images: ["/og-img.png"],
  },
  alternates: {
    canonical: "https://heath-babb.dev",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
          <Toaster richColors />
          <Analytics />
          {/* @ts-expect-error - GoogleAnalytics is a valid component */}
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        </ThemeProvider>
      </body>
    </html>
  );
}
