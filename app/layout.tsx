import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./lib/LanguageContext";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
