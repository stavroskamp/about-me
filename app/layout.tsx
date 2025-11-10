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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Usermetric Pixel */}
        <Script
          src="https://app.usermetric.io/pixel/jnVhUNQRS3ulIeJ8"
          strategy="afterInteractive"
          defer
        />
      </head>
      <body className={`${inter.className} bg-[#0f172a]`}>{children}</body>
    </html>
  );
}
