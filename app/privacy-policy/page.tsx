import Footer from "../components/Footer";

type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "h3"; text: string };

type Section = {
  heading: string;
  blocks: Block[];
};

const sections: Section[] = [
  {
    heading: "1. Introduction",
    blocks: [
      {
        type: "p",
        text: 'YooshMD ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and protect information collected through our website and related services.',
      },
      {
        type: "p",
        text: "This Privacy Policy applies to information collected through our website and online interactions. It does not replace our Notice of Privacy Practices, which governs how we use and disclose protected health information (“PHI”) in connection with medical care.",
      },
    ],
  },
  {
    heading: "2. Health Information & HIPAA",
    blocks: [
      {
        type: "p",
        text: 'When we provide healthcare services, we collect and maintain protected health information ("PHI") as defined by the Health Insurance Portability and Accountability Act ("HIPAA").',
      },
      {
        type: "p",
        text: "PHI is governed by our Notice of Privacy Practices, which describes:",
      },
      {
        type: "ul",
        items: [
          "How PHI may be used and disclosed",
          "Your rights regarding PHI",
          "Our legal duties related to health information",
        ],
      },
      {
        type: "p",
        text: "If there is a conflict between this Privacy Policy and our Notice of Privacy Practices with respect to PHI, the Notice of Privacy Practices controls.",
      },
    ],
  },
  {
    heading: "3. Information We Collect",
    blocks: [
      {
        type: "p",
        text: "We may collect the following categories of information when you use our website or services:",
      },
      { type: "h3", text: "Personal Information" },
      {
        type: "ul",
        items: [
          "Name, email address, phone number",
          "Account or registration information",
          "Payment or transaction-related information",
        ],
      },
      { type: "h3", text: "Health-Related Information" },
      {
        type: "ul",
        items: [
          "Information you submit in connection with requesting or receiving medical services",
          "This information may constitute PHI and is handled in accordance with HIPAA",
        ],
      },
      { type: "h3", text: "Technical & Usage Information" },
      {
        type: "ul",
        items: [
          "IP address",
          "Browser type",
          "Device information",
          "Pages visited and interactions with our website",
          "Cookies or similar technologies",
        ],
      },
    ],
  },
  {
    heading: "4. How We Use Information",
    blocks: [
      { type: "p", text: "We use information to:" },
      {
        type: "ul",
        items: [
          "Provide and operate our website and services",
          "Facilitate medical care and administrative operations",
          "Communicate with you regarding services, updates, or support",
          "Process payments and manage accounts",
          "Improve functionality, security, and user experience",
          "Comply with legal, regulatory, and professional obligations",
        ],
      },
      {
        type: "p",
        text: "We do not use personal information for automated medical decision-making.",
      },
    ],
  },
  {
    heading: "5. Disclosure of Information",
    blocks: [
      { type: "p", text: "We may disclose information:" },
      {
        type: "ul",
        items: [
          "To healthcare providers and staff involved in your care",
          "To service providers that support our operations (e.g., hosting, IT, billing), under confidentiality and security obligations",
          "As required by law, regulation, or legal process",
          "To protect the rights, safety, or property of YooshMD, patients, or others",
        ],
      },
      { type: "p", text: "We do not sell personal information." },
    ],
  },
  {
    heading: "6. Cookies & Tracking Technologies",
    blocks: [
      {
        type: "p",
        text: "We may use cookies or similar technologies to support website functionality and security.",
      },
      {
        type: "p",
        text: "You may control cookies through your browser settings. Disabling cookies may affect certain features of the website.",
      },
      {
        type: "p",
        text: "We do not use tracking technologies for cross-context behavioral advertising in connection with health-related interactions.",
      },
    ],
  },
  {
    heading: "7. Data Retention",
    blocks: [
      { type: "p", text: "We retain information for as long as necessary to:" },
      {
        type: "ul",
        items: [
          "Provide services",
          "Maintain medical records",
          "Comply with legal and regulatory requirements",
          "Resolve disputes and enforce agreements",
        ],
      },
      {
        type: "p",
        text: "Retention periods vary based on the type of information and applicable law.",
      },
    ],
  },
  {
    heading: "8. Data Security",
    blocks: [
      {
        type: "p",
        text: "We implement administrative, technical, and physical safeguards designed to protect information from unauthorized access, use, or disclosure.",
      },
      {
        type: "p",
        text: "No system can be guaranteed to be completely secure. You use the website at your own risk.",
      },
    ],
  },
  {
    heading: "9. Your Privacy Rights",
    blocks: [
      { type: "h3", text: "HIPAA Rights" },
      {
        type: "p",
        text: "Your rights regarding PHI are described in our Notice of Privacy Practices.",
      },
      { type: "h3", text: "California Privacy Rights" },
      {
        type: "p",
        text: 'To the extent we collect personal information that is not governed by HIPAA, California residents may have rights under the California Consumer Privacy Act ("CCPA") and California Privacy Rights Act ("CPRA"), including the right to request access, correction, or deletion of certain personal information.',
      },
      {
        type: "p",
        text: "We do not sell or share personal information for cross-context behavioral advertising.",
      },
      {
        type: "p",
        text: "Requests may be submitted using the contact information below.",
      },
    ],
  },
  {
    heading: "10. Children’s Privacy",
    blocks: [
      {
        type: "p",
        text: "The website is not intended for individuals under the age of 18. We do not knowingly collect personal information from children.",
      },
    ],
  },
  {
    heading: "11. Third-Party Links",
    blocks: [
      {
        type: "p",
        text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.",
      },
    ],
  },
  {
    heading: "12. Changes to This Policy",
    blocks: [
      {
        type: "p",
        text: "We may update this Privacy Policy from time to time. Changes will be effective when posted. Continued use of the website constitutes acceptance of the revised policy.",
      },
    ],
  },
  {
    heading: "13. Contact Information",
    blocks: [
      {
        type: "p",
        text: "If you have questions about this Privacy Policy or our privacy practices, please contact:",
      },
      {
        type: "p",
        text: "Darius Roohani, MD\n8055 Alondra Blvd\nParamount, CA 90723\nOffice: (909) 293-8095\nadmin@yooshmd.com",
      },
    ],
  },
];

function SectionBlock({ block }: { block: Block }) {
  if (block.type === "h3") {
    return (
      <h3 className="text-base font-semibold text-gray-900 mt-4 mb-2">
        {block.text}
      </h3>
    );
  }
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

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-1">
            Darius Roohani Medical PC d/b/a YooshMD
          </p>
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
