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
  title: "Heath Babb Portfolio",
  description:
    "The personal portfolio and CV of Heath Babb | Developer - Civil Designer",
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
