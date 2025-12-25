"use client";

import { useEffect } from "react";

export default function ConsoleSilencer() {
  useEffect(() => {
    const originalLog = console.log;
    const originalInfo = console.info;
    console.log = (...args) => {
      const msg = args[0];
      if (
        typeof msg === "string" &&
        (msg.includes("[HMR]") ||
          msg.includes("[Fast Refresh]") ||
          msg.includes("rebuilding") ||
          msg.includes("done in"))
      ) {
        return; 
      }
      originalLog.apply(console, args);
    };
    console.info = (...args) => {
      const msg = args[0];
      if (
        typeof msg === "string" &&
        msg.includes("Download the React DevTools")
      ) {
        return;
      }
      originalInfo.apply(console, args);
    };
  }, []);

  return null; 
}
