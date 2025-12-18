import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/common/Navbar";

// ✅ SINGLE source of truth for theme styles
import "@/styles/sass/style.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Torkbiz",
  description: "Business Consulting & Financial Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="light">
      <head>
        {/* ================= Vendor CSS ONLY ================= */}
        {/* Bootstrap CSS is already included via Sass (DO NOT add again) */}
        <link rel="stylesheet" href="/css/aos.css" />
        <link rel="stylesheet" href="/css/lightcase.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* ================= Header ================= */}
        <Navbar />

        {/* ================= Page Content ================= */}
        {children}

        {/* ================= Vendor JS (ORDER MATTERS) ================= */}
        <Script
          src="/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/aos.js" strategy="afterInteractive" />
        <Script src="/js/custom.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
