// components/ClientFooter.js
"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

export default function ClientFooter() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <Footer /> : null;
}
