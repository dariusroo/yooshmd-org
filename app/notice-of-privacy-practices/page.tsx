import Footer from "../components/Footer";

type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "dl"; items: { label: string; text: string }[] };

type Section = {
  heading: string;
  blocks: Block[];
};

const sections: Section[] = [
  {
    heading: "1. Our Legal Duties",
    blocks: [
      {
        type: "p",
        text: 'We are required by law to maintain the privacy of your protected health information ("PHI"), to provide you with this Notice of Privacy Practices, and to follow the terms of the notice currently in effect.',
      },
      {
        type: "p",
        text: "We reserve the right to change this Notice and make the revised Notice effective for medical information we already have about you as well as any information we receive in the future. If we make material changes, the updated Notice will be posted on our website and made available upon request.",
      },
    ],
  },
  {
    heading: "2. How We May Use and Disclose Your Health Information",
    blocks: [
      {
        type: "p",
        text: "We may use and disclose your health information without your authorization for the following purposes:",
      },
      {
        type: "dl",
        items: [
          {
            label: "A. Treatment",
            text: "We may use and disclose your PHI to provide, coordinate, or manage your health care and related services. Example: A physician may document your visit, review your medical history, or coordinate prescriptions.",
          },
          {
            label: "B. Payment",
            text: "We may use and disclose your PHI to bill and collect payment for services provided to you. Example: We may submit information to your payment processor or health plan (if applicable).",
          },
          {
            label: "C. Healthcare Operations",
            text: "We may use and disclose your PHI for practice operations, quality improvement, compliance activities, and internal administration. Example: Reviewing records to ensure quality care or training staff.",
          },
        ],
      },
    ],
  },
  {
    heading: "3. Telehealth and Electronic Communications",
    blocks: [
      {
        type: "p",
        text: "We may provide services via telehealth technologies, including secure video, audio, and electronic communications. PHI transmitted during telehealth visits is protected using administrative, technical, and physical safeguards consistent with applicable law.",
      },
      {
        type: "p",
        text: "We may contact you by telephone, secure patient portal, email, or text message regarding appointments, prescription refills, follow-up care, billing matters, and other healthcare-related communications. We use reasonable administrative, technical, and physical safeguards to protect your information; however, certain electronic communications may involve inherent security risks as described in this Notice.",
      },
    ],
  },
  {
    heading: "4. Use of Business Associates",
    blocks: [
      {
        type: "p",
        text: 'We may disclose your protected health information ("PHI") to third-party vendors, known as Business Associates, that perform services on our behalf. These services may include electronic health record management, billing and payment processing, secure cloud storage, telehealth platforms, information technology services, and clinical documentation support.',
      },
      {
        type: "p",
        text: "Some Business Associates may assist with automated or technology-assisted documentation used to support your healthcare provider in maintaining accurate medical records. All such services operate under strict confidentiality and security requirements.",
      },
      {
        type: "p",
        text: "All Business Associates are required by law and by written contract to protect the privacy and security of your PHI and may only use or disclose such information as permitted by HIPAA and other applicable laws.",
      },
      {
        type: "p",
        text: "Business Associates may include providers of electronic health record systems, telehealth platforms, secure messaging services, payment processing, cloud storage, information technology support, clinical documentation technologies, and other vendors that assist us in operating our practice.",
      },
    ],
  },
  {
    heading: "5. Uses and Disclosures Requiring Authorization",
    blocks: [
      {
        type: "p",
        text: "We will obtain your written authorization before using or disclosing your health information for purposes not described in this Notice, including:",
      },
      {
        type: "ul",
        items: [
          "Marketing purposes (where required by law)",
          "Sale of your health information",
          "Certain disclosures of psychotherapy notes (if applicable)",
        ],
      },
      {
        type: "p",
        text: "You may revoke your authorization at any time in writing, except to the extent action has already been taken.",
      },
    ],
  },
  {
    heading: "6. Use of Automation and AI-Assisted Tools",
    blocks: [
      {
        type: "p",
        text: "We may use secure automated tools, including AI-assisted documentation technology, to help create clinical notes and maintain medical records. These tools operate under strict confidentiality safeguards. Your healthcare provider reviews and confirms all clinical documentation.",
      },
      {
        type: "p",
        text: "Audio recording or transcription will only occur with your consent, where required by law.",
      },
    ],
  },
  {
    heading: "7. Special Situations",
    blocks: [
      {
        type: "p",
        text: "We may disclose your health information in the following circumstances, as permitted or required by law, generally without your authorization or opportunity to agree or object:",
      },
      {
        type: "dl",
        items: [
          {
            label: "Required By Law",
            text: "We may use or disclose your health information to the extent required by law. The use or disclosure will comply with, and be limited to, the relevant requirements of the law. You will be notified, if required by law, of any such uses or disclosures.",
          },
          {
            label: "Public Health Activities",
            text: "We may disclose PHI to a public health authority permitted by law to collect or receive the information, such as for reporting disease, injury, or disability, or for public health surveillance, investigations, or interventions.",
          },
          {
            label: "Communicable Diseases",
            text: "We may disclose PHI, if authorized by law, to a person who may have been exposed to a communicable disease or may otherwise be at risk of contracting or spreading the disease or condition.",
          },
          {
            label: "Health Oversight Activities",
            text: "We may disclose PHI to a health oversight agency for activities authorized by law, such as audits, investigations, and inspections, including government agencies that oversee the health care system, government benefit programs, or civil rights laws.",
          },
          {
            label: "Abuse or Neglect",
            text: "We may disclose PHI to a public health authority authorized by law to receive reports of child abuse or neglect, or to a governmental entity authorized to receive information if we believe you have been a victim of abuse, neglect, or domestic violence, consistent with applicable federal and state law.",
          },
          {
            label: "Food and Drug Administration (FDA)",
            text: "We may disclose PHI to a person or company required by the FDA for purposes related to the quality, safety, or effectiveness of FDA-regulated products, including reporting adverse events, tracking products, enabling recalls, or conducting post-marketing surveillance.",
          },
          {
            label: "Legal Proceedings",
            text: "We may disclose PHI in the course of a judicial or administrative proceeding, in response to a court or administrative order, or in certain circumstances in response to a subpoena, discovery request, or other lawful process.",
          },
          {
            label: "Law Enforcement Purposes",
            text: "We may disclose PHI for law enforcement purposes, including legal processes otherwise required by law, limited information for identification and location purposes, information about victims of a crime, suspected criminal conduct resulting in death, crimes occurring on our premises, or medical emergencies where a crime likely occurred.",
          },
          {
            label:
              "Coroners, Medical Examiners, Funeral Directors, and Organ Donation",
            text: "We may disclose PHI to a coroner or medical examiner for identification purposes, determining cause of death, or other duties authorized by law, and to funeral directors as needed to carry out their duties. PHI may also be used and disclosed for cadaveric organ, eye, or tissue donation purposes.",
          },
          {
            label: "Research",
            text: "We may disclose PHI to researchers when their research has been approved by an institutional review board that has established protocols to protect the privacy of your health information.",
          },
          {
            label: "To Avert a Serious Threat to Health or Safety",
            text: "Consistent with applicable law, we may disclose PHI if we believe it is necessary to prevent or lessen a serious and imminent threat to the health or safety of a person or the public, or if necessary for law enforcement to identify or apprehend an individual.",
          },
          {
            label: "Military Activity and National Security",
            text: "We may use or disclose PHI of Armed Forces personnel for activities deemed necessary by military command authorities, for a Department of Veterans Affairs benefits eligibility determination, or to a foreign military authority if you are a member of that country's military. We may also disclose PHI to authorized federal officials for national security and intelligence activities, including protective services.",
          },
          {
            label: "Workers' Compensation",
            text: "We may disclose PHI as authorized to comply with workers' compensation laws and other similar legally established programs.",
          },
        ],
      },
    ],
  },
  {
    heading: "8. Other Disclosures Requiring an Opportunity to Agree or Object",
    blocks: [
      {
        type: "p",
        text: "In the following instances you have the opportunity to agree or object to the use or disclosure of your health information. If you are not present or able to agree or object, your physician may, using professional judgment, determine whether the disclosure is in your best interest.",
      },
      {
        type: "dl",
        items: [
          {
            label: "Facility Directories",
            text: "Unless you object, we may use and disclose in a facility directory your name, general condition, and religious affiliation. This information, except religious affiliation, may be disclosed to people who ask for you by name; religious affiliation is disclosed only to clergy.",
          },
          {
            label:
              "Others Involved in Your Health Care or Payment for Your Care",
            text: "Unless you object, we may disclose to a family member, relative, close friend, or other person you identify, PHI directly relevant to that person's involvement in your care or payment for care. We may also disclose PHI to notify or assist in notifying a family member or personal representative of your location, general condition, or death, and may disclose PHI to an authorized public or private entity to assist in disaster relief efforts.",
          },
        ],
      },
    ],
  },
  {
    heading: "9. Your Rights Regarding Your Health Information",
    blocks: [
      {
        type: "p",
        text: "You have the following rights with respect to your protected health information:",
      },
      {
        type: "dl",
        items: [
          {
            label: "A. Right to Access",
            text: "You have the right to inspect and obtain a copy of your health records, with limited exceptions (such as psychotherapy notes or information compiled for legal proceedings). Requests should be submitted in writing. When reasonably possible, we will provide records in the electronic format you request or another mutually acceptable format. We may charge a reasonable fee as permitted by applicable law.",
          },
          {
            label: "B. Right to Amend",
            text: "If you believe your health information is incorrect or incomplete, you may request an amendment in writing. We are not required to agree to every requested amendment. If we deny your request, we will explain the reason for the denial and inform you of your right to submit a written statement of disagreement, which may become part of your medical record.",
          },
          {
            label: "C. Right to an Accounting of Disclosures",
            text: "You may request a list of certain disclosures of your health information made by us for purposes other than treatment, payment, or health care operations, and other than disclosures you authorized, made to family/friends involved in care, or made for national security or law enforcement purposes.",
          },
          {
            label: "D. Right to Request Restrictions",
            text: "You may request restrictions on certain uses or disclosures of your health information, including disclosures to family members or others involved in your care. While we are not required to agree to most requested restrictions, if we do agree, we will honor the restriction except when disclosure is necessary to provide emergency treatment or is otherwise required by law. If you pay for a healthcare item or service in full out of pocket, you have the right to request that we not disclose information about that item or service to your health plan for payment or healthcare operations. We will honor such requests unless disclosure is otherwise required by law.",
          },
          {
            label: "E. Right to Confidential Communications",
            text: "You may request that we communicate with you in a specific way or at a specific location (for example, via secure messaging or a different mailing address). We will accommodate reasonable requests without requiring an explanation.",
          },
          {
            label: "F. Right to a Paper Copy",
            text: "You have the right to obtain a paper copy of this Notice, even if you have agreed to receive it electronically.",
          },
        ],
      },
    ],
  },
  {
    heading: "10. California Privacy Rights",
    blocks: [
      {
        type: "p",
        text: "California law may provide additional privacy protections beyond those provided under HIPAA. YooshMD complies with all applicable California privacy laws, including the California Confidentiality of Medical Information Act (CMIA). Individuals or entities receiving your medical information from us may also be subject to additional restrictions on the further use or disclosure of that information under California law.",
      },
    ],
  },
  {
    heading: "11. Changes to This Notice",
    blocks: [
      {
        type: "p",
        text: "We reserve the right to change this Notice of Privacy Practices at any time. Any changes will apply to all protected health information we maintain. The revised Notice will be posted on our website and available upon request.",
      },
    ],
  },
  {
    heading: "12. Breach Notification",
    blocks: [
      {
        type: "p",
        text: "If unsecured protected health information is compromised in a manner requiring notification under federal or California law, we will notify affected individuals without unreasonable delay as required by applicable law.",
      },
    ],
  },
  {
    heading: "13. Complaints",
    blocks: [
      {
        type: "p",
        text: "If you believe your privacy rights have been violated, you may file a complaint with us by contacting our Privacy Officer. You may also file a complaint with the U.S. Department of Health and Human Services, Office for Civil Rights. Filing a complaint will not affect your care or result in retaliation of any kind.",
      },
    ],
  },
  {
    heading: "14. Contact Information",
    blocks: [
      {
        type: "p",
        text: "If you have questions about this Notice or wish to exercise your privacy rights, please contact:",
      },
      {
        type: "p",
        text: "Privacy Officer\nDarius Roohani, MD\n8055 Alondra Blvd, Paramount, CA 90723\nOffice: (909) 293-8095\nadmin@yooshmd.com",
      },
    ],
  },
];

