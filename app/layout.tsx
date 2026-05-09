import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "YooshMD — Medical Weight Loss | Physician-Guided Program",
  description:
    "A physician-guided weight loss program built around a clear exit strategy — not indefinite medication. 100% online. CA & NV. Book your free consultation today.",
  keywords: [
    "medical weight loss",
    "physician weight loss",
    "telehealth weight loss",
    "weight loss program California",
    "board certified obesity medicine",
  ],
  openGraph: {
    title: "YooshMD — Medical Weight Loss",
    description:
      "Start with medication. Finish without it. A physician-guided program with a real exit strategy.",
    siteName: "YooshMD",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
