import type { Language } from '../types';

export const translations: Record<Language, Record<string, any>> = {
  fr: {
    brandName: "TOUMIVAL SARL",
    brandSubtitle: "Architecture Aluminium & Verre — Marrakech",
    nav: {
      home: "ACCUEIL",
      expertise: "EXPERTISE",
      solutions: "NOS SOLUTIONS",
      realisations: "RÉALISATIONS",
      about: "À PROPOS",
      contact: "CONTACT",
      requestQuote: "DEMANDER UN DEVIS",
      selectLanguage: "Langue"
    },
    hero: {
      title1: "MENUISERIE ALUMINIUM",
      title2: "HAUTE GAMME",
      subtitle: "L'élégance architecturale en aluminium & verre sur mesure.",
      btnDiscover: "DÉCOUVRIR NOS RÉALISATIONS",
      btnQuote: "DEMANDER UN DEVIS",
      scroll: "SCROLL"
    },
    intro: {
      heading: "L'ALUMINIUM ET LE VERRE, AU SERVICE DE L'ARCHITECTURE.",
      paragraph: "TOUMIVAL SARL est le spécialiste à Marrakech et dans tout le Maroc en menuiserie aluminium haut de gamme, double vitrage, pergolas bioclimatiques, garde-corps en verre, mur rideau et vitrerie d'art.",
      pillars: [
        { title: "PRÉCISION", desc: "Ajustements micrométriques & profils minimalistes." },
        { title: "DESIGN", desc: "Lignes épurées et transparence maximale." },
        { title: "PERFORMANCE", desc: "Isolation thermique & acoustique supérieure." },
        { title: "SUR MESURE", desc: "Conception personnalisée selon vos plans." }
      ]
    },
    servicesOverview: {
      title: "NOS SOLUTIONS",
      subtitle: "ALUMINIUM · VERRE · ARCHITECTURE",
      exploreBtn: "Voir le détail"
    },
    servicesCategory: {
      title: "NOTRE EXPERTISE",
      subtitle: "Des prestations d'exception structurées pour votre architecture.",
      categories: {
        aluminium: "ALUMINIUM",
        architecture: "ARCHITECTURE",
        glass: "VERRE & INTÉRIEUR"
      },
      viewAll: "Explorer les 11 expertises",
      nextService: "SERVICE SUIVANT →"
    },
    pergolaSection: {
      badge: "FEATURED OUTDOOR SYSTEM",
      title: "PERGOLA BIOCLIMATIQUE",
      subtitle: "Une architecture extérieure pensée pour votre confort absolu.",
      description: "Système de lames orientables motorisées, éclairage LED intégré et parois vitrées coulissantes pour dompter le soleil et les saisons à Marrakech et au Maroc.",
      btn: "DÉCOUVRIR LES PERGOLAS"
    },
    glassSection: {
      title: "LE VERRE COMME MATIÈRE ARCHITECTURALE.",
      subtitle: "Une transparence structurale qui magnifie la lumière naturelle.",
      items: [
        { label: "Garde-corps verre escalier & terrasse", desc: "Transparence absolue pour terrasses et balcons." },
        { label: "Escaliers en verre", desc: "Suspension visuelle et élégance épurée." },
        { label: "Parois de douche minimalistes", desc: "Design d'intérieur haut de gamme." },
        { label: "Miroirs d'exception Saint-Gobain", desc: "Profondeur visuelle et reflets parfaits." }
      ]
    },
    aluminiumSection: {
      title: "PRÉCISION. PERFORMANCE. DESIGN.",
      subtitle: "Ingénierie de pointe pour les profils et baies aluminium.",
      attributes: [
        { key: "THERMIQUE", desc: "Rupture de pont thermique ultra-performante." },
        { key: "ACOUSTIQUE", desc: "Atténuation sonore jusqu'à 48 dB." },
        { key: "SÉCURITÉ", desc: "Verrouillage multipoints & verre feuilleté." },
        { key: "ESTHÉTIQUE", desc: "Finitions thermolaquées & profils invisibles." }
      ]
    },
    curtainWallSection: {
      title: "DES FAÇADES QUI TRANSFORMENT L'ARCHITECTURE.",
      subtitle: "Mur rideau structurel & façades vitrées grand format.",
      description: "Sublimez vos immeubles et résidences d'exception grâce à nos structures en mur rideau associant transparence cristalline et rigidité mécanique."
    },
    projects: {
      title: "NOS RÉALISATIONS",
      subtitle: "Une sélection de nos projets résidentiels et commerciaux les plus emblématiques.",
      allFilter: "Tous les projets",
      viewDetails: "Détails du projet",
      locationLabel: "Emplacement",
      categoryLabel: "Catégorie",
      closeModal: "Fermer"
    },
    craftsmanship: {
      title: "CHAQUE DÉTAIL COMPTE.",
      subtitle: "L'exigence du sur-mesure et des finitions parfaites.",
      items: [
        {
          heading: "SUR MESURE",
          desc: "Des solutions personnalisées adaptées à chaque géométrie architecturale."
        },
        {
          heading: "MATÉRIAUX PREMIUM",
          desc: "Alliages d'aluminium haute résistance & verre Saint-Gobain de première qualité."
        },
        {
          heading: "FINITIONS SOIGNÉES",
          desc: "Assemblages invisibles, joints silicones de précision et anodisation supérieure."
        }
      ]
    },
    process: {
      title: "DE L'IDÉE À LA RÉALISATION.",
      subtitle: "Notre méthodologie rigoureuse en 5 étapes.",
      steps: [
        { number: "01", title: "ÉTUDE DU PROJET", desc: "Analyse technique, prise de cotes sur site & conseils d'experts." },
        { number: "02", title: "CONCEPTION", desc: "Plans 2D/3D, choix des profils, vitrages et validation architecturale." },
        { number: "03", title: "FABRICATION", desc: "Usinage de précision dans nos ateliers équipés de machines CNC." },
        { number: "04", title: "INSTALLATION", desc: "Pose dans les règles de l'art par nos équipes qualifiées." },
        { number: "05", title: "FINITIONS", desc: "Contrôle qualité rigoureux et livraison du chantier sans réserve." }
      ]
    },
    about: {
      title: "NOTRE SAVOIR-FAIRE",
      subtitle: "Spécialiste de la menuiserie aluminium & vitrerie d'art à Marrakech.",
      paragraph1: "TOUMIVAL SARL incarne l'alliance parfaite entre l'artisanat d'art et l'ingénierie moderne. Implantés au Quartier Industriel Hay Al Masar à Marrakech, nous accompagnons architectes, promoteurs et particuliers exigeants dans la concrétisation de leurs visions architecturales.",
      paragraph2: "De la conception sur mesure dans nos ateliers de Marrakech à la pose finale sur chantier, nos experts mettent en œuvre les matériaux les plus nobles pour créer des ouvertures d'exception.",
      stats: [
        { number: "500+", label: "Projets réalisés" },
        { number: "100%", label: "Sur mesure" },
        { number: "Marrakech", label: "Siège social" },
        { number: " Saint-Gobain ", label: "Partenaire vitrage" }
      ]
    },
    cta: {
      title: "VOTRE PROJET COMMENCE ICI.",
      subtitle: "Parlons de votre prochain projet architectural et concrétisons vos idées.",
      btnQuote: "DEMANDER UN DEVIS",
      btnContact: "NOUS CONTACTER"
    },
    contact: {
      title: "CONTACTEZ TOUMIVAL",
      subtitle: "Notre équipe technique à Marrakech est à votre disposition pour vous conseiller et chiffrer vos travaux.",
      phone: "Téléphone direct",
      phoneNumber: "+212 668-334555",
      phoneLandline: "0668-334555",
      whatsapp: "WhatsApp Direct",
      whatsappNumber: "+212 668-334555",
      email: "Email officiel",
      emailAddress: "toumival@hotmail.com",
      address: "Adresse des ateliers",
      addressText: "Quartier Industriel Hay Al Masar, Marrakech, Maroc",
      socials: "Instagram Officiel",
      instagramHandle: "@toumival_sarl",
      instagramUrl: "https://instagram.com/toumival_sarl",
      hoursTitle: "Horaires d'ouverture",
      hoursWeek: "Lundi — Samedi: 09:00 - 17:00",
      hoursSunday: "Dimanche: FERMÉ",
      statusOpen: "OUVERT AUJOURD'HUI (09:00 - 17:00)",
      form: {
        title: "Envoyer un message à l'atelier",
        name: "Nom complet",
        namePlaceholder: "Ex: Karim El Mansouri",
        phone: "Téléphone",
        phonePlaceholder: "Ex: 0668-334555",
        email: "Adresse email",
        emailPlaceholder: "Ex: karim@exemple.com",
        projectType: "Type de projet",
        projectTypeOptions: [
          "Sélectionner un service...",
          "Menuiserie Aluminium Haute Gamme",
          "Double Vitrage / Baies Vitrées",
          "Volets Roulants Motorisés",
          "Garde-corps en Verre (Escalier / Terrasse)",
          "Verrières à différents designs",
          "Brise-Soleil Aluminium",
          "Pergola Bioclimatique",
          "Mur Rideau / Façade",
          "Parois de Douche en Verre",
          "Décoration Verre",
          "Miroir Saint-Gobain",
          "Projet global / Multiple"
        ],
        city: "Ville du projet",
        cityPlaceholder: "Ex: Marrakech, Casablanca, Agadir, Rabat...",
        message: "Message / Détails du projet",
        messagePlaceholder: "Décrivez les dimensions approximatives, le style souhaité ou vos contraintes techniques...",
        submitBtn: "ENVOYER LA DEMANDE",
        submitting: "ENVOI EN COURS...",
        successTitle: "Demande transmise avec succès !",
        successDesc: "Nous avons bien reçu votre message. Un conseiller TOUMIVAL vous recontactera rapidement.",
        errorTitle: "Erreur lors de l'envoi",
        errorDesc: "Veuillez vérifier les champs obligatoires et réessayer."
      }
    },
    footer: {
      tagline: "L'excellence de la menuiserie aluminium et du verre architectural à Marrakech, Maroc.",
      quickLinks: "Navigation",
      servicesTitle: "Nos Expertises",
      contactTitle: "Atelier Marrakech",
      rights: "Tous droits réservés. TOUMIVAL SARL.",
      privacy: "Mentions Légales & Confidentialité"
    },
    quoteModal: {
      title: "DEMANDE DE DEVIS SUR MESURE",
      subtitle: "Remplissez ce formulaire pour recevoir une étude financière et technique sous 24h."
    }
  },

  en: {
    brandName: "TOUMIVAL SARL",
    brandSubtitle: "Aluminium & Glass Architecture — Marrakech",
    nav: {
      home: "HOME",
      expertise: "EXPERTISE",
      solutions: "OUR SOLUTIONS",
      realisations: "PROJECTS",
      about: "ABOUT",
      contact: "CONTACT",
      requestQuote: "REQUEST A QUOTE",
      selectLanguage: "Language"
    },
    hero: {
      title1: "PREMIUM ALUMINIUM",
      title2: "JOINERY & GLAZING",
      subtitle: "Architectural elegance in bespoke aluminium & high-performance glass.",
      btnDiscover: "EXPLORE OUR PROJECTS",
      btnQuote: "REQUEST A QUOTE",
      scroll: "SCROLL"
    },
    intro: {
      heading: "ALUMINIUM & GLASS AT THE SERVICE OF ARCHITECTURE.",
      paragraph: "TOUMIVAL SARL is the premier specialist in Marrakech and across Morocco for luxury aluminium joinery, double glazing, bioclimatic pergolas, glass railings, curtain walls, and art glass.",
      pillars: [
        { title: "PRECISION", desc: "Micrometric fit & minimalist profiles." },
        { title: "DESIGN", desc: "Pure architectural lines and maximum light." },
        { title: "PERFORMANCE", desc: "Superior thermal and acoustic insulation." },
        { title: "CUSTOM MADE", desc: "Tailored engineering crafted for your exact specs." }
      ]
    },
    servicesOverview: {
      title: "OUR SOLUTIONS",
      subtitle: "ALUMINIUM · GLASS · ARCHITECTURE",
      exploreBtn: "View Details"
    },
    servicesCategory: {
      title: "OUR EXPERTISE",
      subtitle: "Exceptional architectural solutions engineered for modern living.",
      categories: {
        aluminium: "ALUMINIUM",
        architecture: "ARCHITECTURE",
        glass: "GLASS & INTERIORS"
      },
      viewAll: "Explore All 11 Expertises",
      nextService: "NEXT SERVICE →"
    },
    pergolaSection: {
      badge: "FEATURED OUTDOOR SYSTEM",
      title: "BIOCLIMATIC PERGOLA",
      subtitle: "Outdoor architectural living crafted for absolute comfort.",
      description: "Motorized adjustable louver roof, integrated dimmable LED lighting, and glass sliding panels engineered for Marrakech weather and luxury living.",
      btn: "EXPLORE PERGOLAS"
    },
    glassSection: {
      title: "GLASS AS AN ARCHITECTURAL MATERIAL.",
      subtitle: "Structural transparency that elevates natural light.",
      items: [
        { label: "Staircase & Terrace Glass Railings", desc: "Absolute transparency for balconies and outdoor decks." },
        { label: "Floating Glass Staircases", desc: "Visual weightlessness and refined elegance." },
        { label: "Minimalist Shower Enclosures", desc: "Premium bathroom interior design." },
        { label: "Saint-Gobain Master Mirrors", desc: "Crystal visual depth and flawless reflection." }
      ]
    },
    aluminiumSection: {
      title: "PRECISION. PERFORMANCE. DESIGN.",
      subtitle: "High-end engineering for aluminium profiles and sliding systems.",
      attributes: [
        { key: "THERMAL", desc: "Ultra-efficient thermal break insulation." },
        { key: "ACOUSTIC", desc: "Sound reduction up to 48 dB." },
        { key: "SECURITY", desc: "Multi-point locking hardware & laminated safety glass." },
        { key: "AESTHETICS", desc: "Powder-coated finishes & concealed frames." }
      ]
    },
    curtainWallSection: {
      title: "FAÇADES THAT TRANSFORM ARCHITECTURE.",
      subtitle: "Structural curtain walls & large format glass façades.",
      description: "Enhance commercial landmarks and luxury private residences with our high-strength curtain wall systems combining pristine transparency and structural durability."
    },
    projects: {
      title: "FEATURED PROJECTS",
      subtitle: "A curated collection of our finest residential and commercial architectural installations.",
      allFilter: "All Projects",
      viewDetails: "Project Details",
      locationLabel: "Location",
      categoryLabel: "Category",
      closeModal: "Close"
    },
    craftsmanship: {
      title: "EVERY DETAIL COUNTS.",
      subtitle: "The commitment to custom excellence and flawless finishes.",
      items: [
        {
          heading: "BESPOKE DESIGN",
          desc: "Tailor-made structural engineering for any architectural geometry."
        },
        {
          heading: "PREMIUM MATERIALS",
          desc: "High-tensile aluminium alloys & Saint-Gobain structural glass."
        },
        {
          heading: "METICULOUS FINISHES",
          desc: "Seamless joins, precision silicone seals, and superior anodization."
        }
      ]
    },
    process: {
      title: "FROM VISION TO REALIZATION.",
      subtitle: "Our rigorous 5-step engineering methodology.",
      steps: [
        { number: "01", title: "PROJECT ANALYSIS", desc: "Technical survey, site measurements & expert consultation." },
        { number: "02", title: "DESIGN & 3D MODELLING", desc: "2D/3D shop drawings, glass selection & architect validation." },
        { number: "03", title: "FABRICATION", desc: "CNC precision machining in our specialized workshop." },
        { number: "04", title: "INSTALLATION", desc: "Professional site installation by our certified technicians." },
        { number: "05", title: "FINISHING & QA", desc: "Strict quality control inspection and zero-defect handover." }
      ]
    },
    about: {
      title: "OUR KNOW-HOW",
      subtitle: "Aluminium joinery & art glazing specialist in Marrakech.",
      paragraph1: "TOUMIVAL SARL embodies the fusion of master craftsmanship and contemporary engineering. Located in the Hay Al Masar Industrial Zone in Marrakech, we partner with world-class architects, developers, and homeowners.",
      paragraph2: "From initial bespoke design in our Marrakech workshops to final site assembly, our specialists work with top-tier materials to deliver timeless openings.",
      stats: [
        { number: "500+", label: "Completed Projects" },
        { number: "100%", label: "Custom Built" },
        { number: "Marrakech", label: "Headquarters" },
        { number: " Saint-Gobain ", label: "Glass Partner" }
      ]
    },
    cta: {
      title: "YOUR PROJECT STARTS HERE.",
      subtitle: "Let's discuss your next architectural project and turn your vision into reality.",
      btnQuote: "REQUEST A QUOTE",
      btnContact: "CONTACT US"
    },
    contact: {
      title: "CONTACT TOUMIVAL",
      subtitle: "Our technical team in Marrakech is ready to consult, measure, and quote your project.",
      phone: "Direct Phone",
      phoneNumber: "+212 668-334555",
      phoneLandline: "0668-334555",
      whatsapp: "Direct WhatsApp",
      whatsappNumber: "+212 668-334555",
      email: "Official Email",
      emailAddress: "toumival@hotmail.com",
      address: "Workshop Address",
      addressText: "Hay Al Masar Industrial Zone, Marrakech, Morocco",
      socials: "Official Instagram",
      instagramHandle: "@toumival_sarl",
      instagramUrl: "https://instagram.com/toumival_sarl",
      hoursTitle: "Opening Hours",
      hoursWeek: "Monday — Saturday: 09:00 - 17:00",
      hoursSunday: "Sunday: CLOSED",
      statusOpen: "OPEN TODAY (09:00 - 17:00)",
      form: {
        title: "Send a Message to Workshop",
        name: "Full Name",
        namePlaceholder: "E.g. Karim El Mansouri",
        phone: "Phone Number",
        phonePlaceholder: "E.g. +212 668-334555",
        email: "Email Address",
        emailPlaceholder: "E.g. karim@example.com",
        projectType: "Project Type",
        projectTypeOptions: [
          "Select a service...",
          "Premium Aluminium Joinery",
          "Double Glazing / Panoramic Windows",
          "Motorized Roller Shutters",
          "Glass Railings (Staircase / Terrace)",
          "Glass Partitions (Custom Designs)",
          "Aluminium Sun Shading Systems",
          "Bioclimatic Pergola",
          "Glass Curtain Wall Façade",
          "Glass Shower Enclosure",
          "Decorative Architectural Glass",
          "Saint-Gobain Premium Mirrors",
          "Comprehensive Full Project"
        ],
        city: "Project City",
        cityPlaceholder: "E.g. Marrakech, Casablanca, Agadir, Rabat...",
        message: "Message / Project Details",
        messagePlaceholder: "Specify approximate dimensions, desired profile style, or technical constraints...",
        submitBtn: "SEND REQUEST",
        submitting: "SENDING...",
        successTitle: "Request Sent Successfully!",
        successDesc: "Thank you for reaching out. A TOUMIVAL technical consultant will contact you promptly.",
        errorTitle: "Submission Error",
        errorDesc: "Please check the required fields and try again."
      }
    },
    footer: {
      tagline: "Excellence in aluminium joinery & architectural glass in Marrakech, Morocco.",
      quickLinks: "Navigation",
      servicesTitle: "Our Services",
      contactTitle: "Marrakech Workshop",
      rights: "All rights reserved. TOUMIVAL SARL.",
      privacy: "Legal Terms & Privacy Policy"
    },
    quoteModal: {
      title: "REQUEST A BESPOKE QUOTE",
      subtitle: "Fill out this form to receive a detailed technical and financial estimate within 24 hours."
    }
  },

  ar: {
    brandName: "طوميفال ذ.م.م",
    brandSubtitle: "أنظمة الألمنيوم والزجاج المعماري — مراكش",
    nav: {
      home: "الرئيسية",
      expertise: "خبراتنا",
      solutions: "حلولنا",
      realisations: "إنجازاتنا",
      about: "من نحن",
      contact: "اتصل بنا",
      requestQuote: "طلب عرض سعر",
      selectLanguage: "اللغة"
    },
    hero: {
      title1: "نجارة الألمنيوم",
      title2: "الراقية والفاخرة",
      subtitle: "الأناقة المعمارية الفائقة بتناغم الألمنيوم والزجاج حسب المقاس.",
      btnDiscover: "استكشف إنجازاتنا المعمارية",
      btnQuote: "اطلب عرض سعر مخصص",
      scroll: "تمرير"
    },
    intro: {
      heading: "الألمنيوم والزجاج في خدمة الهندسة المعمارية الحديثة.",
      paragraph: "شركة طوميفال (TOUMIVAL SARL) هي المتخصص الرائد بمراكش وكافة أنحاء المغرب في نجارة الألمنيوم الراقية، الزجاج المزدوج، البرجولا البيومناخية، الحواجز الزجاجية للسلالم والتراسات، والواجهات الستارية.",
      pillars: [
        { title: "دقة متناهية", desc: "تعديلات ميكرومترية وبروفيلات فائقة النحافة." },
        { title: "تصميم عصري", desc: "خطوط ناعمة وشفافية مطلقة للضوء الطبيعي." },
        { title: "أداء عالٍ", desc: "عزل حراري وصوتي ممتاز وفق أعلى المعايير." },
        { title: "حسب المقاس", desc: "تصميم وتصنيع مخصص بالكامل لمشروعك." }
      ]
    },
    servicesOverview: {
      title: "حلولنا المعمارية",
      subtitle: "ألمنيوم · زجاج · واجهات معمارية",
      exploreBtn: "عرض التفاصيل"
    },
    servicesCategory: {
      title: "خبراتنا المتميزة",
      subtitle: "خدمات معمارية راقية مصممة خصيصاً للمساحات الفاخرة.",
      categories: {
        aluminium: "نجارة الألمنيوم",
        architecture: "أنظمة الواجهات",
        glass: "الزجاج والديكور الداخلي"
      },
      viewAll: "استكشف جميع التخصصات الـ 11",
      nextService: "الخدمة التالية ←"
    },
    pergolaSection: {
      badge: "نظام التظليل الخارجي الفاخر",
      title: "البرجولا البيومناخية",
      subtitle: "عمارة خارجية صُممت لراحتك المطلقة على مدار السنة.",
      description: "نظام شرائح ألمنيوم متحركة ومحركة، إضاءة خفية دافئة، وفواصل زجاجية منزلقة لتنعم بجمال المساحات الخارجية في كل الفصول بمراكش والمغرب.",
      btn: "اكتشف أنواع البرجولا"
    },
    glassSection: {
      title: "الزجاج كمادة معمارية فاخرة.",
      subtitle: "شفافية هيكلية تُبرز جمال الضوء والمساحات.",
      items: [
        { label: "حواجز زجاجية للسلالم والتراسات", desc: "شفافية مطلقة للشرفات والتراسات والسلالم." },
        { label: "سلالم زجاجية معلقة", desc: "خفة بصرية وأناقة معمارية فريدة." },
        { label: "حواجز دش حديثة", desc: "تصاميم حمامات داخلية فاخرة." },
        { label: "مرايا سان جوبان الفاخرة", desc: "عمق بصري وانعكاس بلوري نقي." }
      ]
    },
    aluminiumSection: {
      title: "دقة. أداء. تصميم.",
      subtitle: "هندسة متطورة لقطاعات الألمنيوم والنوافذ المنزلقة.",
      attributes: [
        { key: "حراري", desc: "عزل حراري فائق يمنع تسرب الحرارة." },
        { key: "صوتي", desc: "تخفيض الضوضاء الخارجية حتى 48 ديسيبل." },
        { key: "أمان", desc: "نظام إغلاق متعدد النقاط وزجاج أمان مضاعف." },
        { key: "جماليات", desc: "طلاء حراري مقاوم وإطارات مخفية." }
      ]
    },
    curtainWallSection: {
      title: "واجهات زجاجية تُغير مفهوم الهندسة.",
      subtitle: "الواجهة الستارية الزجاجية للمباني والإقامات الفاخرة.",
      description: "ارتقِ بمظهر المشاريع التجارية والفيلات الحديثة من خلال أنظمة الواجهات الستارية التي تجمع بين صلابة الهيكل وجمال الشفافية."
    },
    projects: {
      title: "إنجازاتنا الفاخرة",
      subtitle: "تشكيلة مختارة من أبداعاتنا في الفيلات الخاصة والمشاريع المعمارية.",
      allFilter: "جميع المشاريع",
      viewDetails: "تفاصيل المشروع",
      locationLabel: "الموقع",
      categoryLabel: "الفئة",
      closeModal: "إغلاق"
    },
    craftsmanship: {
      title: "كل تفصيل يصنع الفارق.",
      subtitle: "الالتزام بأعلى درجات الجودة واللمسات الأخيرة المتقنة.",
      items: [
        {
          heading: "صناعة حسب المقاس",
          desc: "حلول هندسية مصممة خصيصاً لكل هيكل معماري."
        },
        {
          heading: "مواد عالية الجودة",
          desc: "سبائك ألمنيوم عالية المقاومة وزجاج سان جوبان العالمي."
        },
        {
          heading: "تشطيبات فائقة الدقة",
          desc: "تجميع غير مرئي، وصلات سيليكون دقيقة، وأكسدة ألمنيوم ممتازة."
        }
      ]
    },
    process: {
      title: "من الفكرة إلى الإنجاز.",
      subtitle: "منهجيتنا الدقيقة في 5 مراحل متكاملة.",
      steps: [
        { number: "01", title: "دراسة المشروع", desc: "تحليل تقني، أخذ المقاسات بعين المكان واستشارة الخبراء." },
        { number: "02", title: "التصميم والتخطيط", desc: "مخططات ثنائية وثلاثية الأبعاد واختيار نوعية الزجاج والألمنيوم." },
        { number: "03", title: "التصنيع في ورشتنا", desc: "تشغيل آلي فائق الدقة في ورشتنا بمراكش." },
        { number: "04", title: "التركيب والتثبيت", desc: "تركيب احترافي في الموقع بواسطة فرقنا المتخصصة." },
        { number: "05", title: "التشطيب والتسليم", desc: "مراقبة صارمة للجودة وتسليم المشروع بكامل الضمانات." }
      ]
    },
    about: {
      title: "خبرتنا ومهارتنا",
      subtitle: "متخصص نجارة الألمنيوم والزجاج المعماري بمراكش.",
      paragraph1: "تجسد طوميفال (TOUMIVAL SARL) المزج المثالي بين الحرفية الرفيعة والهندسة المعاصرة. انطلاقاً من ورشنا بالحي الصناعي المسار بمراكش، نرافق مهندسي المعمار والمطورين وأصحاب الفيلات لتجسيد رؤاهم.",
      paragraph2: "من التصميم الأولي المخصص في ورشاتنا بمراكش إلى التركيب النهائي في الموقع، يستخدم خبراؤنا أجود المواد لخلق منافذ وواجهات معمارية دائرية الاستدامة.",
      stats: [
        { number: "500+", label: "مشروع منفذ" },
        { number: "100%", label: "مخصص بالكامل" },
        { number: "مراكش", label: "المقر الرئيسي" },
        { number: " سان جوبان ", label: "شريك الزجاج" }
      ]
    },
    cta: {
      title: "مشروعك يبدأ من هنا.",
      subtitle: "تحدث معنا حول مشروعك المعماري القادم ولنبدأ في تجسيده فوراً.",
      btnQuote: "اطلب عرض سعر",
      btnContact: "تواصل معنا"
    },
    contact: {
      title: "تواصل مع طوميفال",
      subtitle: "فريقنا التقني ورشتنا بمراكش رهن إشارتك للاستشارة والمعاينة وتقديم التقديرات.",
      phone: "الهاتف المباشر",
      phoneNumber: "+212 668-334555",
      phoneLandline: "0668-334555",
      whatsapp: "واتساب المباشر",
      whatsappNumber: "+212 668-334555",
      email: "البريد الإلكتروني الرسمي",
      emailAddress: "toumival@hotmail.com",
      address: "عنوان الوركشوب والوراش",
      addressText: "الحي الصناعي حي المسار، مراكش، المغرب",
      socials: "إنستغرام الرسمي",
      instagramHandle: "@toumival_sarl",
      instagramUrl: "https://instagram.com/toumival_sarl",
      hoursTitle: "أوقات العمل",
      hoursWeek: "الإثنين — السبت: 09:00 - 17:00",
      hoursSunday: "الأحد: مغلق",
      statusOpen: "مفتوح اليوم (09:00 - 17:00)",
      form: {
        title: "إرسال رسالة إلى الورشة",
        name: "الاسم الكامل",
        namePlaceholder: "مثال: كريم المنصوري",
        phone: "رقم الهاتف",
        phonePlaceholder: "مثال: 0668-334555",
        email: "البريد الإلكتروني",
        emailPlaceholder: "مثال: karim@example.com",
        projectType: "نوع المشروع",
        projectTypeOptions: [
          "اختر الخدمة المطلوبة...",
          "نجارة الألمنيوم الراقية",
          "الزجاج المزدوج والنوافذ البانورامية",
          "المصاريع الدوارة الكهربائية",
          "حواجز زجاجية (سلالم / تراسات)",
          "فواصل وزجاجيات بتصاميم مختلفة",
          "أنظمة التظليل الشمسي",
          "البرجولا البيومناخية",
          "الواجهات الستارية الزجاجية",
          "حواجز الدش الزجاجية",
          "الزجاج الديكوري المعماري",
          "مرايا سان جوبان الفاخرة",
          "مشروع معماري شامل"
        ],
        city: "مدينة المشروع",
        cityPlaceholder: "مثال: مراكش، الدار البيضاء، أكادير، الرباط...",
        message: "تفاصيل المشروع / تفاصيل الإنجاز",
        messagePlaceholder: "اذكر القياسات التقريبية، النمط المطلوب أو المتطلبات التقنية...",
        submitBtn: "إرسال الطلب",
        submitting: "جاري الإرسال...",
        successTitle: "تم إرسال طلبك بنجاح!",
        successDesc: "شكراً لاهتمامك. سيقوم مستشار تقني من طوميفال بالتواصل معك قريباً.",
        errorTitle: "خطأ في الإرسال",
        errorDesc: "يرجى التأكد من ملء جميع الحقول المطلوبة ثم المحاولة مجدداً."
      }
    },
    footer: {
      tagline: "التميز في نجارة الألمنيوم والزجاج المعماري في مراكش، المغرب.",
      quickLinks: "روابط سريعة",
      servicesTitle: "تخصصاتنا",
      contactTitle: "ورشة مراكش",
      rights: "جميع الحقوق محفوظة. شركة طوميفال (TOUMIVAL SARL).",
      privacy: "الشروط القانونية وسياسة الخصوصية"
    },
    quoteModal: {
      title: "طلب عرض سعر مخصص",
      subtitle: "قم بملء الاستمارة للحصول على دراسة مالية وتقنية مفصلة لمشروعك خلال 24 ساعة."
    }
  }
};
