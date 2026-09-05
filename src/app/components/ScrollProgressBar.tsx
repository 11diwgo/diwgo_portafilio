import { useState, useEffect } from "react";

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (scrollProgress === 0) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          boxShadow: "0 0 20px rgba(34, 197, 94, 0.8)",
        }}
      />
    </div>
  );
}