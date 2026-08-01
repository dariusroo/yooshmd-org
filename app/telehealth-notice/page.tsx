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
    heading: "1. What Is Telehealth",
    blocks: [
      {
        type: "p",
        text: "Telehealth is the delivery of healthcare services using electronic communications such as secure video, audio, messaging, or other digital technologies instead of an in-person visit.",
      },
      {
        type: "p",
        text: "Through telehealth, a licensed healthcare provider may evaluate your health condition, review medical history and symptoms, discuss treatment options, and prescribe medications when medically appropriate.",
      },
      {
        type: "p",
        text: "Telehealth services are provided in accordance with the same professional standards of care that apply to in-person services.",
      },
    ],
  },
  {
    heading: "2. Benefits of Telehealth",
    blocks: [
      { type: "p", text: "Potential benefits of telehealth include:" },
      {
        type: "ul",
        items: [
          "Improved access to medical care",
          "Convenience without the need for travel",
          "Timely communication with a licensed healthcare provider",
          "Continuity of care",
        ],
      },
    ],
  },
  {
    heading: "3. Limitations and Risks of Telehealth",
    blocks: [
      {
        type: "p",
        text: "Telehealth has limitations and risks, including but not limited to:",
      },
      {
        type: "ul",
        items: [
          "The inability to perform certain physical examinations",
          "Reliance on information you provide about your condition",
          "Technical failures, interruptions, or delays",
          "Privacy or security risks inherent in electronic communications despite reasonable safeguards",
        ],
      },
      {
        type: "p",
        text: "These limitations may affect the accuracy of diagnosis or treatment recommendations.",
      },
    ],
  },
  {
    heading: "4. Alternatives to Telehealth",
    blocks: [
      {
        type: "p",
        text: "You understand that receiving care via telehealth is voluntary. You have the right to request in-person medical care instead of telehealth services when available and appropriate. Telehealth is one option for receiving care and is not required.",
      },
    ],
  },
  {
    heading: "5. Confidentiality and Privacy",
    blocks: [
      {
        type: "p",
        text: "Your health information is protected in accordance with applicable federal and California and Nevada privacy laws, including the Health Insurance Portability and Accountability Act (HIPAA).",
      },
      {
        type: "p",
        text: "While reasonable administrative, technical, and physical safeguards are used, no electronic communication system can be guaranteed to be completely secure.",
      },
    ],
  },
  {
    heading: "6. Medical Judgment and Appropriateness",
    blocks: [
      {
        type: "p",
        text: "Your healthcare provider will determine whether telehealth is appropriate for your clinical needs. Telehealth services may be modified, discontinued, or converted to in-person care if deemed medically necessary.",
      },
    ],
  },
  {
    heading: "7. Emergency Care",
    blocks: [
      {
        type: "p",
        text: "Telehealth services are not intended for emergency medical conditions. If you are experiencing a medical emergency, call 911 or seek immediate in-person medical care.",
      },
    ],
  },
  {
    heading: "8. Location and Licensure",
    blocks: [
      {
        type: "p",
        text: "Telehealth services are provided by healthcare professionals licensed in the State of California and/or Nevada, as applicable.",
      },
      {
        type: "p",
        text: "By receiving telehealth services, you represent that you are physically located in California or Nevada at the time of the telehealth encounter.",
      },
      {
        type: "p",
        text: "Healthcare services will be provided in accordance with the laws and regulations of the state in which you are located at the time of care.",
      },
    ],
  },
  {
    heading: "9. Consent and Right to Withdraw",
    blocks: [
      {
        type: "p",
        text: "By using YooshMD's telehealth services, you acknowledge that:",
      },
      {
        type: "ul",
        items: [
          "You have read and understand this Telehealth Informed Consent Notice",
          "You understand the benefits, limitations, and risks of telehealth",
          "You consent to receive healthcare services via telehealth",
          "You may withdraw your consent for telehealth services at any time without affecting your right to receive future care",
        ],
      },
      {
        type: "p",
        text: "Your consent will be documented in your medical record in accordance with applicable state law.",
      },
    ],
  },
  {
    heading: "10. Questions",
    blocks: [
      {
        type: "p",
        text: "If you have questions about telehealth services or this notice, please contact YooshMD using the contact information available on our website.",
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

export default function TelehealthNoticePage() {
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
            Telehealth Informed Consent Notice
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            Effective date: January 21, 2026
          </p>

          <p className="text-sm text-gray-600 leading-relaxed mb-10">
            This Telehealth Informed Consent Notice explains the nature of
            telehealth services, their benefits, limitations, and your
            rights as a patient. Please read this notice carefully before
            receiving telehealth services from YooshMD.
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
            By accessing or using YooshMD telehealth services, you
            acknowledge that you have read, understood, and agree to this
            Telehealth Informed Consent Notice.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
