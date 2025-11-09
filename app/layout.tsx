import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stavros Kampanakis - Technical Product Manager",
  description:
    "Technical Product Manager with 10+ years in Frontend Development & UX, blending technology, design, and business to build impactful products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="0568a297-c9c0-43d6-9fdf-12f89f55e169"
          data-blockingmode="auto"
          type="text/javascript"
        />
      </head>
      <body className={`${inter.className} bg-[#0f172a]`}>
        {children}
        <GoogleAnalytics gaId="G-E71VE5X624" />
      </body>
    </html>
  );
}
