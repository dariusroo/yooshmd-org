export type Lang = "en" | "es";

export const translations = {
  en: {
    bookingUrl: "/book",
    analyticsNotice: {
      text: "We use privacy-friendly analytics and Google Analytics to understand site traffic. This website does not collect any patient or health information — that's handled securely through our patient portal. See our",
      linkText: "Privacy Policy",
      accept: "Got it",
      optOut: "Turn off Google Analytics",
    },
    latestArticle: {
      heading: "Latest Article from YooshMD",
      readMore: "Read the article",
      allArticles: "See all articles",
    },
    nav: {
      bookShort: "Start Here",
      bookFull: "Book Free Consultation",
      menu: "Menu",
      patientPortal: "Patient Portal",
      pricing: "Pricing",
      about: "About",
      faq: "FAQ",
      blog: "Blog",
      referPatient: "Refer a Patient",
      communityPartners: "Community Partners",
      phone: "(909) 293-8095",
    },
    hero: {
      eyebrow: "Virtual Medical Weight Loss · Semaglutide and Tirzepatide",
      titlePre: "A smarter, more ",
      titleEmph: "personalized",
      titlePost: " approach to weight loss.",
      subheadLead: "Direct access",
      subheadPre: " to the same physician, ",
      subheadEmph: "board-certified in obesity medicine",
      subheadMid: ". Start with a ",
      subheadEmph2: "cost-intelligent",
      subheadPost: " treatment plan tailored to your health, goals, and budget.",
      ctaBook: "Book Free Consultation",
      ctaCall: "Call (909) 293-8095",
      checklist: [
        "No charges until you decide",
        "Telehealth services available in California, Nevada, and Florida",
      ],
      doctorName: "Darius Roohani, MD",
      doctorCred:
        "Board-certified · Internal Medicine & Obesity Medicine · Cedars-Sinai Residency Graduate · 5+ years experience",
      readMore: "Read more about Dr. Roohani",
    },
    trustBar: [
      {
        value: "GLP-1s and more",
        label: "Semaglutide and Tirzepatide",
        sub: "Oral and non-GLP-1 available",
      },
      { value: "100% Virtual", label: "Available in CA, NV & FL", sub: "Care from the comfort of home" },
      { value: "Transparent", label: "Clear, upfront pricing", sub: "No surprise charges" },
    ],
    trustBarDisclaimer:
      "†Compounded medications are not FDA-approved and have not been evaluated by the FDA for safety, effectiveness, or quality.",
    why: {
      eyebrow: "What Makes Us Different",
      heading:
        "Most programs give you a platform. We give you direct access to your physician.",
      body: "At YooshMD, one physician is personally responsible for your care. When questions come up, side effects interfere, or medication costs change, you can contact your doctor directly, without going through a call center. Your treatment plan evolves with your progress, medical needs, and budget.",
      cardTitle: "YooshMD Highlights",
      points: [
        "Direct access to your doctor — call or message — no barriers",
        "Medication decision during first visit — no waiting for approval",
        "Clear, transparent pricing for medications and comprehensive care",
        "Side effects managed proactively — before they become a reason to stop",
        "Medically supervised plan, including a maintenance plan or taper if desired",
      ],
    },
    howItWorks: {
      eyebrow: "How It Works",
      heading: "Three steps. One doctor, the whole way through.",
      steps: [
        {
          n: "01",
          title: "Meet and build a personalized plan with your physician",
          body: "Meet Dr. Roohani by video and build a personalized, cost-intelligent plan around your health, goals, and budget. Know your costs before you begin.",
        },
        {
          n: "02",
          title: "Complete baseline lab work",
          body: "Complete any needed lab work to help inform your treatment. Dr. Roohani reviews the results with you.",
        },
        {
          n: "03",
          title: "Start your treatment",
          body: "Receive your prescription through the pharmacy or delivery option arranged for your treatment plan.",
        },
      ],
      ongoing: {
        title: "Stay connected",
        body: "Contact Dr. Roohani directly between visits. Get help managing side effects, reviewing progress, and adjusting treatment, including when coverage or medication costs change.",
      },
      footnotes: [
        "*Individual results vary. Weight loss outcomes depend on factors including dosage, adherence, and individual response to treatment, and are not guaranteed.",
        "**No specific medication is guaranteed. The decision will be determined solely by the licensed doctor based on independent clinical judgment following a medical evaluation.",
      ],
    },
    reviews: {
      eyebrow: "About the Doctor",
      verifiedFrom: "Verified reviews from",
      google: "Google",
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
            "YooshMD is built on a simple belief: weight-loss care should be personal, accessible, and thoughtful about cost. One physician, board-certified in obesity medicine, works directly with you to put that philosophy into practice.",
        },
        {
          question: "How do I get started with YooshMD?",
          answer:
            "You start with a free video consultation with Dr. Roohani. If it's a good fit, you sign up for a plan and complete baseline bloodwork. Medication is shipped to your door, and Dr. Roohani manages your care from there — reachable by phone for urgent questions and through the patient portal for everything else.",
        },
        {
          question: "Who qualifies for treatment?",
          answer:
            "Most adults age 18 and older who are struggling with overweight or obesity qualify. Final eligibility is determined during your medical evaluation to ensure treatment is safe and appropriate for you.",
        },
        {
          question: "Do I have to be on medication forever?",
          answer:
            "No. Many patients use medication temporarily to help establish momentum while building sustainable habits. We actively support tapering or discontinuing medications once your goal weight is achieved and lifestyle changes are established. If GLP-1 medications are being used to manage a condition beyond obesity — such as type 2 diabetes or liver disease — continuing long-term may be medically appropriate, and we'll discuss that with you directly.",
        },
        {
          question: "When will I get charged?",
          answer:
            "Each month, you will receive an invoice covering that month's treatment (and medication, if included in your plan). There are no automatic recurring charges — you're billed and pay invoice by invoice.",
        },
        {
          question: "Do you accept insurance?",
          answer:
            "We are currently self-pay only. This allows us to give you uninterrupted and personalized care.",
        },
        {
          question: "Are there any recurring charges?",
          answer:
            "No. You will receive a line-item invoice before treatment is rendered. Once the invoice is paid, your medication will be sent or prescribed and your labs will be ordered. If not, your slot will be released.",
        },
        {
          question: "Do I have to enroll in a monthly program?",
          answer:
            "No, you can choose to pay per visit after the initial consultation. Labs and medication costs are not included. The fee includes clinical monitoring, direct access, and a 3-month prescription with a follow up visit. Medication or dose adjustments will require a visit.",
        },
        {
          question: "What is your refund policy?",
          answer:
            "Once medications have been ordered, they are non-refundable. Invoices that are paid are also non-refundable.",
        },
        {
          question: "Where is your medication sourced from?",
          answer:
            "Compounded medications are sourced from Boudreaux's New Drug Store, a licensed 503A U.S. pharmacy based in Lake Charles, Louisiana, operating since 1923. Boudreaux's is inspected by the National Association of Boards of Pharmacy (NABP). Brand-name GLP-1 medications are fulfilled through LillyDirect Pharmacy Solutions and NovoCare Pharmacy. Other medications are fulfilled either via Cost Plus Drugs, which delivers, or prescriptions are sent to a local pharmacy of your choice.",
        },
        {
          question: "My medication came in a vial. How do I take it?",
          answer:
            "Your medication ships with detailed instructions for drawing up and injecting your prescribed dose. If you have any questions, the doctor is available to walk you through it.",
        },
        {
          question: "Can I choose which pharmacy I can get my medications from?",
          answer:
            "While we do partner with pharmacies to offer affordable prices, you can choose to source your medication from any pharmacy; however we cannot guarantee a price.",
        },
      ],
    },
    pricing: {
      eyebrow: "Transparent Pricing",
      heading: "Clear, upfront pricing. No surprises.",
      subhead:
        "Flexible plans available - with or without medication included. Explore the most cost-effective option for your treatment needs at your free consultation.",
      plans: [
        {
          name: "Semaglutide Program†",
          tagline: "Includes labs and medication, shipped to your door.",
        },
        {
          name: "Tirzepatide Program†",
          tagline: "Includes labs and medication, shipped to your door.",
        },
        {
          name: "Physician Oversight",
          tagline:
            "Wegovy®, Zepbound®, or Ozempic®, oral GLP-1 options, or non-GLP-1 treatment available. Medication cost and lab order cost not included*.",
        },
      ],
      includeHeading: "Every plan includes",
      included: [
        "Monthly video visits with Dr. Roohani",
        "Unlimited direct secure messaging",
        "Personalized treatment and dose adjustments",
        "Side-effect management and support",
        "Ongoing review of medication options and costs",
        "Weight-maintenance planning",
      ],
      footnote1: "**Some prescriptions may be sent to a local pharmacy for more timely access.",
      oversightLabFootnote: "*Basic lab panel is $36.",
      initialConsultTitle: "Already on a GLP-1? ",
      initialConsultTitleEmph: "Transfer your care seamlessly",
      initialConsultDetails:
        "30-minute video visit · Comprehensive medical review · Goal exploration · Medication overview",
      initialConsultNote: "No charges until you decide to continue.",
      initialConsultCta: "Book Free Visit",
      footnote2:
        "†Compounded medications are not FDA-approved and have not been evaluated by the FDA for safety, effectiveness, or quality.",
      doseDisclaimer: "No dose is guaranteed, ",
      doseDisclaimerLink: "see disclosures",
    },
    medications: {
      eyebrow: "Medications",
      heading: "Injectables or tablets - many options, personalized to your needs.",
      subhead:
        "Semaglutide or tirzepatide programs available. Prefer something else? Dr. Roohani can prescribe oral, brand-name (Wegovy®, Zepbound®, Ozempic®), or non-GLP-1 options such as phentermine.",
      options: [
        {
          title: "Semaglutide",
          descriptor:
            "GLP-1 receptor agonist that enhances satiety, delays gastric emptying, and improves glycemic control through glucose-dependent insulin secretion.†",
          body: "All doses, prepared by an accredited 503A pharmacy. Included with the Semaglutide Program.",
        },
        {
          title: "Tirzepatide",
          descriptor:
            "Dual GIP and GLP-1 receptor agonist, enhances satiety, delays gastric emptying, and improves insulin sensitivity.†",
          body: "All doses, prepared by an accredited 503A pharmacy. Included with the Tirzepatide Program.",
        },
        {
          title: "Oral, Branded & Non-GLP-1 Options",
          descriptor:
            "We can also prescribe oral GLP-1s (Wegovy®, Foundayo®), brand-name injectables (Zepbound®, Wegovy®, or Ozempic®), or non-GLP-1 options such as phentermine, based on your goals and history.",
        },
      ],
      footnote:
        "†Compounded medications are not FDA-approved and have not been evaluated by the FDA for safety, effectiveness, or quality.",
      trademarkFootnote:
        "Wegovy® and Ozempic® are registered trademarks of Novo Nordisk. Zepbound® and Foundayo® are registered trademarks of Eli Lilly and Company. YooshMD is not affiliated with or endorsed by these companies.",
    },
    toc: [
      { href: "#why", label: "Why YooshMD" },
      { href: "#how-it-works", label: "How It Works" },
      { href: "#pricing", label: "Pricing" },
      { href: "#medications", label: "Medications" },
      { href: "#reviews", label: "About" },
      { href: "#faq", label: "FAQ" },
    ],
    footer: {
      tagline: "A smarter, more personalized approach to weight loss.",
      description:
        "Virtual medical weight loss - California, Nevada, and Florida",
      links: {
        privacy: "Privacy Policy",
        privacyChoices: "Your Privacy Choices",
        disclaimers: "Disclosures & Disclaimers",
        terms: "Terms of Service",
        telehealth: "Telehealth Notice",
        noticeOfPrivacy: "Notice of Privacy Practices",
        accessibility: "Accessibility",
      },
      medicalDisclaimer:
        "This site does not constitute medical advice. Results vary. Individual outcomes depend on factors including health history, adherence to the program, and physician recommendations. This service is not intended for medical emergencies. If you are experiencing a medical emergency, call 911.",
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
          body: "YooshMD is a self-pay practice. We do not accept or bill insurance for any services. Dr. Roohani is not enrolled in Medicare and YooshMD does not accept Medicare or provide services to patients enrolled in Medicare.",
        },
        {
          heading: "Laboratory Testing",
          body: "Lab ordering and review by the physician is included with every plan. For the Semaglutide and Tirzepatide Programs, the cost of laboratory studies is bundled into the program fee. For the Physician Oversight plan, the cost of laboratory studies (basic panel $36) is billed separately. Labs are done via Quest Diagnostics in partnership with Rupa Health (acquired by FullScript).",
        },
        {
          heading: "Medication Costs",
          body: "The Semaglutide Program (from $220/month) and Tirzepatide Program (from $260/month) each include one (1) GLP-1 medication (compounded), one month's supply per month, bundled into the program fee; price varies based on prescribed dose. The Physician Oversight plan ($149/month) does not include medication cost; medication is paid for separately if prescribed. Prices are subject to change without notice. YooshMD does not guarantee the availability or pricing of any specific medication.",
        },
        {
          heading: "Compounded Medications",
          body: "Certain medications offered through YooshMD may be compounded by state-licensed compounding pharmacies. Compounded medications are not approved by the U.S. Food and Drug Administration (FDA) and have not undergone FDA review for safety, effectiveness, or quality. A compounded medication may be prescribed only when a licensed healthcare provider determines it is medically appropriate for an individual patient. FDA-approved alternatives may be available. Patients should discuss the risks, benefits, and available treatment options with their healthcare provider before starting therapy. Individual results vary and no specific outcome is guaranteed. YooshMD does not manufacture, compound, or dispense medications. All prescriptions are issued solely at the discretion of the treating provider and are fulfilled by appropriately licensed pharmacies in accordance with applicable state and federal laws.",
        },
        {
          heading: "Telehealth Services",
          body: "YooshMD provides telehealth services to patients located in California, Nevada, and Florida at the time of their visit. Patients are responsible for ensuring they are physically located in a state where YooshMD is licensed or registered to provide telehealth services at the time of each appointment.",
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
          body: "Patient reviews displayed on this website were collected through Google. Reviews are presented using reviewer initials only. YooshMD does not edit or fabricate patient reviews.",
        },
      ],
    },
  },
  es: {
    bookingUrl: "/book",
    analyticsNotice: {
      text: "Utilizamos análisis respetuosos con la privacidad y Google Analytics para entender el tráfico del sitio. Este sitio web no recopila información médica ni de pacientes — eso se maneja de forma segura a través de nuestro portal de pacientes. Consulte nuestra",
      linkText: "Política de Privacidad",
      accept: "Entendido",
      optOut: "Desactivar Google Analytics",
    },
    latestArticle: {
      heading: "Último artículo de YooshMD",
      readMore: "Leer el artículo",
      allArticles: "Ver todos los artículos",
    },
    nav: {
      bookShort: "Empezar",
      bookFull: "Reserve su Consulta Gratis",
      menu: "Menú",
      patientPortal: "Portal del Paciente",
      pricing: "Precios",
      about: "Acerca de",
      faq: "Preguntas Frecuentes",
      blog: "Blog",
      referPatient: "Referir a un Paciente",
      communityPartners: "Socios Comunitarios",
      phone: "(909) 293-8095",
    },
    hero: {
      eyebrow: "Pérdida de Peso Médica Virtual · Semaglutida y Tirzepatida",
      titlePre: "Un enfoque más inteligente y ",
      titleEmph: "personalizado",
      titlePost: " para perder peso.",
      subheadLead: "Acceso directo",
      subheadPre: " al mismo médico, ",
      subheadEmph: "certificado en medicina de la obesidad",
      subheadMid: ". Comience con un plan de tratamiento ",
      subheadEmph2: "inteligente y accesible",
      subheadPost: ", adaptado a su salud, sus metas y su presupuesto.",
      ctaBook: "Reserve su Consulta Gratis",
      ctaCall: "Llame al (909) 293-8095",
      checklist: [
        "Sin cargos hasta que usted decida",
        "Servicios de telesalud disponibles en California, Nevada y Florida",
      ],
      doctorName: "Darius Roohani, MD",
      doctorCred:
        "Certificado por dos juntas médicas · Medicina Interna y Medicina de la Obesidad · Egresado de la Residencia de Cedars-Sinai · Más de 5 años de experiencia",
      readMore: "Conozca más sobre el Dr. Roohani",
    },
    trustBar: [
      {
        value: "GLP-1 y más",
        label: "Semaglutida y Tirzepatida",
        sub: "Opciones orales y no GLP-1 disponibles",
      },
      { value: "100% Virtual", label: "Disponible en CA, NV y FL", sub: "Atención desde la comodidad de su hogar" },
      { value: "Transparente", label: "Precios claros y directos", sub: "Sin cargos sorpresa" },
    ],
    trustBarDisclaimer:
      "†Los medicamentos compuestos no están aprobados por la FDA y no han sido evaluados por la FDA en cuanto a seguridad, eficacia o calidad.",
    why: {
      eyebrow: "Qué Nos Hace Diferentes",
      heading:
        "La mayoría de los programas le dan una plataforma. Nosotros le damos acceso directo a su médico.",
      body: "En YooshMD, un doctor es personalmente responsable de su cuidado. Cuando surjan preguntas, los efectos secundarios interfieran o cambien los costos de los medicamentos, puede comunicarse directamente con su doctor, sin pasar por un centro de llamadas. Su plan de tratamiento evoluciona con su progreso, sus necesidades médicas y su presupuesto.",
      cardTitle: "Lo Más Destacado de YooshMD",
      points: [
        "Acceso directo a su doctor — llame o envíe un mensaje — sin barreras",
        "Decisión sobre medicamentos durante la primera visita — sin esperar aprobación",
        "Precios claros y transparentes para medicamentos y cuidado integral",
        "Efectos secundarios manejados de forma proactiva — antes de que se conviertan en un motivo para detenerse",
        "Plan supervisado médicamente, incluyendo un plan de mantenimiento o reducción gradual si así lo desea",
      ],
    },
    howItWorks: {
      eyebrow: "Cómo Funciona",
      heading: "Tres pasos. Un doctor, todo el camino.",
      steps: [
        {
          n: "01",
          title: "Reúnase y cree un plan personalizado con su médico",
          body: "Reúnase con el Dr. Roohani por video y cree un plan personalizado e inteligente en costos, según su salud, sus objetivos y su presupuesto. Conozca sus costos antes de comenzar.",
        },
        {
          n: "02",
          title: "Complete sus análisis de laboratorio iniciales",
          body: "Complete los análisis de laboratorio necesarios para orientar su tratamiento. El Dr. Roohani revisa los resultados con usted.",
        },
        {
          n: "03",
          title: "Comience su tratamiento",
          body: "Reciba su receta a través de la farmacia u opción de entrega establecida para su plan de tratamiento.",
        },
      ],
      ongoing: {
        title: "Manténgase en contacto",
        body: "Comuníquese directamente con el Dr. Roohani entre visitas. Reciba ayuda para manejar efectos secundarios, revisar su progreso y ajustar su tratamiento, incluso cuando cambien la cobertura o los costos de los medicamentos.",
      },
      footnotes: [
        "*Los resultados individuales varían. Los resultados de pérdida de peso dependen de factores que incluyen la dosis, la adherencia y la respuesta individual al tratamiento, y no están garantizados.",
        "**Ningún medicamento específico está garantizado. La decisión será determinada únicamente por el doctor con licencia, basada en su juicio clínico independiente tras una evaluación médica.",
      ],
    },
    reviews: {
      eyebrow: "Acerca del Doctor",
      verifiedFrom: "Reseñas verificadas de",
      google: "Google",
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
            "YooshMD se basa en una creencia simple: la atención para la pérdida de peso debe ser personal, accesible y consciente del costo. Un médico, certificado en medicina de la obesidad, trabaja directamente con usted para poner esa filosofía en práctica.",
        },
        {
          question: "¿Cómo empiezo con YooshMD?",
          answer:
            "Comienza con una consulta gratuita por video con el Dr. Roohani. Si es una buena opción para usted, se inscribe en un plan y completa análisis de sangre iniciales. El medicamento se envía a su domicilio, y el Dr. Roohani gestiona su atención a partir de ahí — disponible por teléfono para preguntas urgentes y a través del portal del paciente para todo lo demás.",
        },
        {
          question: "¿Quién califica para el tratamiento?",
          answer:
            "La mayoría de los adultos de 18 años o más que luchan contra el sobrepeso u obesidad califican. La elegibilidad final se determina durante su evaluación médica para asegurar que el tratamiento sea seguro y apropiado para usted.",
        },
        {
          question: "¿Tengo que tomar el medicamento para siempre?",
          answer:
            "No. Muchos pacientes usan el medicamento temporalmente para ayudar a generar impulso mientras desarrollan hábitos sostenibles. Apoyamos activamente la reducción gradual o suspensión de los medicamentos una vez que se alcanza el peso objetivo y se establecen los cambios de estilo de vida. Si los medicamentos GLP-1 se usan para manejar una condición más allá de la obesidad — como diabetes tipo 2 o enfermedad hepática — continuar a largo plazo puede ser médicamente apropiado, y lo hablaremos directamente con usted.",
        },
        {
          question: "¿Cuándo se me cobrará?",
          answer:
            "Cada mes recibirá una factura que cubre el tratamiento (y el medicamento, si está incluido en su plan) de ese mes. No hay cargos automáticos recurrentes — se le factura y paga factura por factura.",
        },
        {
          question: "¿Aceptan seguro médico?",
          answer:
            "Actualmente somos de pago directo (self-pay) únicamente. Esto nos permite brindarle una atención personalizada y sin interrupciones.",
        },
        {
          question: "¿Hay cargos recurrentes?",
          answer:
            "No. Recibirá una factura detallada antes de que se administre el tratamiento. Una vez pagada la factura, su medicamento será enviado o recetado y se ordenarán sus análisis de laboratorio. Si no se paga, su cupo será liberado.",
        },
        {
          question: "¿Tengo que inscribirme en un programa mensual?",
          answer:
            "No, puede optar por pagar por visita después de la consulta inicial. Los análisis de laboratorio y el costo del medicamento no están incluidos. La tarifa incluye monitoreo clínico, acceso directo y una receta para 3 meses con una visita de seguimiento. Los ajustes de medicamento o dosis requerirán una visita.",
        },
        {
          question: "¿Cuál es su política de reembolso?",
          answer:
            "Una vez que los medicamentos han sido pedidos, no son reembolsables. Las facturas ya pagadas tampoco son reembolsables.",
        },
        {
          question: "¿De dónde proviene su medicamento?",
          answer:
            "Los medicamentos compuestos provienen de Boudreaux's New Drug Store, una farmacia 503A con licencia en EE. UU., ubicada en Lake Charles, Luisiana, en operación desde 1923. Boudreaux's es inspeccionada por la Asociación Nacional de Juntas de Farmacia (NABP). Los medicamentos GLP-1 de marca se entregan a través de LillyDirect Pharmacy Solutions y NovoCare Pharmacy. Otros medicamentos se entregan a través de Cost Plus Drugs, que ofrece envío a domicilio, o las recetas se envían a la farmacia local de su elección.",
        },
        {
          question: "Mi medicamento llegó en un vial. ¿Cómo lo tomo?",
          answer:
            "Su medicamento se envía con instrucciones detalladas para extraer e inyectar su dosis recetada. Si tiene alguna pregunta, el doctor está disponible para guiarlo.",
        },
        {
          question: "¿Puedo elegir de qué farmacia obtener mis medicamentos?",
          answer:
            "Aunque trabajamos con farmacias asociadas para ofrecer precios accesibles, puede optar por obtener su medicamento de cualquier farmacia; sin embargo, no podemos garantizar un precio.",
        },
      ],
    },
    pricing: {
      eyebrow: "Precios Transparentes",
      heading: "Precios claros y por adelantado. Sin sorpresas.",
      subhead:
        "Planes flexibles disponibles - con o sin medicamento incluido. Explore la opción más rentable para sus necesidades de tratamiento en su consulta gratuita.",
      plans: [
        {
          name: "Programa de Semaglutida†",
          tagline: "Incluye análisis de laboratorio y medicamento, enviado a su puerta.",
        },
        {
          name: "Programa de Tirzepatida†",
          tagline: "Incluye análisis de laboratorio y medicamento, enviado a su puerta.",
        },
        {
          name: "Supervisión Médica",
          tagline:
            "Wegovy®, Zepbound®, u Ozempic®, opciones orales de GLP-1, o tratamiento no GLP-1 disponible. Costo de medicamento y costo de órdenes de laboratorio no incluidos*.",
        },
      ],
      includeHeading: "Todos los planes incluyen",
      included: [
        "Visitas mensuales por video con el Dr. Roohani",
        "Mensajería segura directa e ilimitada",
        "Tratamiento personalizado y ajustes de dosis",
        "Manejo y apoyo para efectos secundarios",
        "Revisión continua de opciones y costos de medicamentos",
        "Planificación para el mantenimiento del peso",
      ],
      footnote1:
        "**Algunas recetas pueden enviarse a una farmacia local para un acceso más oportuno.",
      oversightLabFootnote: "*El panel básico de laboratorio cuesta $36.",
      initialConsultTitle: "¿Ya usa un GLP-1? ",
      initialConsultTitleEmph: "Transfiera su atención sin complicaciones",
      initialConsultDetails:
        "Visita por video de 30 minutos · Revisión médica integral · Exploración de objetivos · Resumen de medicamentos",
      initialConsultNote: "Sin cargos hasta que decida continuar.",
      initialConsultCta: "Reserve su Visita Gratis",
      footnote2:
        "†Los medicamentos compuestos no están aprobados por la FDA y no han sido evaluados por la FDA en cuanto a seguridad, eficacia o calidad.",
      doseDisclaimer: "Ninguna dosis está garantizada, ",
      doseDisclaimerLink: "ver divulgaciones",
    },
    medications: {
      eyebrow: "Medicamentos",
      heading: "Inyectables o tabletas - muchas opciones, personalizadas a sus necesidades.",
      subhead:
        "Programas de semaglutida o tirzepatida disponibles. ¿Prefiere algo más? El Dr. Roohani puede recetar opciones orales, de marca (Wegovy®, Zepbound®, Ozempic®), o no GLP-1, como la fentermina.",
      options: [
        {
          title: "Semaglutida",
          descriptor:
            "Agonista del receptor GLP-1 que aumenta la saciedad, retrasa el vaciado gástrico y mejora el control glucémico mediante la secreción de insulina dependiente de glucosa.†",
          body: "Todas las dosis, preparadas por una farmacia acreditada 503A. Incluido con el Programa de Semaglutida.",
        },
        {
          title: "Tirzepatida",
          descriptor:
            "Agonista dual del receptor GIP y GLP-1, aumenta la saciedad, retrasa el vaciado gástrico y mejora la sensibilidad a la insulina.†",
          body: "Todas las dosis, preparadas por una farmacia acreditada 503A. Incluido con el Programa de Tirzepatida.",
        },
        {
          title: "Opciones Orales, de Marca y No GLP-1",
          descriptor:
            "También podemos recetar GLP-1 orales (Wegovy®, Foundayo®), inyectables de marca (Zepbound®, Wegovy®, u Ozempic®), o opciones no GLP-1 como la fentermina, según sus objetivos e historial.",
        },
      ],
      footnote:
        "†Los medicamentos compuestos no están aprobados por la FDA y no han sido evaluados por la FDA en cuanto a seguridad, eficacia o calidad.",
      trademarkFootnote:
        "Wegovy® y Ozempic® son marcas registradas de Novo Nordisk. Zepbound® y Foundayo® son marcas registradas de Eli Lilly and Company. YooshMD no está afiliado ni respaldado por estas empresas.",
    },
    toc: [
      { href: "#why", label: "Por Qué YooshMD" },
      { href: "#how-it-works", label: "Cómo Funciona" },
      { href: "#pricing", label: "Precios" },
      { href: "#medications", label: "Medicamentos" },
      { href: "#reviews", label: "Acerca de" },
      { href: "#faq", label: "Preguntas Frecuentes" },
    ],
    footer: {
      tagline: "Un enfoque más inteligente y personalizado para perder peso.",
      description:
        "Pérdida de peso médica virtual - California, Nevada y Florida",
      links: {
        privacy: "Política de Privacidad",
        privacyChoices: "Sus Opciones de Privacidad",
        disclaimers: "Divulgaciones y Descargos de Responsabilidad",
        terms: "Términos de Servicio",
        telehealth: "Aviso de Telesalud",
        noticeOfPrivacy: "Aviso de Prácticas de Privacidad",
        accessibility: "Accesibilidad",
      },
      medicalDisclaimer:
        "Este sitio no constituye asesoramiento médico. Los resultados varían. Los resultados individuales dependen de factores que incluyen el historial médico, la adherencia al programa y las recomendaciones médicas. Este servicio no está destinado para emergencias médicas. Si tiene una emergencia médica, llame al 911.",
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
          body: "YooshMD es una práctica de pago directo (self-pay). No aceptamos ni facturamos a seguros médicos por ningún servicio. El Dr. Roohani no está inscrito en Medicare y YooshMD no acepta Medicare ni brinda servicios a pacientes inscritos en Medicare.",
        },
        {
          heading: "Análisis de Laboratorio",
          body: "La orden y revisión de laboratorio por parte del médico está incluida en todos los planes. Para los Programas de Semaglutida y Tirzepatida, el costo de los estudios de laboratorio está incluido en la tarifa del programa. Para el plan de Supervisión Médica, el costo de los estudios de laboratorio (panel básico $36) se factura por separado. Los análisis se realizan a través de Quest Diagnostics en asociación con Rupa Health (adquirida por FullScript).",
        },
        {
          heading: "Costos de Medicamentos",
          body: "El Programa de Semaglutida (desde $220/mes) y el Programa de Tirzepatida (desde $260/mes) incluyen cada uno un (1) medicamento GLP-1 (compuesto), un suministro de un mes por mes, incluido en la tarifa del programa; el precio varía según la dosis recetada. El plan de Supervisión Médica ($149/mes) no incluye el costo del medicamento; el medicamento se paga por separado si se receta. Los precios están sujetos a cambios sin previo aviso. YooshMD no garantiza la disponibilidad ni el precio de ningún medicamento específico.",
        },
        {
          heading: "Medicamentos Compuestos",
          body: "Ciertos medicamentos ofrecidos a través de YooshMD pueden ser compuestos por farmacias de compuestos con licencia estatal. Los medicamentos compuestos no están aprobados por la Administración de Alimentos y Medicamentos de EE. UU. (FDA) y no han sido evaluados por la FDA en cuanto a seguridad, eficacia o calidad. Un medicamento compuesto solo puede recetarse cuando un proveedor de atención médica con licencia determina que es médicamente apropiado para un paciente individual. Pueden estar disponibles alternativas aprobadas por la FDA. Los pacientes deben discutir los riesgos, beneficios y opciones de tratamiento disponibles con su proveedor de atención médica antes de comenzar la terapia. Los resultados individuales varían y no se garantiza ningún resultado específico. YooshMD no fabrica, compone ni dispensa medicamentos. Todas las recetas se emiten únicamente a discreción del proveedor tratante y se surten en farmacias debidamente autorizadas de acuerdo con las leyes estatales y federales aplicables.",
        },
        {
          heading: "Servicios de Telesalud",
          body: "YooshMD proporciona servicios de telesalud a pacientes ubicados en California, Nevada y Florida al momento de su visita. Los pacientes son responsables de asegurarse de que se encuentran físicamente en un estado donde YooshMD tiene licencia o registro para proporcionar servicios de telesalud al momento de cada cita.",
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
          body: "Las reseñas de pacientes que se muestran en este sitio web fueron recopiladas a través de Google. Las reseñas se presentan usando solo las iniciales del autor. YooshMD no edita ni fabrica reseñas de pacientes.",
        },
      ],
    },
  },
} as const;
