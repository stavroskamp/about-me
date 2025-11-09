import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
        {/* CookieYes scripts */}
        <Script
          id="cookieyes-banner"
          src="https://app.cookieyes.com/dDiC-…"
          strategy="beforeInteractive"
        />
        <Script
          id="cookieyes-main"
          src="https://cdn-cookieyes.com/client_data/…/script.js"
          strategy="beforeInteractive"
        />

        {/* Google Analytics, blocked until consent */}
        <Script
          type="text/plain"
          data-cookieyes="analytics"
          src="https://www.googletagmanager.com/gtag/js?id=G-E71VE5X624"
        />
        <Script type="text/plain" data-cookieyes="analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E71VE5X624');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-[#0f172a]`}>{children}</body>
    </html>
  );
}
