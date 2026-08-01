import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | YooshMD",
  description:
    "How YooshMD collects, uses, discloses, and protects information collected through our website and related services.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
