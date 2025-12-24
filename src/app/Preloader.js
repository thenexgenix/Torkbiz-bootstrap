"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Preloader() {
  const pathname = usePathname(); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, [pathname]); 
  if (!isLoading) return null;

  return (
    <div className="preloader">
      <div className="preloader__img">
        <Image
          src="/images/logo/preloader.png"
          alt="preloader icon"
          width={80}
          height={80}
          priority
        />
      </div>

    </div>
  );
}
