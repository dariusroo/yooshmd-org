import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets /PA (as shared) serve the /pa page. Redirects can't do this:
  // their path matching ignores case, so a /PA -> /pa redirect loops.
  async rewrites() {
    return [{ source: "/PA", destination: "/pa" }];
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/contact", destination: "/", permanent: true },
      { source: "/approach", destination: "/#why", permanent: true },
      { source: "/plans", destination: "/#pricing", permanent: true },
      { source: "/faq", destination: "/#faq", permanent: true },
      { source: "/community", destination: "/", permanent: true },
      { source: "/medications", destination: "/#medications", permanent: true },
      { source: "/appointments", destination: "/#pricing", permanent: true },
      { source: "/tos", destination: "/terms-of-service", permanent: true },
      { source: "/privacypolicy", destination: "/privacy-policy", permanent: true },
      { source: "/telehealthconsent", destination: "/telehealth-notice", permanent: true },
      { source: "/hipaa", destination: "/notice-of-privacy-practices", permanent: true },
      { source: "/intake", destination: "https://intakeq.com/new/1upd4e", permanent: false },
      { source: "/refill", destination: "https://intakeq.com/new/27yvsq", permanent: false },
    ];
  },
};

export default nextConfig;
