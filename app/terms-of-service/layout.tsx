import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | YooshMD",
  description:
    "The terms governing your access to and use of the YooshMD website and telehealth services.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
