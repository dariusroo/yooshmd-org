import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclosures & Disclaimers | YooshMD",
  description:
    "Important safety information, clinical outcome disclosures, and program disclaimers for YooshMD's physician-guided weight loss program.",
  alternates: {
    canonical: "/disclaimers",
  },
};

export default function DisclaimersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
