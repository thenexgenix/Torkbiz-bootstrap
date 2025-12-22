"use client";

import { usePathname } from "next/navigation";
import NavbarHomeTwo from "./NavbarHomeTwo";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const hideNavbarRoutes = ["/signup-2", "/signin-2", "/forgot-pass-2"];
  if (hideNavbarRoutes.includes(pathname)) {
    return null;
  }
  if (pathname === "/home-2") {
    return <NavbarHomeTwo />;
  }
  return <Navbar />;
}
