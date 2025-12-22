"use client";

import { usePathname } from "next/navigation";
import FooterHomeTwo from "./FooterHometwo";
import Footer from "./Footer";

export default function FooterWrapper() {
  const pathname = usePathname();
  const hideFooterRoutes = ["/signup-2", "/signin-2", "/forgot-pass-2"];
  if (hideFooterRoutes.includes(pathname)) {
    return null;
  }
  if (pathname === "/home-2") {
    return <FooterHomeTwo />;
  }
  return <Footer />;
}
