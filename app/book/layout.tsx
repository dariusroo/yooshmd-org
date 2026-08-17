import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Consultation | YooshMD",
  description:
    "Schedule your free consultation with Dr. Roohani. 100% online in CA, NV & FL.",
  alternates: {
    canonical: "/book",
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
