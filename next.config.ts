import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/contact", destination: "/", permanent: true },
      { source: "/approach", destination: "/#why", permanent: true },
      { source: "/plans", destination: "/#pricing", permanent: true },
      { source: "/faq", destination: "/#faq", permanent: true },
      { source: "/medications", destination: "/#medications", permanent: true },
      { source: "/appointments", destination: "/#pricing", permanent: true },
      { source: "/tos", destination: "/terms-of-service", permanent: true },
      { source: "/privacypolicy", destination: "/privacy-policy", permanent: true },
      { source: "/telehealthconsent", destination: "/telehealth-notice", permanent: true },
      { source: "/hipaa", destination: "/notice-of-privacy-practices", permanent: true },
      { source: "/refer", destination: "https://intakeq.com/new/rcryvb", permanent: true },
    ];
  },
};

export default nextConfig;
