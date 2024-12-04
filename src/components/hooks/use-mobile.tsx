// src/components/hooks/use-mobile.ts
import { useState, useEffect } from "react";

// Tipe untuk status mobile
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Anggap 768px adalah batas untuk mobile
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up listener pada unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}
