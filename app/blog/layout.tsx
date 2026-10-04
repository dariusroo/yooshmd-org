import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Blog | YooshMD",
    template: "%s | YooshMD",
  },
  description:
    "Articles on GLP-1 medications and physician-guided weight loss from Darius Roohani, MD, board certified in Internal Medicine and Obesity Medicine.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col flex-1">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex-shrink-0">
            <span
              className="text-2xl sm:text-3xl font-bold tracking-tight"
              style={{ color: "var(--green-deep)" }}
            >
              YooshMD
            </span>
          </Link>
          <nav className="flex items-center gap-5">
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Blog
            </Link>
            <a
              href="/book"
              className="text-sm font-semibold text-white rounded-full px-4 py-2 transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--green-deep)" }}
            >
              Book Free Consultation
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 bg-white">{children}</main>

      <Footer />
    </div>
  );
}
