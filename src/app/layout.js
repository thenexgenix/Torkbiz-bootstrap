import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "aos/dist/aos.css";
import "@/styles/sass/style.scss";
import NavbarWrapper from "@/components/common/NavbarWrapper";
import FooterWrapper from "@/components/common/FooterWrapper";
import Preloader from "./Preloader";
import AOSInit from "@/components/AOSInit";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Torkbiz - Professional Multipurpose HTML Template for Business Consulting & Financial Services",
  description:
    "Professional Multipurpose HTML Template for Business Consulting & Financial Services",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="light" suppressHydrationWarning>
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
        <NavbarWrapper />
        {/* ================= Page Content ================= */}
        <Preloader />
        <AOSInit>{children}</AOSInit>

        {/* ================= Footer ================= */}
        <FooterWrapper />

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
