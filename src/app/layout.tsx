import type { Metadata } from "next";
import "./globals.css";
import localfont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/StickyMobileCta";

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
