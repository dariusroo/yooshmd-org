import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | YooshMD",
  description:
    "YooshMD's commitment to making its website accessible and usable for all individuals, including those with disabilities.",
  alternates: {
    canonical: "/accessibility-statement",
  },
};

export default function AccessibilityStatementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
