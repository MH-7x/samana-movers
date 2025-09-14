"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}

export default function CallTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target) return;

      // Find nearest <a> (important if user clicks child span/icon inside the link)
      const link = target.closest(
        "a[href^='tel:']"
      ) as HTMLAnchorElement | null;

      if (link) {
        event.preventDefault(); // stop immediate navigation

        const url = link.getAttribute("href") || "";

        if (typeof window.gtag !== "undefined") {
          window.gtag("event", "conversion", {
            send_to: "AW-17557026573/WZhHCJTWu5obEI3u67NB",
            value: 1.0,
            currency: "AED",
            event_callback: () => {
              window.location.href = url; // continue to tel: after tracking
            },
          });
        } else {
          // fallback: just redirect
          window.location.href = url;
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null; // no UI needed
}
