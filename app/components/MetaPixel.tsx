"use client";

import { useEffect } from "react";

const PIXEL_ID = "1757257248720832";

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: Fbq;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

// Meta's standard base code, run on mount instead of pasted into <head> so
// AnalyticsGate can decide where it loads. Fires a PageView on every mount,
// so returning to the page via client-side navigation counts too. Never
// loads for visitors whose browser sends a Global Privacy Control signal.
export default function MetaPixel() {
  useEffect(() => {
    const nav = navigator as Navigator & { globalPrivacyControl?: boolean };
    if (nav.globalPrivacyControl) return;

    if (!window.fbq) {
      const fbq = function (...args: unknown[]) {
        if (fbq.callMethod) fbq.callMethod(...args);
        else fbq.queue.push(args);
      } as Fbq;
      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = "2.0";
      fbq.queue = [];
      window.fbq = fbq;
      if (!window._fbq) window._fbq = fbq;

      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(script);

      fbq("init", PIXEL_ID);
    }
    window.fbq("track", "PageView");
  }, []);

  return null;
}
