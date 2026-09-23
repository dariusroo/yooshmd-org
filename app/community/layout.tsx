import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Health Partnerships | YooshMD",
  description:
    "YooshMD partners with FQHCs and FQHC look-alikes to deliver affordable, physician-guided medical weight loss using generic GLP-1 equivalents and sliding-scale pricing.",
  alternates: {
    canonical: "/community",
  },
  openGraph: {
    title: "Community Health Partnerships | YooshMD",
    description:
      "Affordable, physician-guided medical weight loss for FQHC and look-alike patients who've lost coverage, lack insurance, or can't afford brand-name pricing.",
    siteName: "YooshMD",
    type: "website",
  },
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
