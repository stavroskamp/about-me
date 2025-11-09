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
        <Script
          id="cookieyes-banner"
          src="https://app.cookieyes.com/dDiC-AbWdGRTjRvVQqvLGKuGBgqyE_WAfKKjiBVCNXJP067gqweMhGQth6oOjQk4H_C_gdoQ0GAXkH9Nzi1fK07bYUX4H4yjuFvzqRUb3tf_Ufm8FbhcUqmXhZHkIU7VBGhx9V3h3mMfYjcdr3ykWSyqdd7EJNFNrqVhK_l-tpk="
          strategy="beforeInteractive"
        />
        <Script
          id="cookieyes-main"
          src="https://cdn-cookieyes.com/client_data/58ea737f5315e1b39c887a23/script.js"
          strategy="beforeInteractive"
        />

        <Script
          type="text/plain"
          data-cookieyes="analytics"
          src="https://www.googletagmanager.com/gtag/js?id=G-E71VE5X624"
          strategy="afterInteractive"
        />
        <Script
          type="text/plain"
          data-cookieyes="analytics"
          strategy="afterInteractive"
        >
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
