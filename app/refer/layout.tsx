import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refer a Patient | YooshMD",
  description: "Refer a patient to YooshMD.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/refer",
  },
};

export default function ReferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
