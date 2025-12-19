import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
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
        {/* ================= Vendor CSS ================= */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/aos.css" />
        <link rel="stylesheet" href="/css/lightcase.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* ================= Header ================= */}
        <Navbar />

        {/* ================= Page Content ================= */}
        {children}

        {/* ================= Footer ================= */}
        <Footer />

        {/* ================= Vendor JS ================= */}
        <Script
          src="/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/all.min.js" strategy="beforeInteractive" />
        <Script src="/js/swiper-bundle.min.js" strategy="beforeInteractive" />
        <Script src="/js/aos.js" strategy="beforeInteractive" />
        <Script src="/js/fslightbox.js" strategy="beforeInteractive" />
        <Script src="/js/purecounter_vanilla.js" strategy="beforeInteractive" />
        <Script src="/js/custom.js" strategy="afterInteractive" />
        <Script id="aos-init" strategy="afterInteractive">
          {`AOS.init();`}
        </Script>
      </body>
    </html>
  );
}
