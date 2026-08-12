import Footer from "../components/Footer";

type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

type Section = {
  heading: string;
  blocks: Block[];
};

const sections: Section[] = [
  {
    heading: "1. Acceptance of Terms",
    blocks: [
      {
        type: "p",
        text: 'By accessing or using this website or any services provided by Darius Roohani Medical PC dba YooshMD ("YooshMD") (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not use the website or Services.',
      },
    ],
  },
  {
    heading: "2. Medical Services & No Emergency Care",
    blocks: [
      {
        type: "p",
        text: "YooshMD provides non-emergency medical services through licensed healthcare providers using telehealth technologies.",
      },
      {
        type: "p",
        text: "YooshMD does not provide emergency medical services. If you believe you are experiencing a medical emergency, call 911 or go to the nearest emergency room immediately.",
      },
      {
        type: "p",
        text: "Use of the Services does not guarantee diagnosis, treatment, or prescription of any medication. All clinical decisions are made solely by licensed healthcare providers based on their independent medical judgment.",
      },
    ],
  },
  {
    heading: "3. Eligibility & Geographic Limitations",
    blocks: [
      {
        type: "p",
        text: "You must be at least 18 years of age to use the Services.",
      },
      {
        type: "p",
        text: "YooshMD provides medical services only to individuals who are physically located in the State of California, Nevada, or Florida at the time of the telehealth encounter. By using the Services, you represent that you are located in California, Nevada, or Florida, as applicable, during your consultation.",
      },
    ],
  },
  {
    heading: "4. Telehealth Informed Consent",
    blocks: [
      {
        type: "p",
        text: "By using the Services, you consent to receiving healthcare through telehealth technologies, including secure video, audio, and electronic communications.",
      },
      { type: "p", text: "You understand and acknowledge that:" },
      {
        type: "ul",
        items: [
          "Telehealth services are voluntary and you may withdraw consent at any time",
          "You have the right to request in-person care instead of telehealth services",
          "Telehealth has limitations, including the inability to perform certain physical examinations",
          "There are potential risks, including technical failures or unauthorized access despite reasonable safeguards",
          "Telehealth services are provided under the same professional standards as in-person care",
        ],
      },
      {
        type: "p",
        text: "Your informed consent for telehealth services will be obtained and documented prior to your first clinical encounter, as required by applicable state law, including California, Nevada, and Florida regulations.",
      },
    ],
  },
  {
    heading: "5. Patient Responsibilities",
    blocks: [
      {
        type: "p",
        text: "You agree to provide accurate, complete, and truthful medical and personal information and to update such information as necessary.",
      },
      {
        type: "p",
        text: "You agree to follow treatment recommendations or to clearly communicate any concerns or questions regarding your care. Failure to provide accurate information may impact the quality of care provided and may result in suspension or termination of Services.",
      },
    ],
  },
  {
    heading: "6. Account Access & Security",
    blocks: [
      {
        type: "p",
        text: "If you create an account, you are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.",
      },
      {
        type: "p",
        text: "You agree not to share your login credentials with any third party. Unauthorized use or access may result in suspension or termination of Services.",
      },
    ],
  },
  {
    heading: "7. Prescriptions & Treatment",
    blocks: [
      {
        type: "p",
        text: "Prescriptions are issued only when medically appropriate following a clinical evaluation.",
      },
      {
        type: "p",
        text: "YooshMD does not guarantee that any medication will be prescribed. Certain medications may not be prescribed via telehealth.",
      },
    ],
  },
  {
    heading: "8. Use of Technology & Automated Tools",
    blocks: [
      {
        type: "p",
        text: "YooshMD may use secure automated or technology-assisted tools, including AI-assisted documentation, to support clinical operations and medical recordkeeping.",
      },
      {
        type: "p",
        text: "These tools assist with documentation only and do not replace clinical judgment. All medical records are reviewed and confirmed by licensed healthcare providers.",
      },
      {
        type: "p",
        text: "Where required by law, your consent will be obtained prior to any audio recording or transcription.",
      },
    ],
  },
  {
    heading: "9. Privacy & Health Information",
    blocks: [
      {
        type: "p",
        text: "Your personal and health information is handled in accordance with applicable federal and state privacy laws, including the Health Insurance Portability and Accountability Act (HIPAA) and California privacy laws.",
      },
      {
        type: "p",
        text: "By using the Services, you acknowledge that you have reviewed and understand YooshMD's Privacy Policy and Notice of Privacy Practices, which describe how your protected health information is used, disclosed, and protected.",
      },
    ],
  },
  {
    heading: "10. Fees & Payment",
    blocks: [
      {
        type: "p",
        text: "Fees for Services will be disclosed prior to purchase. You agree to pay all applicable fees in accordance with the terms presented at the time of payment. Fees are non-refundable unless otherwise stated.",
      },
    ],
  },
  {
    heading: "11. Disclaimers & Limitation of Liability",
    blocks: [
      {
        type: "p",
        text: "YooshMD makes no guarantees regarding medical outcomes.",
      },
      {
        type: "p",
        text: "Nothing in these Terms limits or waives any rights you may have under applicable law, including rights related to professional medical negligence.",
      },
      {
        type: "p",
        text: "To the extent permitted by law, YooshMD shall not be liable for indirect, incidental, or consequential damages arising from the use of the website or Services.",
      },
    ],
  },
  {
    heading: "12. Termination of Services",
    blocks: [
      {
        type: "p",
        text: "YooshMD reserves the right to suspend or terminate access to the Services for misuse, non-compliance with these Terms, or as clinically appropriate.",
      },
    ],
  },
  {
    heading: "13. Arbitration & Dispute Resolution",
    blocks: [
      {
        type: "p",
        text: "Any dispute arising out of or relating to these Terms or the Services shall be resolved through binding arbitration administered by the American Arbitration Association in accordance with its rules. Arbitration shall take place in the State of California.",
      },
      {
        type: "p",
        text: "You and YooshMD waive the right to a jury trial. Arbitration shall be conducted on an individual basis only, and class actions are not permitted.",
      },
      {
        type: "p",
        text: "You may opt out of arbitration within 30 days of first accepting these Terms by providing written notice to YooshMD.",
      },
    ],
  },
  {
    heading: "14. Governing Law",
    blocks: [
      {
        type: "p",
        text: "These Terms are governed by and construed in accordance with the laws of the State of California, except to the extent that the laws of Nevada apply to services provided to patients located in Nevada, or the laws of Florida apply to services provided to patients located in Florida.",
      },
    ],
  },
  {
    heading: "15. Regulatory Disclosure",
    blocks: [
      {
        type: "p",
        text: "Medical services are provided by physicians licensed in the State of California and regulated by the Medical Board of California.",
      },
      {
        type: "p",
        text: "License verification and complaint information are available at www.mbc.ca.gov or by calling 800-633-2322.",
      },
      {
        type: "p",
        text: "For Nevada: Nevada State Board of Medical Examiners, www.medboard.nv.gov, (775) 688-2559.",
      },
      {
        type: "p",
        text: "Dr. Roohani is registered as an out-of-state telehealth provider with the Florida Board of Medicine under Florida Statute § 456.47. This registration does not constitute a Florida medical license and does not authorize the prescribing of controlled substances to patients located in Florida.",
      },
      {
        type: "p",
        text: "For Florida: Florida Board of Medicine, flboardofmedicine.gov, (850) 245-4131.",
      },
    ],
  },
  {
    heading: "16. Changes to Terms",
    blocks: [
      {
        type: "p",
        text: "YooshMD may update these Terms from time to time. Continued use of the Services after changes are posted constitutes acceptance of the revised Terms.",
      },
    ],
  },
  {
    heading: "17. Contact Information",
    blocks: [
      {
        type: "p",
        text: "If you have questions about these Terms, please contact:",
      },
      {
        type: "p",
        text: "Darius Roohani, MD\n8055 Alondra Blvd\nParamount, CA 90723\n(909) 293-8095\nadmin@yooshmd.com",
      },
    ],
  },
];

function SectionBlock({ block }: { block: Block }) {
  if (block.type === "ul") {
    return (
      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 leading-relaxed">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return (
    <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
      {block.text}
    </p>
  );
}

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col flex-1">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
          <a href="/" className="flex-shrink-0">
            <span
              className="text-2xl sm:text-3xl font-bold tracking-tight"
              style={{ color: "var(--green-deep)" }}
            >
              YooshMD
            </span>
          </a>
          <a
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to home
          </a>
        </div>
      </header>

      <main className="flex-1 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            Effective date: February 4, 2026
          </p>

          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {section.heading}
                </h2>
                <div className="space-y-2">
                  {section.blocks.map((block, i) => (
                    <SectionBlock key={i} block={block} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mt-10 pt-8 border-t border-gray-100">
            <span className="font-semibold text-gray-900 block mb-2">
              Acknowledgment
            </span>
            By using the YooshMD website or Services, you acknowledge that
            you have read, understood, and agree to these Terms of Service.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
