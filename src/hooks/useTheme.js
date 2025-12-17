"use client";

import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <div className="lightdark-switch">
      <span
        className="dark-btn"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <img
          src={
            theme === "dark"
              ? "/images/icon/moon.svg"
              : "/images/icon/sun.svg"
          }
          alt="theme-toggle"
          className="swtich-icon"
        />
      </span>
    </div>
  );
}
