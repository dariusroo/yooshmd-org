"use client";

import { useEffect } from "react";

const DESTINATION = "https://intakeq.com/new/rcryvb";

export default function ReferPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace(DESTINATION + window.location.search);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-white px-5 text-center py-24">
      <p className="text-gray-600">Redirecting you to the referral form&hellip;</p>
      <a
        href={DESTINATION}
        className="mt-3 text-sm font-medium underline"
        style={{ color: "var(--green-deep)" }}
      >
        Click here if you&rsquo;re not redirected automatically
      </a>
    </div>
  );
}
