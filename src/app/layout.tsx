import type { Metadata } from "next";
import "./globals.css";
import localfont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/StickyMobileCta";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  applicationName: "Samana Movers",
  robots: {
    "max-image-preview": "large",
    follow: true,
    googleBot: {
      notranslate: true,
      "max-image-preview": "large",
      index: true,
      follow: true,
    },
    index: true,
    notranslate: true,
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon-32x32.png",
  },
};

const Roboto = localfont({
  src: [
    {
      path: "./Roboto-Regular.woff",
      style: "normal",
      weight: "400",
    },
    {
      path: "./Roboto-Medium.woff",
      style: "normal",
      weight: "500",
    },
    {
      path: "./Roboto-Black.woff",
      style: "normal",
      weight: "800",
    },
  ],
  fallback: [
    "sans-serif",
    "system-ui",
    "ui-sans-serif",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
  ],
  variable: "--font-roboto",
  display: "swap",
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="Schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovingCompany",
              name: "Samana Movers",
              url: "https://www.samanamoversuae.com/",
              logo: "https://www.samanamoversuae.com/logo-cropped.svg",
              image:
                "https://www.samanamoversuae.com/ocal-moving-sharjah-movers-2.jpg",
              priceRange: "AED 1000 - 6000",
              telephone: "+971 50 9320597",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Al Estiqlal Street",
                addressLocality: "Sharjah",
                postalCode: "00000",
                addressCountry: "AE",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+971 50 9320597",
                contactType: "Customer Service",
                areaServed: "AE",
                availableLanguage: ["English", "Arabic"],
              },
              sameAs: [
                "https://www.facebook.com/samanamovers",
                "https://www.instagram.com/samanamovers",
                "https://www.linkedin.com/company/samanamovers",
              ],

              foundingDate: "2018",
            }),
          }}
        />
        <GoogleAnalytics />
      </head>
      <body className={`antialiased  ${Roboto.className}`}>
        <Navbar />
        {children}
        <StickyMobileCta />
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
