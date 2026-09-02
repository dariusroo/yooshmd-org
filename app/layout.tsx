import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LanguageProvider } from "./lib/LanguageContext";

const SITE_URL = "https://www.yooshmd.com";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${SITE_URL}/#practice`,
      name: "YooshMD",
      url: SITE_URL,
      telephone: "+1-909-293-8095",
      email: "admin@yooshmd.com",
      priceRange: "$155-$400",
      medicalSpecialty: "Obesity Medicine",
      address: {
        "@type": "PostalAddress",
        streetAddress: "8055 Alondra Blvd",
        addressLocality: "Paramount",
        addressRegion: "CA",
        postalCode: "90723",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "State", name: "California" },
        { "@type": "State", name: "Nevada" },
        { "@type": "State", name: "Florida" },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+1-909-293-8095",
        email: "admin@yooshmd.com",
        areaServed: ["US-CA", "US-NV", "US-FL"],
        availableLanguage: "English",
      },
      founder: { "@id": `${SITE_URL}/#darius-roohani` },
      employee: { "@id": `${SITE_URL}/#darius-roohani` },
      sameAs: [
        "https://www.instagram.com/yooshmd",
        "https://www.google.com/maps?cid=437901009696243593",
        "https://www.facebook.com/profile.php?id=61578411332212",
        "https://www.tiktok.com/@yooshmd",
      ],
      makesOffer: [
        {
          "@type": "Offer",
          name: "Semaglutide Program",
          description:
            "Physician-guided weight loss program with compounded semaglutide included; price varies by prescribed dose.",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            priceCurrency: "USD",
            minPrice: "220",
            maxPrice: "290",
            unitText: "MONTH",
          },
          url: `${SITE_URL}/#pricing`,
        },
        {
          "@type": "Offer",
          name: "Tirzepatide Program",
          description:
            "Physician-guided weight loss program with compounded tirzepatide included; price varies by prescribed dose.",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            priceCurrency: "USD",
            minPrice: "260",
            maxPrice: "400",
            unitText: "MONTH",
          },
          url: `${SITE_URL}/#pricing`,
        },
        {
          "@type": "Offer",
          name: "Physician Oversight",
          description:
            "Physician-supervised weight loss care billed monthly; medication cost not included.",
          price: "155",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "155",
            priceCurrency: "USD",
            unitText: "MONTH",
          },
          url: `${SITE_URL}/#pricing`,
        },
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#darius-roohani`,
      name: "Darius Roohani, M.D.",
      jobTitle: "Physician",
      url: SITE_URL,
      telephone: "+1-909-293-8095",
      identifier: {
        "@type": "PropertyValue",
        name: "NPI",
        value: "1124607379",
      },
      worksFor: { "@id": `${SITE_URL}/#practice` },
      knowsAbout: ["Internal Medicine", "Obesity Medicine"],
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
      sameAs: [
        "https://www.doximity.com/profiles/ed9bf0b0-3242-417e-b827-40daba081947",
        "https://www.linkedin.com/in/darius-roohani-md-5a114435a/",
        "https://www.helloklarity.com/provider/darius-roohani-1",
        "https://www.cdrewu.edu/directory/roohani-darius/",
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yooshmd.com"),
  title: "YooshMD — Medical Weight Loss | Physician-Guided Program",
  description:
    "Physician-guided weight loss (semaglutide and tirzepatide) by an expert obesity medicine specialist. 100% online in CA, NV & FL. Book a free consultation.",
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
      "One doctor, personally managing your care from your first visit onward. Semaglutide and tirzepatide, 100% online in CA, NV & FL.",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
        <Script
          data-goatcounter="https://yooshmd.goatcounter.com/count"
          src="//gc.zgo.at/count.js"
          strategy="afterInteractive"
        />
      </body>
      <GoogleAnalytics gaId="G-8LGK2LG2JF" />
    </html>
  );
}
