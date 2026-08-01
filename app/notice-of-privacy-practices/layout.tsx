import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notice of Privacy Practices | YooshMD",
  description:
    "How YooshMD may use and disclose your protected health information, and your rights regarding that information.",
  alternates: {
    canonical: "/notice-of-privacy-practices",
  },
};

export default function NoticeOfPrivacyPracticesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