const consentSection: Block[] = [
  {
    type: "p",
    text: "YooshMD may use email to communicate with you regarding appointment scheduling, follow-up instructions, medication information, and program updates. YooshMD may also use SMS text messages for appointment reminders and scheduling logistics only.",
  },
  {
    type: "p",
    text: "Standard email and SMS text messages are not fully encrypted end-to-end and may be transmitted over unsecured networks. Unauthorized parties could potentially access these communications.",
  },
  {
    type: "p",
    text: "YooshMD uses Google Workspace for email and IntakeQ for SMS text messaging, both configured under a HIPAA Business Associate Agreement.",
  },
  {
    type: "ul",
    items: [
      "I consent to receiving SMS text messages at the mobile number I have provided for appointment reminders and scheduling purposes.",
      "Message and data rates may apply, and message frequency will vary. I can reply STOP at any time to opt out of texts, START to opt back in, or HELP for assistance. Carriers are not liable for delayed or undelivered messages.",
      "I am responsible for maintaining the security of my email account and mobile device, and for notifying YooshMD promptly if my email address, phone number, or device is lost, changed, or compromised.",
      "I may withdraw this consent at any time in writing to admin@yooshmd.com, after which YooshMD will communicate with me via secure portal only.",
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
  if (block.type === "dl") {
    return (
      <dl className="space-y-3">
        {block.items.map((item) => (
          <div key={item.label}>
            <dt className="text-sm font-semibold text-gray-900">
              {item.label}
            </dt>
            <dd className="text-sm text-gray-600 leading-relaxed">
              {item.text}
            </dd>
          </div>
        ))}
      </dl>
    );
  }
  return (
    <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
      {block.text}
    </p>
  );
}

export default function NoticeOfPrivacyPracticesPage() {
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
            Notice of Privacy Practices
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Effective date: July 7, 2026
          </p>

          <div className="border border-gray-200 rounded-lg p-4 mb-6">
            <p className="text-sm font-semibold text-gray-900 leading-relaxed uppercase">
              This notice describes how medical information about you may be
              used and disclosed and how you can get access to this
              information. Please review it carefully.
            </p>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-10">
            We are also required by law to notify affected individuals
            following a breach of unsecured protected health information
            when such notification is required by federal or California
            law.
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
            By using our services, you acknowledge receipt of this Notice of
            Privacy Practices.
          </p>

          <div className="mt-16 pt-10 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">
              Email and SMS Text Message Communication Consent
            </h2>
            <div className="space-y-3">
              {consentSection.map((block, i) => (
                <SectionBlock key={i} block={block} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
