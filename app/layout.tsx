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
        {/* CookieYes CMP (banner + consent updates) */}
        <Script
          id="cookieyes-banner"
          src="https://app.cookieyes.com/mHHtKTYII3w39cbnfPBcoM-7avywBGTHsI2gDtD76sAe2ncyehVxmtKG9xzuEh4uaerkcJ7ZQ_nne4KKqPAWPIYmI9ODvUZbkMhciOW5uvivSoaDMzrBQ77NJ8TIFsW-kSTqvs7EeQS2eLYgSl6VnztJFbTqQDn-y0uqNr1K4uI="
          strategy="beforeInteractive"
        />
        <Script
          id="cookieyes-main"
          src="https://cdn-cookieyes.com/client_data/7245a91df182fda2972fe99c/script.js"
          strategy="beforeInteractive"
        />

        {/* Google Consent Mode default: everything denied until user accepts */}
        <Script id="gtag-consent" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied'
            });
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NXZDTJSB');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-[#0f172a]`}>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXZDTJSB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="GTM"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
