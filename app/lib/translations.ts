export type Lang = "en" | "es";

export const translations = {
  en: {
    nav: {
      bookShort: "Start Here",
      bookFull: "Book Free Consultation",
      menu: "Menu",
      patientPortal: "Patient Portal",
      pricing: "Pricing",
      about: "About",
      faq: "FAQ",
      blog: "Blog",
      phone: "(909) 293-8095",
    },
    hero: {
      eyebrow: "Physician-Led Medical Weight Loss · Semaglutide and Tirzepatide",
      titlePre: "Choose a ",
      titleEmph: "doctor",
      titlePost: ", not a faceless brand.",
      subhead:
        "Personally accountable for your weight loss care, from your first visit onward. Board-certified in obesity medicine. Science-backed expertise.",
      ctaBook: "Book Free Consultation",
      ctaCall: "Call (909) 293-8095",
      checklist: [
        "No ongoing charges until you decide",
        "Telehealth services available in California and Nevada",
      ],
      doctorName: "Darius Roohani, MD",
      doctorCred:
        "Board-certified · Internal Medicine & Obesity Medicine · Cedars-Sinai '24 · 5+ years experience",
      readMore: "Read more about Dr. Roohani",
    },
    trustBar: [
      {
        value: "GLP-1 Available",
        label: "Semaglutide and Tirzepatide✝",
        sub: "Oral options available",
      },
      { value: "100% Virtual", label: "Available in CA & NV", sub: "Telehealth" },
      { value: "Transparent", label: "Flat-rate pricing", sub: "No hidden fees" },
    ],
    trustBarDisclaimer:
      "✝Compounded medications are not FDA-approved and have not been evaluated by the FDA for safety, effectiveness, or quality.",
    why: {
      eyebrow: "What Makes Us Different",
      heading:
        "Most programs are built around a brand. Yours is concierge care from an experienced doctor.",
      body: "At YooshMD, one physician is personally responsible for your care. Whether you choose a GLP-1 or non-GLP-1 option, that decision is based on your medical needs — not a sales target.",
      cardTitle: "YooshMD Highlights",
      points: [
        "Direct access to your doctor — call or message — no barriers",
        "Medication decision during first visit — no waiting for approval",
        "Flat, transparent pricing for medications and comprehensive care",
        "Side effects managed proactively — before they become a reason to stop",
        "Medically supervised plan, including tapering off medication if desired",
      ],
    },
    howItWorks: {
      eyebrow: "How It Works",
      heading: "Five steps. One doctor, the whole way through.",
      steps: [
        {
          n: "01",
          title: "Free consultation",
          body: "You meet with Dr. Roohani by video for a comprehensive medical assessment and a discussion of your goals.",
        },
        {
          n: "02",
          title: "Sign up for a plan",
          body: "Monthly flat fee. No hidden charges, no calculations, no waiting for approval.**",
        },
        {
          n: "03",
          title: "Baseline bloodwork",
          body: "Lab work is completed as part of your plan. Included in your monthly cost.",
        },
        {
          n: "04",
          title: "Receive medications",
          body: "Medications shipped right to your door — hassle-free.",
        },
        {
          n: "05",
          title: "Ongoing care",
          body: "Dr. Roohani will adjust your treatment to help you reach your goals. Available by phone and secure message anytime. Custom dosing, side effects, or tapering - he can manage it all.*",
        },
      ],
      footnotes: [
        "*Individual results vary. Weight loss outcomes depend on factors including dosage, adherence, and individual response to treatment, and are not guaranteed.",
        "**No specific medication is guaranteed. The decision will be determined solely by the licensed doctor based on independent clinical judgment following a medical evaluation.",
      ],
    },
    reviews: {
      eyebrow: "About the Doctor",
      verifiedFrom: "Verified reviews from",
      zocdoc: "ZocDoc",
      doctorName: "Darius Roohani, MD",
      bio: "Dr. Darius Roohani is double board-certified in Internal Medicine and Obesity Medicine, trained at the University of Nevada, Reno School of Medicine and Cedars-Sinai. In five years treating patients for weight loss, he's focused on what it changes beyond the number on the scale — health, confidence, and the ability to do more.",
    },
    faq: {
      eyebrow: "FAQ",
      heading: "Frequently asked questions",
      items: [
        {
          question: "What is YooshMD?",
          answer:
            "YooshMD was built on a simple premise: one physician, personally managing your care. We prioritize direct access, medical expertise, and transparent pricing. No call center, no rotating providers, no hidden fees. Just physician-led care.",
        },
        {
          question: "How do I get started with YooshMD?",
          answer:
            "You start with a free video consultation with Dr. Roohani. If it's a good fit, you sign up for a monthly plan and complete baseline bloodwork. Medication is shipped to your door, and Dr. Roohani manages your care from there — reachable by phone for urgent questions and through the patient portal for everything else.",
        },
        {
          question: "Is medication guaranteed?",
          answer:
            "Most adults age 18 and older who are struggling with overweight or obesity qualify. Final eligibility is determined during your medical evaluation to ensure treatment is safe and appropriate for you.",
        },
        {
          question: "Do I have to be on medication forever?",
          answer:
            "No. Many patients use medication temporarily to help establish momentum while building sustainable habits. We actively support tapering or discontinuing medications once your goal weight is achieved and lifestyle changes are established. The one exception: if GLP-1 medications are being used to manage a condition beyond obesity — such as type 2 diabetes or liver disease — continuing long-term may be medically appropriate, and we'll discuss that with you directly.",
        },
        {
          question: "When will I get charged?",
          answer: "You will only get charged when you sign up for a plan.",
        },
        {
          question: "Do you accept insurance?",
          answer:
            "We are currently self-pay, but we can generate a superbill that you can submit to your insurance company for reimbursement.",
        },
        {
          question: "What is your cancellation policy?",
          answer:
            "You can cancel your membership at any time with 30 days' notice. We require this so we can complete any outstanding care coordination and ensure a clean handoff. There are no long-term contracts or cancellation fees. To cancel, contact us directly at admin@yooshmd.com or (909) 293-8095. Payments made are non-refundable.",
        },
        {
          question: "Where is your medication sourced from?",
          answer:
            "Compounded medications are sourced from Boudreaux's New Drug Store, a licensed 503A U.S. pharmacy based in Lake Charles, Louisiana, operating since 1923. Boudreaux's is inspected by the National Association of Boards of Pharmacy (NABP). Other medications are fulfilled either via Cost Plus Drugs, which delivers, or prescriptions are sent to a local pharmacy of your choice.",
        },
        {
          question: "My medication came in a vial. How do I take it?",
          answer:
            "Your medication ships with detailed instructions for drawing up and injecting your prescribed dose. If you have any questions, the doctor is available to walk you through it.",
        },
      ],
    },
    pricing: {
      eyebrow: "Simple, Transparent Pricing",
      heading: "Two plans. One flat fee. No surprises.",
      subhead:
        "Every plan includes direct access to Dr. Roohani. Choose whether your medication is included or sourced separately — at your free consultation, he'll help you decide which fits.",
      plans: [
        {
          name: "Physician Oversight",
          tagline:
            "Brand-name tirzepatide and semaglutide, oral GLP-1 options, or non-GLP-1 medications. Medication cost not included.",
        },
        {
          name: "Comprehensive Program",
          tagline: "Semaglutide or tirzepatide✝ included, every dose.",
        },
      ],
      includeHeading: "Both plans include:",
      included: [
        "Monthly physician check-ins",
        "Unlimited direct messaging with the doctor",
        "Comprehensive lab orders and review",
        "On-call doctor for urgent matters",
        "Medications shipped to your door**",
        "Taper off or cancel anytime",
      ],
      footnote1: "**Some prescriptions may be sent to a local pharmacy for more timely access.",
      initialConsultTitle: "Initial consultation with Dr. Roohani — ",
      free: "FREE",
      initialConsultDetails:
        "30-minute video visit · Comprehensive medical review · Goal exploration · Medication overview",
      initialConsultNote: "No ongoing charges until you decide to continue.",
      initialConsultCta: "Book Free Visit",
      footnote2:
        "✝Compounded medications are not FDA-approved and have not been evaluated by the FDA for safety, effectiveness, or quality.",
    },
    medications: {
      eyebrow: "Medications",
      heading: "Injectables or tablets - many options, personalized to your needs.",
      subhead:
        "Semaglutide and tirzepatide✝ are included with the Comprehensive Program. Prefer something else? Dr. Roohani can prescribe oral, brand-name, or non-GLP-1 options too.",
      options: [
        {
          title: "Semaglutide",
          descriptor:
            "GLP-1 receptor agonist that enhances satiety, delays gastric emptying, and improves glycemic control through glucose-dependent insulin secretion.✝",
          body: "All doses, prepared by an accredited 503A pharmacy. Included with the Comprehensive Program.",
        },
        {
          title: "Tirzepatide",
          descriptor:
            "Dual GIP and GLP-1 receptor agonist, enhances satiety, delays gastric emptying, and improves insulin sensitivity.✝",
          body: "All doses, prepared by an accredited 503A pharmacy. Included with the Comprehensive Program.",
        },
        {
          title: "Oral, Branded & Non-GLP-1 Options",
          descriptor:
            "We can also prescribe oral GLP-1s, brand-name injectables, or non-GLP-1 options based on your goals and history.",
        },
      ],
      footnote:
        "✝Compounded medications are not FDA-approved and have not been evaluated by the FDA for safety, effectiveness, or quality.",
    },
    toc: [
      { href: "#why", label: "Why YooshMD" },
      { href: "#how-it-works", label: "How It Works" },
      { href: "#pricing", label: "Pricing" },
      { href: "#medications", label: "Medications" },
      { href: "#reviews", label: "About" },
      { href: "#faq", label: "FAQ" },
      { href: "#instagram", label: "Videos" },
    ],
    footer: {
      tagline: "Choose a doctor, not a faceless brand.",
      description:
        "Physician-guided medical weight loss. 100% online. Serving California and Nevada.",
      links: {
        privacy: "Privacy Policy",
        disclaimers: "Disclosures & Disclaimers",
        terms: "Terms of Service",
        telehealth: "Telehealth Notice",
        noticeOfPrivacy: "Notice of Privacy Practices",
        accessibility: "Accessibility",
      },
      medicalDisclaimer:
        "This site does not constitute medical advice. Results vary. Individual outcomes depend on factors including health history, adherence to the program, and physician recommendations. This service is not intended for medical emergencies — if you are experiencing a medical emergency, call 911.",
      copyright: "© 2026 YooshMD. All rights reserved.",
    },
    disclaimersPage: {
      backHome: "← Back to home",
      title: "Disclosures & Disclaimers",
      lastUpdated: "Last updated: July 17, 2026",
      sections: [
        {
          heading: "General Information",
          body: "The information provided on this website is for general informational and educational purposes only. It does not constitute medical advice, diagnosis, or treatment. Nothing on this website should be relied upon as a substitute for professional medical evaluation by a licensed healthcare provider. Use of this website does not establish a physician-patient relationship.",
        },
        {
          heading: "Important Safety Information — GLP-1 Medications",
          body: "Semaglutide and tirzepatide belong to a class of medications that carries an FDA boxed warning regarding the risk of thyroid C-cell tumors observed in animal studies. These medications are contraindicated in patients with a personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2). Additional risks associated with this medication class may include pancreatitis, gallbladder disease, hypoglycemia, kidney injury, and hypersensitivity reactions. This is not a complete list of risks. You must disclose your full personal and family medical history to your provider during your consultation so that eligibility and appropriateness can be properly assessed. Ask your provider for full prescribing and safety information for your specific medication.",
        },
        {
          heading: "Clinical Outcomes",
          body: "Individual results vary. We do not guarantee specific weight loss outcomes. Any percentage estimates referenced on this website are derived from randomized clinical trials evaluating lifestyle modification in combination with weight loss medications compared to placebo. Outcomes in clinical practice may differ based on individual health history, adherence, comorbidities, and other factors.",
        },
        {
          heading: "Medication Taper & Program Completion",
          body: "The medication taper protocol is individualized and not guaranteed to result in sustained weight loss after discontinuation. Long-term outcomes depend on adherence to lifestyle modifications established during the program. Some patients may require longer treatment duration based on clinical assessment.",
        },
        {
          heading: "Prescription Decisions",
          body: "Treatment decisions, including the issuance of prescriptions, are made solely at the clinical discretion of the treating provider based on medical appropriateness and applicable laws. Use of this service does not guarantee that a prescription will be written or that any particular treatment will be provided. Eligibility for medication is determined at the time of your consultation.",
        },
        {
          heading: "Self-Pay Practice",
          body: "YooshMD is a self-pay practice. We do not accept or bill insurance for any services.",
        },
        {
          heading: "Laboratory Testing",
          body: "Laboratory studies are included with the program and are done via Quest Diagnostics in partnership with Rupa Health (acquired by FullScript).",
        },
        {
          heading: "Medication Costs",
          body: "The Comprehensive Program ($349/month) includes one (1) GLP-1 medication (compounded), one month's supply per month, bundled into the program fee. The Physician Oversight plan ($149/month) does not include medication cost; medication is paid for separately if prescribed. Prices are subject to change without notice. YooshMD does not guarantee the availability or pricing of any specific medication.",
        },
        {
          heading: "Compounded Medications",
          body: "Certain medications offered through YooshMD may be compounded by state-licensed compounding pharmacies. Compounded medications are not approved by the U.S. Food and Drug Administration (FDA) and have not undergone FDA review for safety, effectiveness, or quality. A compounded medication may be prescribed only when a licensed healthcare provider determines it is medically appropriate for an individual patient. FDA-approved alternatives may be available. Patients should discuss the risks, benefits, and available treatment options with their healthcare provider before starting therapy. Individual results vary and no specific outcome is guaranteed. YooshMD does not manufacture, compound, or dispense medications. All prescriptions are issued solely at the discretion of the treating provider and are fulfilled by appropriately licensed pharmacies in accordance with applicable state and federal laws.",
        },
        {
          heading: "Telehealth Services",
          body: "YooshMD provides telehealth services to patients located in California and Nevada at the time of their visit. Patients are responsible for ensuring they are physically located in a state where YooshMD is licensed to practice at the time of each appointment.",
        },
        {
          heading: "Emergency Disclaimer",
          body: "This service is not intended for medical emergencies. If you are experiencing a medical emergency, call 911 or seek immediate in-person medical care.",
        },
        {
          heading: "Privacy",
          body: "We protect your personal health information in accordance with federal and state privacy laws, including the Health Insurance Portability and Accountability Act (HIPAA). Please review our Notice of Privacy Practices for information on how your health information may be used and disclosed.",
        },
        {
          heading: "Website Data",
          body: "This website does not store Protected Health Information (PHI). Scheduling, intake, and patient communications are handled through our secure patient portal and booking system, which are operated separately from this website in accordance with HIPAA. Business Associate Agreements (BAAs) are in place with these vendors.",
        },
        {
          heading: "Patient Reviews",
          body: "Patient reviews displayed on this website were collected through ZocDoc. Reviews are presented using patient initials only. YooshMD does not edit or fabricate patient reviews.",
        },
      ],
    },
  },
  es: {
    nav: {
      bookShort: "Empezar",
      bookFull: "Reserve su Consulta Gratis",
      menu: "Menú",
      patientPortal: "Portal del Paciente",
      pricing: "Precios",
      about: "Acerca de",
      faq: "Preguntas Frecuentes",
      blog: "Blog",
      phone: "(909) 293-8095",
    },
    hero: {
      eyebrow: "Pérdida de Peso Médica Dirigida por un Doctor · Semaglutida y Tirzepatida",
      titlePre: "Elige un ",
      titleEmph: "doctor",
      titlePost: ", no una marca sin rostro.",
      subhead:
        "Responsable personalmente de su cuidado para la pérdida de peso, desde su primera visita en adelante. Certificado en medicina de la obesidad. Experiencia respaldada por la ciencia.",
      ctaBook: "Reserve su Consulta Gratis",
      ctaCall: "Llame al (909) 293-8095",
      checklist: [
        "Sin cargos continuos hasta que usted decida",
        "Servicios de telesalud disponibles en California y Nevada",
      ],
      doctorName: "Darius Roohani, MD",
      doctorCred:
        "Certificado por dos juntas médicas · Medicina Interna y Medicina de la Obesidad · Cedars-Sinai '24 · Más de 5 años de experiencia",
      readMore: "Conozca más sobre el Dr. Roohani",
    },
    trustBar: [
      {
        value: "GLP-1 Disponible",
        label: "Semaglutida y Tirzepatida✝",
        sub: "Opciones orales disponibles",
      },
      { value: "100% Virtual", label: "Disponible en CA y NV", sub: "Telesalud" },
      { value: "Transparente", label: "Precio fijo", sub: "Sin cargos ocultos" },
    ],
    trustBarDisclaimer:
      "✝Los medicamentos compuestos no están aprobados por la FDA y no han sido evaluados por la FDA en cuanto a seguridad, eficacia o calidad.",
    why: {
      eyebrow: "Qué Nos Hace Diferentes",
      heading:
        "La mayoría de los programas se construyen alrededor de una marca. El suyo es atención personalizada de un doctor con experiencia.",
      body: "En YooshMD, un doctor es personalmente responsable de su cuidado. Ya sea que elija una opción GLP-1 o no GLP-1, esa decisión se basa en sus necesidades médicas — no en una meta de ventas.",
      cardTitle: "Lo Más Destacado de YooshMD",
      points: [
        "Acceso directo a su doctor — llame o envíe un mensaje — sin barreras",
        "Decisión sobre medicamentos durante la primera visita — sin esperar aprobación",
        "Precios fijos y transparentes para medicamentos y cuidado integral",
        "Efectos secundarios manejados de forma proactiva — antes de que se conviertan en un motivo para detenerse",
        "Plan supervisado médicamente, incluyendo la reducción gradual del medicamento si así lo desea",
      ],
    },
    howItWorks: {
      eyebrow: "Cómo Funciona",
      heading: "Cinco pasos. Un doctor, todo el camino.",
      steps: [
        {
          n: "01",
          title: "Consulta gratuita",
          body: "Se reúne con el Dr. Roohani por video para una evaluación médica integral y una conversación sobre sus objetivos.",
        },
        {
          n: "02",
          title: "Inscríbase en un plan",
          body: "Tarifa mensual fija. Sin cargos ocultos, sin cálculos, sin esperar aprobación.**",
        },
        {
          n: "03",
          title: "Análisis de laboratorio inicial",
          body: "El trabajo de laboratorio se incluye como parte de su plan. Incluido en su costo mensual.",
        },
        {
          n: "04",
          title: "Reciba sus medicamentos",
          body: "Medicamentos enviados directamente a su puerta — sin complicaciones.",
        },
        {
          n: "05",
          title: "Cuidado continuo",
          body: "El Dr. Roohani ajustará su tratamiento para ayudarle a alcanzar sus objetivos. Disponible por teléfono y mensaje seguro en cualquier momento. Dosis personalizada, efectos secundarios o reducción gradual - él puede manejarlo todo.*",
        },
      ],
      footnotes: [
        "*Los resultados individuales varían. Los resultados de pérdida de peso dependen de factores que incluyen la dosis, la adherencia y la respuesta individual al tratamiento, y no están garantizados.",
        "**Ningún medicamento específico está garantizado. La decisión será determinada únicamente por el doctor con licencia, basada en su juicio clínico independiente tras una evaluación médica.",
      ],
    },
    reviews: {
      eyebrow: "Acerca del Doctor",
      verifiedFrom: "Reseñas verificadas de",
      zocdoc: "ZocDoc",
      doctorName: "Darius Roohani, MD",
      bio: "El Dr. Darius Roohani está certificado por dos juntas médicas en Medicina Interna y Medicina de la Obesidad, capacitado en la Facultad de Medicina de la Universidad de Nevada, Reno y en Cedars-Sinai. En cinco años tratando pacientes para la pérdida de peso, se ha enfocado en lo que cambia más allá del número en la báscula — salud, confianza y la capacidad de hacer más.",
    },
    faq: {
      eyebrow: "Preguntas Frecuentes",
      heading: "Preguntas frecuentes",
      items: [
        {
          question: "¿Qué es YooshMD?",
          answer:
            "YooshMD se creó sobre una premisa simple: un solo médico, administrando personalmente su atención. Priorizamos el acceso directo, la experiencia médica y precios transparentes. Sin centro de llamadas, sin proveedores rotativos, sin cargos ocultos. Solo atención dirigida por un médico.",
        },
        {
          question: "¿Cómo empiezo con YooshMD?",
          answer:
            "Comienza con una consulta gratuita por video con el Dr. Roohani. Si es una buena opción para usted, se inscribe en un plan mensual y completa análisis de sangre iniciales. El medicamento se envía a su domicilio, y el Dr. Roohani gestiona su atención a partir de ahí — disponible por teléfono para preguntas urgentes y a través del portal del paciente para todo lo demás.",
        },
        {
          question: "¿El medicamento está garantizado?",
          answer:
            "La mayoría de los adultos de 18 años o más que luchan contra el sobrepeso u obesidad califican. La elegibilidad final se determina durante su evaluación médica para asegurar que el tratamiento sea seguro y apropiado para usted.",
        },
        {
          question: "¿Tengo que tomar el medicamento para siempre?",
          answer:
            "No. Muchos pacientes usan el medicamento temporalmente para ayudar a generar impulso mientras desarrollan hábitos sostenibles. Apoyamos activamente la reducción gradual o suspensión de los medicamentos una vez que se alcanza el peso objetivo y se establecen los cambios de estilo de vida. La única excepción: si los medicamentos GLP-1 se usan para manejar una condición más allá de la obesidad — como diabetes tipo 2 o enfermedad hepática — continuar a largo plazo puede ser médicamente apropiado, y lo hablaremos directamente con usted.",
        },
        {
          question: "¿Cuándo se me cobrará?",
          answer: "Solo se le cobrará cuando se inscriba en un plan.",
        },
        {
          question: "¿Aceptan seguro médico?",
          answer:
            "Actualmente somos de pago directo (self-pay), pero podemos generar un superbill que puede enviar a su compañía de seguros para reembolso.",
        },
        {
          question: "¿Cuál es su política de cancelación?",
          answer:
            "Puede cancelar su membresía en cualquier momento con 30 días de aviso previo. Requerimos esto para poder completar cualquier coordinación de atención pendiente y asegurar una transición ordenada. No hay contratos a largo plazo ni cargos por cancelación. Para cancelar, contáctenos directamente a admin@yooshmd.com o al (909) 293-8095. Los pagos realizados no son reembolsables.",
        },
        {
          question: "¿De dónde proviene su medicamento?",
          answer:
            "Los medicamentos compuestos provienen de Boudreaux's New Drug Store, una farmacia 503A con licencia en EE. UU., ubicada en Lake Charles, Luisiana, en operación desde 1923. Boudreaux's es inspeccionada por la Asociación Nacional de Juntas de Farmacia (NABP). Otros medicamentos se entregan a través de Cost Plus Drugs, que ofrece envío a domicilio, o las recetas se envían a la farmacia local de su elección.",
        },
        {
          question: "Mi medicamento llegó en un vial. ¿Cómo lo tomo?",
          answer:
            "Su medicamento se envía con instrucciones detalladas para extraer e inyectar su dosis recetada. Si tiene alguna pregunta, el doctor está disponible para guiarlo.",
        },
      ],
    },
    pricing: {
      eyebrow: "Precios Simples y Transparentes",
      heading: "Dos planes. Una tarifa fija. Sin sorpresas.",
      subhead:
        "Cada plan incluye acceso directo al Dr. Roohani. Elija si su medicamento está incluido o se obtiene por separado — en su consulta gratuita, él le ayudará a decidir cuál es el más adecuado.",
      plans: [
        {
          name: "Supervisión Médica",
          tagline:
            "Tirzepatida y semaglutida de marca, opciones orales de GLP-1, o medicamentos no GLP-1. Costo de medicamento no incluido.",
        },
        {
          name: "Programa Integral",
          tagline: "Semaglutida o tirzepatida✝ incluida, cada dosis.",
        },
      ],
      includeHeading: "Ambos planes incluyen:",
      included: [
        "Consultas médicas mensuales",
        "Mensajería directa ilimitada con el doctor",
        "Órdenes y revisión de laboratorio integral",
        "Doctor de guardia para asuntos urgentes",
        "Medicamentos enviados a su puerta**",
        "Reducción gradual o cancelación en cualquier momento",
      ],
      footnote1:
        "**Algunas recetas pueden enviarse a una farmacia local para un acceso más oportuno.",
      initialConsultTitle: "Consulta inicial con el Dr. Roohani — ",
      free: "GRATIS",
      initialConsultDetails:
        "Visita por video de 30 minutos · Revisión médica integral · Exploración de objetivos · Resumen de medicamentos",
      initialConsultNote: "Sin cargos continuos hasta que decida continuar.",
      initialConsultCta: "Reserve su Visita Gratis",
      footnote2:
        "✝Los medicamentos compuestos no están aprobados por la FDA y no han sido evaluados por la FDA en cuanto a seguridad, eficacia o calidad.",
    },
    medications: {
      eyebrow: "Medicamentos",
      heading: "Inyectables o tabletas - muchas opciones, personalizadas a sus necesidades.",
      subhead:
        "La semaglutida y la tirzepatida✝ están incluidas con el Programa Integral. ¿Prefiere algo más? El Dr. Roohani puede recetar opciones orales, de marca, o no GLP-1 también.",
      options: [
        {
          title: "Semaglutida",
          descriptor:
            "Agonista del receptor GLP-1 que aumenta la saciedad, retrasa el vaciado gástrico y mejora el control glucémico mediante la secreción de insulina dependiente de glucosa.✝",
          body: "Todas las dosis, preparadas por una farmacia acreditada 503A. Incluido con el Programa Integral.",
        },
        {
          title: "Tirzepatida",
          descriptor:
            "Agonista dual del receptor GIP y GLP-1, aumenta la saciedad, retrasa el vaciado gástrico y mejora la sensibilidad a la insulina.✝",
          body: "Todas las dosis, preparadas por una farmacia acreditada 503A. Incluido con el Programa Integral.",
        },
        {
          title: "Opciones Orales, de Marca y No GLP-1",
          descriptor:
            "También podemos recetar GLP-1 orales, inyectables de marca, u opciones no GLP-1 según sus objetivos e historial.",
        },
      ],
      footnote:
        "✝Los medicamentos compuestos no están aprobados por la FDA y no han sido evaluados por la FDA en cuanto a seguridad, eficacia o calidad.",
    },
    toc: [
      { href: "#why", label: "Por Qué YooshMD" },
      { href: "#how-it-works", label: "Cómo Funciona" },
      { href: "#pricing", label: "Precios" },
      { href: "#medications", label: "Medicamentos" },
      { href: "#reviews", label: "Acerca de" },
      { href: "#faq", label: "Preguntas Frecuentes" },
      { href: "#instagram", label: "Videos" },
    ],
    footer: {
      tagline: "Elige un doctor, no una marca sin rostro.",
      description:
        "Pérdida de peso médica dirigida por un doctor. 100% en línea. Sirviendo California y Nevada.",
      links: {
        privacy: "Política de Privacidad",
        disclaimers: "Divulgaciones y Descargos de Responsabilidad",
        terms: "Términos de Servicio",
        telehealth: "Aviso de Telesalud",
        noticeOfPrivacy: "Aviso de Prácticas de Privacidad",
        accessibility: "Accesibilidad",
      },
      medicalDisclaimer:
        "Este sitio no constituye asesoramiento médico. Los resultados varían. Los resultados individuales dependen de factores que incluyen el historial médico, la adherencia al programa y las recomendaciones médicas. Este servicio no está destinado para emergencias médicas — si tiene una emergencia médica, llame al 911.",
      copyright: "© 2026 YooshMD. Todos los derechos reservados.",
    },
    disclaimersPage: {
      backHome: "← Volver al inicio",
      title: "Divulgaciones y Descargos de Responsabilidad",
      lastUpdated: "Última actualización: 17 de julio de 2026",
      sections: [
        {
          heading: "Información General",
          body: "La información proporcionada en este sitio web es solo para fines informativos y educativos generales. No constituye asesoramiento médico, diagnóstico o tratamiento. Nada en este sitio web debe considerarse un sustituto de la evaluación médica profesional por parte de un proveedor de atención médica con licencia. El uso de este sitio web no establece una relación doctor-paciente.",
        },
        {
          heading: "Información Importante de Seguridad — Medicamentos GLP-1",
          body: "La semaglutida y la tirzepatida pertenecen a una clase de medicamentos que lleva una advertencia destacada (boxed warning) de la FDA sobre el riesgo de tumores de células C de la tiroides observados en estudios con animales. Estos medicamentos están contraindicados en pacientes con antecedentes personales o familiares de carcinoma medular de tiroides (CMT) o síndrome de Neoplasia Endocrina Múltiple tipo 2 (NEM 2). Los riesgos adicionales asociados con esta clase de medicamentos pueden incluir pancreatitis, enfermedad de la vesícula biliar, hipoglucemia, lesión renal y reacciones de hipersensibilidad. Esta no es una lista completa de riesgos. Debe revelar su historial médico personal y familiar completo a su proveedor durante su consulta para que se pueda evaluar adecuadamente su elegibilidad e idoneidad. Pregunte a su proveedor por la información completa de prescripción y seguridad de su medicamento específico.",
        },
        {
          heading: "Resultados Clínicos",
          body: "Los resultados individuales varían. No garantizamos resultados específicos de pérdida de peso. Cualquier estimación porcentual mencionada en este sitio web se deriva de ensayos clínicos aleatorizados que evalúan la modificación del estilo de vida en combinación con medicamentos para la pérdida de peso en comparación con un placebo. Los resultados en la práctica clínica pueden diferir según el historial médico individual, la adherencia, las comorbilidades y otros factores.",
        },
        {
          heading: "Reducción Gradual del Medicamento y Finalización del Programa",
          body: "El protocolo de reducción gradual del medicamento es individualizado y no está garantizado que resulte en una pérdida de peso sostenida después de su interrupción. Los resultados a largo plazo dependen de la adherencia a las modificaciones del estilo de vida establecidas durante el programa. Algunos pacientes pueden requerir una duración de tratamiento más larga según la evaluación clínica.",
        },
        {
          heading: "Decisiones de Prescripción",
          body: "Las decisiones de tratamiento, incluida la emisión de recetas, se toman únicamente a discreción clínica del proveedor tratante, con base en la idoneidad médica y las leyes aplicables. El uso de este servicio no garantiza que se emitirá una receta o que se proporcionará algún tratamiento en particular. La elegibilidad para recibir medicamentos se determina en el momento de su consulta.",
        },
        {
          heading: "Práctica de Pago Directo",
          body: "YooshMD es una práctica de pago directo (self-pay). No aceptamos ni facturamos a seguros médicos por ningún servicio.",
        },
        {
          heading: "Análisis de Laboratorio",
          body: "Los estudios de laboratorio están incluidos con el programa y se realizan a través de Quest Diagnostics en asociación con Rupa Health (adquirida por FullScript).",
        },
        {
          heading: "Costos de Medicamentos",
          body: "El Programa Integral ($349/mes) incluye un (1) medicamento GLP-1 (compuesto), un suministro de un mes por mes, incluido en la tarifa del programa. El plan de Supervisión Médica ($149/mes) no incluye el costo del medicamento; el medicamento se paga por separado si se receta. Los precios están sujetos a cambios sin previo aviso. YooshMD no garantiza la disponibilidad ni el precio de ningún medicamento específico.",
        },
        {
          heading: "Medicamentos Compuestos",
          body: "Ciertos medicamentos ofrecidos a través de YooshMD pueden ser compuestos por farmacias de compuestos con licencia estatal. Los medicamentos compuestos no están aprobados por la Administración de Alimentos y Medicamentos de EE. UU. (FDA) y no han sido evaluados por la FDA en cuanto a seguridad, eficacia o calidad. Un medicamento compuesto solo puede recetarse cuando un proveedor de atención médica con licencia determina que es médicamente apropiado para un paciente individual. Pueden estar disponibles alternativas aprobadas por la FDA. Los pacientes deben discutir los riesgos, beneficios y opciones de tratamiento disponibles con su proveedor de atención médica antes de comenzar la terapia. Los resultados individuales varían y no se garantiza ningún resultado específico. YooshMD no fabrica, compone ni dispensa medicamentos. Todas las recetas se emiten únicamente a discreción del proveedor tratante y se surten en farmacias debidamente autorizadas de acuerdo con las leyes estatales y federales aplicables.",
        },
        {
          heading: "Servicios de Telesalud",
          body: "YooshMD proporciona servicios de telesalud a pacientes ubicados en California y Nevada al momento de su visita. Los pacientes son responsables de asegurarse de que se encuentran físicamente en un estado donde YooshMD tiene licencia para ejercer al momento de cada cita.",
        },
        {
          heading: "Aviso de Emergencia",
          body: "Este servicio no está destinado para emergencias médicas. Si tiene una emergencia médica, llame al 911 o busque atención médica presencial de inmediato.",
        },
        {
          heading: "Privacidad",
          body: "Protegemos su información de salud personal de acuerdo con las leyes federales y estatales de privacidad, incluida la Ley de Portabilidad y Responsabilidad del Seguro Médico (HIPAA). Revise nuestro Aviso de Prácticas de Privacidad para obtener información sobre cómo se puede usar y divulgar su información de salud.",
        },
        {
          heading: "Datos del Sitio Web",
          body: "Este sitio web no almacena Información de Salud Protegida (PHI). La programación de citas, la admisión y las comunicaciones con los pacientes se manejan a través de nuestro portal seguro para pacientes y nuestro sistema de reservas, los cuales operan por separado de este sitio web de acuerdo con HIPAA. Existen Acuerdos de Asociado Comercial (BAA) vigentes con estos proveedores.",
        },
        {
          heading: "Reseñas de Pacientes",
          body: "Las reseñas de pacientes que se muestran en este sitio web fueron recopiladas a través de ZocDoc. Las reseñas se presentan usando solo las iniciales del paciente. YooshMD no edita ni fabrica reseñas de pacientes.",
        },
      ],
    },
  },
} as const;
