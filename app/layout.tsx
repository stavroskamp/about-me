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
          type="text/javascript"
          strategy="beforeInteractive"
          src="https://app.cookieyes.com/dDiC-AbWdGRTjRvVQqvLGKuGBgqyE_WAfKKjiBVCNXJP067gqweMhGQth6oOjQk4H_C_gdoQ0GAXkH9Nzi1fK07bYUX4H4yjuFvzqRUb3tf_Ufm8FbhcUqmXhZHkIU7VBGhx9V3h3mMfYjcdr3ykWSyqdd7EJNFNrqVhK_l-tpk="
        />
        <Script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/58ea737f5315e1b39c887a23/script.js"
        />
      </head>
      <body className={`${inter.className} bg-[#0f172a]`}>
        {children}
        <GoogleAnalytics gaId="G-E71VE5X624" />
      </body>
    </html>
  );
}
