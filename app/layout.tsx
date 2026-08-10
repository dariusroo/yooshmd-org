import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LanguageProvider } from "./lib/LanguageContext";

const medicalBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "YooshMD",
  url: "https://www.yooshmd.com",
  telephone: "+1-909-293-8095",
  email: "admin@yooshmd.com",
  priceRange: "$199-$250+",
  medicalSpecialty: "Obesity Medicine",
  areaServed: [
    { "@type": "State", name: "California" },
    { "@type": "State", name: "Nevada" },
    { "@type": "State", name: "Florida" },
  ],
  sameAs: [
    "https://www.instagram.com/yooshmd",
    "https://www.zocdoc.com/doctor/darius-roohani-md-720799",
  ],
  employee: {
    "@type": "Physician",
    name: "Darius Roohani, M.D.",
    medicalSpecialty: ["Internal Medicine", "Obesity Medicine"],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "University of Nevada, Reno School of Medicine",
      },
      { "@type": "CollegeOrUniversity", name: "Cedars-Sinai" },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Board Certification",
        recognizedBy: {
          "@type": "Organization",
          name: "American Board of Internal Medicine",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Board Certification",
        recognizedBy: {
          "@type": "Organization",
          name: "American Board of Obesity Medicine",
        },
      },
    ],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yooshmd.com"),
  title: "YooshMD — Medical Weight Loss | Physician-Guided Program",
  description:
    "Physician-guided weight loss with a real exit strategy — not indefinite medication. 100% online in CA, NV & FL. Book a free consultation.",
  keywords: [
    "medical weight loss",
    "physician weight loss",
    "telehealth weight loss",
    "weight loss program California",
    "weight loss program Florida",
    "board certified obesity medicine",
  ],
  alternates: {
    canonical: "/",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-8LGK2LG2JF" />
    </html>
  );
}
