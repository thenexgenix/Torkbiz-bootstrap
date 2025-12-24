"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit({children}) {
 useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      duration: 800,
    });
  }, []);
  


  return children;
}
