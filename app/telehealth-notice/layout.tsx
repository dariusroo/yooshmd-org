import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Telehealth Informed Consent Notice | YooshMD",
  description:
    "The nature, benefits, limitations, and your rights regarding telehealth services provided by YooshMD.",
  alternates: {
    canonical: "/telehealth-notice",
  },
};

export default function TelehealthNoticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
