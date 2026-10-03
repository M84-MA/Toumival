import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: "service-01",
    number: "01",
    category: "aluminium",
    slug: {
      fr: "menuiserie-aluminium",
      en: "aluminium-joinery",
      ar: "aluminium-joinery"
    },
    title: {
      fr: "MENUISERIE ALUMINIUM HAUTE GAMME",
      en: "PREMIUM ALUMINIUM JOINERY",
      ar: "نجارة الألمنيوم الراقية"
    },
    subtitle: {
      fr: "Systèmes coulissants & fenêtres à profils minimalistes",
      en: "Sliding systems & minimal profile windows",
      ar: "أنظمة منزلقة ونوافذ بإطارات مخفية"
    },
    shortDescription: {
      fr: "Solutions aluminium sur mesure conçues par nos ateliers à Marrakech pour répondre aux exigences des projets architecturaux contemporains.",
      en: "Bespoke aluminium solutions designed by our Marrakech workshops for contemporary luxury residential projects.",
      ar: "حلول ألمنيوم مخصصة صُممت من ورشتنا بمراكش لتلبي متطلبات المشاريع المعمارية الفاخرة."
    },
    fullDescription: {
      fr: "La menuiserie aluminium TOUMIVAL SARL se distingue par la finesse extrême de ses profils, sa robustesse mécanique et son étanchéité parfaite. Nos portes coulissantes grand format et baies vitrées s'intègrent sans rupture visuelle entre vos espaces intérieurs et vos jardins ou terrasses.",
      en: "TOUMIVAL SARL aluminium joinery is defined by ultra-slim frame profiles, high mechanical strength, and flawless weather sealing. Our large-format sliding doors connect your indoor living spaces seamlessly to terraces.",
      ar: "تتميز نجارة الألمنيوم من طوميفال بالنحافة الفائقة لإطاراتها، ومتانتها الميكانيكية العالية، وإحكامها التام ضد العوامل الجوية. تتيح لك الأبواب المنزلقة الكبيرة إمكانية دمج المساحات الداخلية مع التراسات."
    },
    heroImage: "/482080799_122110571822782111_258668985633254309_n.jpg",
    heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-villa-with-swimming-pool-42867-large.mp4",
    galleryImages: [
      "/482080799_122110571822782111_258668985633254309_n.jpg",
      "/564576109_122151087962782111_3381053211371843852_n.jpg",
      "/618127748_122163604754782111_157672570205474293_n.jpg"
    ],
    examples: [
      {
        title: { fr: "Villa Contemporaine Marrakech", en: "Contemporary Villa Marrakech", ar: "فيلا عصرية بمراكش" },
        subtitle: { fr: "Baies coulissantes minimales & portes d'entrée aluminium", en: "Minimal sliding bays & aluminium entrance door", ar: "أبواب منزلقة مخفية الإطار وباب رئيسي" },
        image: "/482080799_122110571822782111_258668985633254309_n.jpg"
      },
      {
        title: { fr: "Résidence Privée Guéliz", en: "Private Residence Guéliz", ar: "إقامة خاصة بجيليز" },
        subtitle: { fr: "Châssis fixes grand format & coulissants", en: "Large format fixed frames & sliding bays", ar: "إطارات ثابتة كبيرة ونوافذ جدارية" },
        image: "/564576109_122151087962782111_3381053211371843852_n.jpg"
      }
    ],
    keyFeatures: {
      fr: [
        "Profils en aluminium à rupture de pont thermique de dernière génération",
        "Hauteur de baie allant jusqu'à 4 mètres sans déformation",
        "Chicane centrale ultra-fine de seulement 20 mm de visibilité",
        "Performances d'isolation thermique Uw < 1.1 W/m²K",
        "Fermeture multipoints de haute sécurité A2P***"
      ],
      en: [
        "Latest-generation thermal break aluminium profiles",
        "Glass panel heights up to 4 meters with zero deflection",
        "Ultra-slim central interlock with only 20mm sightline",
        "Thermal insulation performance Uw < 1.1 W/m²K",
        "High-security A2P*** multi-point lock hardware"
      ],
      ar: [
        "بروفيلات ألمنيوم معزولة حرارياً من أحدث طراز",
        "ارتفاع واجهات يصل إلى 4 أمتار مع استقرار ميكانيكي تام",
        "فاصل ألمنيوم أوسط سُمكه 20 ملم فقط لشفافية قصوى",
        "عزل حراري متميز يقلل من استهلاك الطاقة",
        "أقفال أمان متعددة النقاط عالية الحماية"
      ]
    },
    technicalSpecs: [
      { label: { fr: "Alliage Aluminium", en: "Aluminium Alloy", ar: "سبائك الألمنيوم" }, value: { fr: "EN AW 6060 T6 Haute Résistance", en: "EN AW 6060 T6 High Tensile", ar: "EN AW 6060 T6 عالية المقاومة" } },
      { label: { fr: "Largeur Chicane", en: "Sightline Width", ar: "عرض العارضة المركزية" }, value: { fr: "20 mm à 26 mm", en: "20 mm to 26 mm", ar: "من 20 ملم إلى 26 ملم" } },
      { label: { fr: "Épaisseur Vitrage", en: "Glazing Thickness", ar: "سُمك الزجاج المقبول" }, value: { fr: "De 28 mm à 54 mm", en: "From 28 mm to 54 mm", ar: "من 28 ملم إلى 54 ملم" } }
    ]
  },
  {
    id: "service-02",
    number: "02",
    category: "aluminium",
    slug: {
      fr: "double-vitrage",
      en: "double-glazing",
      ar: "double-glazing"
    },
    title: {
      fr: "DOUBLE VITRAGE HAUTE PERFORMANCE",
      en: "HIGH PERFORMANCE DOUBLE GLAZING",
      ar: "الزجاج المزدوج فائق الأداء"
    },
    subtitle: {
      fr: "Isolation thermique, acoustique et contrôle solaire",
      en: "Thermal insulation, acoustic shield & solar control",
      ar: "عزل حراري وصوتي والتحكم في الأشعة الشمسية"
    },
    shortDescription: {
      fr: "Des solutions vitrées pensées pour améliorer le confort thermique face au climat de Marrakech tout en conservant une esthétique pure.",
      en: "Glazing solutions engineered to dramatically improve thermal insulation against Marrakech solar heat.",
      ar: "حلول زجاجية مصممة للارتقاء بالعزل الحراري والصوتي مقابل حرارة مراكش مع الحفاظ على الشفافية."
    },
    fullDescription: {
      fr: "Le double vitrage TOUMIVAL associe des verres à couche de contrôle solaire et d'émissivité renforcée avec lame d'argon. Il bloque la chaleur estivale de Marrakech, conserve la fraîcheur intérieure et étouffe les bruits extérieurs.",
      en: "TOUMIVAL double glazing combines low-emissivity glass and solar control coatings with argon gas cavities. It blocks heat in summer and preserves cool interior comfort.",
      ar: "يجمع الزجاج المزدوج من طوميفال بين طبقات التحكم الشمسي والانبعاثية المنخفضة مع غاز الأرجون المحقون. يوفر بيئة هادئة وباردة صيفاً."
    },
    heroImage: "/564576109_122151087962782111_3381053211371843852_n.jpg",
    galleryImages: [
      "/564576109_122151087962782111_3381053211371843852_n.jpg",
      "/482080799_122110571822782111_258668985633254309_n.jpg"
    ],
    examples: [
      {
        title: { fr: "Baies Vitrées Panoramiques", en: "Panoramic Glass Bays", ar: "واجهات بانورامية مزدوجة" },
        subtitle: { fr: "Contrôle solaire & faible émissivité Planitherm", en: "Solar control & low-E Planitherm glass", ar: "عازل حراري وشعاعي عالي الجودة" },
        image: "/564576109_122151087962782111_3381053211371843852_n.jpg"
      }
    ],
    keyFeatures: {
      fr: [
        "Réduction de 70% des apports thermiques solaires",
        "Atténuation acoustique jusqu'à Rw = 46 dB",
        "Gaz argon à 90% dans la lame d'air",
        "Conforme aux normes européennes CEKAL et ISO 9001"
      ],
      en: [
        "70% reduction in solar heat gain",
        "Acoustic noise dampening up to Rw = 46 dB",
        "90% argon gas filled air space",
        "Compliant with CEKAL & ISO 9001 certified standards"
      ],
      ar: [
        "تقليل 70% من حرارة الشمس المباشرة الداخِلة للمبنى",
        "تخفيض الضوضاء الخارجية حتى 46 ديسيبل",
        "حقن غاز الأرجون بنسبة 90% لزيادة العزل",
        "مطابق للمواصفات الدولية للجودة والسلامة"
      ]
    }
  },
  {
    id: "service-03",
    number: "03",
    category: "aluminium",
    slug: {
      fr: "volets-roulants",
      en: "roller-shutters",
      ar: "roller-shutters"
    },
    title: {
      fr: "VOLETS ROULANTS MOTORISÉS",
      en: "MOTORIZED ROLLER SHUTTERS",
      ar: "المصاريع الدوارة الكهربائية"
    },
    subtitle: {
      fr: "Protection solaire, occultation & domotique",
      en: "Solar protection, blackout & smart home automation",
      ar: "حماية شمسية وإعتام تام وتكامل مع المنزل الذكي"
    },
    shortDescription: {
      fr: "Des solutions de fermeture motorisées discrètes et silencieuses intégrées dans les coffres de vos façades.",
      en: "Integrated motorized shutter closure systems designed to blend harmoniously into modern architecture.",
      ar: "أنظمة إغلاق وحماية شمسية محركة ومدمجة بأناقة في الهيكل المعماري."
    },
    fullDescription: {
      fr: "Nos volets roulants en aluminium extrudé s'intègrent dans des coffres linteau invisibles. Équipés de moteurs domotisés Somfy, ils offrent une sécurité renforcée et une isolation nocturne optimale.",
      en: "Our extruded aluminium roller shutters fit neatly into concealed lintel boxes. Powered by Somfy radio motors, they offer total remote control and enhanced security.",
      ar: "تتكامل مصاريع الألمنيوم من طوميفال مع صناديق مخفية داخل الجدران. مزودة بمحركات ذكية، تتيح لك التحكم عن بُعد."
    },
    heroImage: "/594977307_122157434636782111_7147173172611628204_n.jpg",
    galleryImages: [
      "/594977307_122157434636782111_7147173172611628204_n.jpg"
    ],
    examples: [
      {
        title: { fr: "Volets Extrudés Sécurité Villa", en: "Security Aluminium Roller Shutters", ar: "مصاريع ألمنيوم معززة للأمان" },
        subtitle: { fr: "Lames rigides anti-effraction avec motorisation Somfy", en: "Rigid anti-burglary slats with Somfy motor", ar: "شرائح صلبة لحماية الإقامات والفيلات" },
        image: "/594977307_122157434636782111_7147173172611628204_n.jpg"
      }
    ],
    keyFeatures: {
      fr: [
        "Moteurs Somfy IO Homecontrol silencieux",
        "Lames en aluminium orientables ou à mousse polyuréthane",
        "Verrous de sécurité anti-soulèvement intégrés"
      ],
      en: [
        "Silent Somfy IO Homecontrol motor technology",
        "Adjustable or polyurethane foam slats",
        "Integrated anti-lift security locks"
      ],
      ar: [
        "محركات محركة فائقة الهدوء بقدرات ذكية",
        "شرائح ألمنيوم معزولة برغوة البولي يوريثان",
        "أقفال مضادة للرفع القسري من الخارج"
      ]
    }
  },
  {
    id: "service-04",
    number: "04",
    category: "architecture",
    slug: {
      fr: "garde-corps-verre",
      en: "glass-railings",
      ar: "glass-railings"
    },
    title: {
      fr: "GARDE-CORPS EN VERRE (ESCALIERS & TERRASSES)",
      en: "GLASS RAILINGS (STAIRCASES & TERRACES)",
      ar: "حواجز زجاجية (للسلالم والتراسات)"
    },
    subtitle: {
      fr: "ESCALIERS · TERRASSES · BALCONS",
      en: "STAIRCASES · TERRACES · BALCONIES",
      ar: "السلالم · التراسات · الشرفات"
    },
    shortDescription: {
      fr: "Garde-corps en verre feuilleté trempé combinant transparence totale, sécurité maximale et fixations encastrées au sol.",
      en: "Structural glass railings combining certified safety, total visual clarity, and recessed bottom channel fittings.",
      ar: "حواجز زجاجية معمارية تجمع بين أقصى درجات الأمان، الشفافية المطلقة والتثبيت الغاطس."
    },
    fullDescription: {
      fr: "Conçus sans poteaux métalliques apparents, nos garde-corps vitrés autoporteurs reposent sur un rail aluminium encastré au sol. Ils utilisent du verre feuilleté trempé (Stadip 10+10 ou 12+12) capable de résister aux chocs et pressions élevées.",
      en: "Designed without vertical posts, our self-supporting structural glass balustrades sit in recessed continuous aluminium channels using tempered laminated safety glass (Stadip 10+10).",
      ar: "صُممت بدون أعمدة معدنية ظاهرية، تعتمد حواجزنا الزجاجية على قنوات ألمنيوم غاطسة بالكامل مع زجاج أمان مقسى ومضاعف."
    },
    heroImage: "/732036209_122179836764782111_2389765880035327000_n.jpg",
    galleryImages: [
      "/732036209_122179836764782111_2389765880035327000_n.jpg",
      "/733483450_122179836722782111_362020625330318421_n.jpg"
    ],
    examples: [
      {
        title: { fr: "Garde-corps Terrasse Encastré", en: "Recessed Terrace Glass Railing", ar: "حاجز زجاجي غاطس للتراس" },
        subtitle: { fr: "Rail aluminium invisible sous carrelage", en: "Concealed aluminium bottom track", ar: "مسار ألمنيوم مخفي تحت البلاط" },
        image: "/732036209_122179836764782111_2389765880035327000_n.jpg"
      },
      {
        title: { fr: "Escalier Design & Garde-corps Verre", en: "Design Staircase Glass Balustrade", ar: "درابزين سلم زجاجي عصري" },
        subtitle: { fr: "Fixations inox & verre Stadip 10+10", en: "Stainless point adapters & Stadip glass", ar: "تثبيت نقطي بنقاط ستانلس وزجاج مضاعف" },
        image: "/733483450_122179836722782111_362020625330318421_n.jpg"
      }
    ],
    keyFeatures: {
      fr: [
        "Verre feuilleté trempé de sécurité (Stadip 10+10 / 12+12)",
        "Résistance aux chocs certifiée jusqu'à 3.0 kN/m",
        "Pose encastrée sous dalle pour effet 100% verre"
      ],
      en: [
        "Tempered laminated safety glass (Stadip 10+10 / 12+12)",
        "Certified impact load resistance up to 3.0 kN/m",
        "Recessed mounting for pure 100% glass effect"
      ],
      ar: [
        "زجاج أمان مقسى ومزدوج عالي السمك",
        "مقاومة معتمدة للصدمات والضغط الجانبي",
        "تثبيت مخفي تحت البلاط لمظهر زجاجي نقي 100%"
      ]
    }
  },
  {
    id: "service-05",
    number: "05",
    category: "glass",
    slug: {
      fr: "verrieres",
      en: "glass-partitions",
      ar: "glass-partitions"
    },
    title: {
      fr: "VERRIÈRES À DIFFÉRENTS DESIGNS",
      en: "CUSTOM GLASS PARTITIONS & VERRIÈRES",
      ar: "واجهات وفواصل زجاجية بتصاميم مختلفة"
    },
    subtitle: {
      fr: "Style atelier, loft & cloisons séparatives",
      en: "Atelier style, loft partitions & glass separations",
      ar: "نمط مشغل، فواصل صالونات ومكاتب مخصصة"
    },
    shortDescription: {
      fr: "Des verrières et cloisons en profilés aluminium fin créées sur mesure pour séparer vos espaces intérieurs.",
      en: "Custom glass partitions using slim aluminium profiles to define interior living spaces with natural light.",
      ar: "فواصل وزجاجيات مصممة لتقسيم المساحات مع الحفاظ على النور الطبيعي."
    },
    fullDescription: {
      fr: "Nos verrières en aluminium apportent du caractère et de la profondeur à vos intérieurs. Disponibles en profilés noir mat, blanc ou sur mesure avec portes coulissantes ou battantes.",
      en: "Our slim aluminium glass partitions bring rich architectural character to interior living spaces.",
      ar: "تضفي فواصلنا الزجاجية المصنوعة من الألمنيوم النحيف لمسة استثنائية على المساحات الداخلية."
    },
    heroImage: "/618127748_122163604754782111_157672570205474293_n.jpg",
    galleryImages: [
      "/618127748_122163604754782111_157672570205474293_n.jpg"
    ],
    examples: [
      {
        title: { fr: "Verrière Séparation Salon / Cuisine", en: "Kitchen Glass Partition", ar: "فاصل زجاجي للمطبخ وغرفة المعيشة" },
        subtitle: { fr: "Profils aluminium noir mat & verre feuilleté clair", en: "Matte black profiles & clear laminated glass", ar: "إطار أسود مطفي وزجاج شفاف محمي" },
        image: "/618127748_122163604754782111_157672570205474293_n.jpg"
      }
    ],
    keyFeatures: {
      fr: [
        "Profils aluminium ultra-fins de face visible minimaliste",
        "Vitrage feuilleté trempé de sécurité",
        "Portes coulissantes ou battantes intégrées"
      ],
      en: [
        "Ultra-slim aluminium profiles for minimal sightline",
        "Safety laminated glass panels",
        "Integrated sliding or hinged door mechanisms"
      ],
      ar: [
        "إطارات ألمنيوم فائقة النحافة لعرض بصري ممتاز",
        "زجاج محمي مصفح مقاوم للصدمات",
        "أبواب مدمجة منزلقة أو مفصلية"
      ]
    }
  },
  {
    id: "service-06",
    number: "06",
    category: "architecture",
    slug: {
      fr: "brise-soleil",
      en: "sun-shading",
      ar: "sun-shading"
    },
    title: {
      fr: "BRISE-SOLEIL ARCHITECTURAL",
      en: "ARCHITECTURAL SUN SHADING",
      ar: "أنظمة التظليل الشمسي المعماري"
    },
    subtitle: {
      fr: "Contrôle thermique, ombrage & dynamisme de façade",
      en: "Thermal control, shading & dynamic façade aesthetics",
      ar: "تحكم حراري، تظليل وضبط أشعة الشمس على الواجهات"
    },
    shortDescription: {
      fr: "Solutions de brise-soleil en aluminium pour réguler la température et sublimer les façades.",
      en: "Architectural shading systems designed to mitigate solar heat gain on building façades.",
      ar: "حلول معمارية تتيح التحكم في أشعة الشمس مع منح الواجهات شخصية معمارية فخمة."
    },
    fullDescription: {
      fr: "Nos brise-soleil en aluminium forment une bouclier thermique efficace devant vos façades. Orientés horizontalement ou verticalement, ils filtrent les rayons solaires tout en laissant pénétrer la lumière.",
      en: "Our aluminium sunshades form a thermal shield ahead of glass façades, filtering direct rays.",
      ar: "تشكل أنظمة التظليل الشمسي من الألمنيوم درعاً حرارياً أمام الواجهات الزجاجية."
    },
    heroImage: "/746230783_122181377942782111_9122457582954665373_n.jpg",
    galleryImages: [
      "/746230783_122181377942782111_9122457582954665373_n.jpg"
    ],
    examples: [
      {
        title: { fr: "Brise-soleil Vertical Aluminium", en: "Vertical Aluminium Sunshade", ar: "شرائح تظليل عمودية من الألمنيوم" },
        subtitle: { fr: "Lames d'ombrage fixes ou orientables", en: "Fixed or motorized shading louvers", ar: "شرائح تظليل ثابتة أو متحركة" },
        image: "/746230783_122181377942782111_9122457582954665373_n.jpg"
      }
    ],
    keyFeatures: {
      fr: [
        "Lames en aluminium extrudé de haute résistance",
        "Réduction de la température intérieure",
        "Finitions thermolaquées anticorrosion"
      ],
      en: [
        "Extruded high-tensile aluminium louvers",
        "Indoor solar heat reduction",
        "Corrosion-proof powder-coated finishes"
      ],
      ar: [
        "شرائح ألمنيوم بعرض مقاوم للحرارة",
        "تخفيض الحرارة الداخلية للمبنى",
        "طلاء حماية من الرطوبة والعوامل الجوية"
      ]
    }
  },
  {
    id: "service-07",
    number: "07",
    category: "architecture",
    slug: {
      fr: "pergola-bioclimatique",
      en: "bioclimatic-pergola",
      ar: "bioclimatic-pergola"
    },
    title: {
      fr: "PERGOLA BIOCLIMATIQUE EN ALUMINIUM",
      en: "ALUMINIUM BIOCLIMATIC PERGOLA",
      ar: "البرجولا البيومناخية من الألمنيوم"
    },
    subtitle: {
      fr: "Espace de vie extérieur motorisé 4 saisons",
      en: "4-season motorized outdoor living space",
      ar: "مساحة خارجية راقية مقاوِمة لجميع الفصول"
    },
    shortDescription: {
      fr: "Pergola bioclimatique en aluminium sur mesure avec lames orientables motorisées et fermetures vitrées.",
      en: "Bespoke bioclimatic pergola with motorized louvers, LED lighting, and glass sliding panels.",
      ar: "برجولا بيومناخية مخصصة بشرائح متحركة محركة وإضاءة LED وحواجز زجاجية."
    },
    fullDescription: {
      fr: "La pergola bioclimatique TOUMIVAL SARL s'adapte à la météo grâce à ses lames orientables en aluminium. Elle vous protège du soleil et s'enrichit de baies en verre coulissantes.",
      en: "The TOUMIVAL SARL bioclimatic pergola adapts instantly using motorized aluminium louvers and perimeter sliding glass panels.",
      ar: "تتأقلم البرجولا البيومناخية من طوميفال مع الطقس عبر شرائح ألمنيوم متحركة ومزودة بحواجز زجاجية."
    },
    heroImage: "/733891187_122179836890782111_2255219163567887197_n.jpg",
    heroVideo: "https://assets.mixkit.co/videos/preview/mixkit-patio-of-a-luxury-home-42866-large.mp4",
    galleryImages: [
      "/733891187_122179836890782111_2255219163567887197_n.jpg",
      "/734275384_122179836818782111_1479490742059003704_n.jpg"
    ],
    examples: [
      {
        title: { fr: "Pergola Bioclimatique Terrasse", en: "Terrace Bioclimatic Pergola", ar: "برجولا بيومناخية للتراس" },
        subtitle: { fr: "Lames motorisées & éclairage LED intégré", en: "Motorized louvers & integrated LED lighting", ar: "شرائح محركة وإضاءة LED دافئة" },
        image: "/733891187_122179836890782111_2255219163567887197_n.jpg"
      },
      {
        title: { fr: "Fermeture Vitrée Pergola", en: "Pergola Glass Enclosure", ar: "إغلاق زجاجي للبرجولا" },
        subtitle: { fr: "Panneaux coulissants sans cadre", en: "Frameless sliding glass panels", ar: "حواجز زجاجية منزلقة" },
        image: "/734275384_122179836818782111_1479490742059003704_n.jpg"
      }
    ],
    keyFeatures: {
      fr: [
        "Lames orientables motorisées télécommandées",
        "Évacuation d'eau de pluie intégrée dans les poteaux",
        "Éclairage LED direct ou d'ambiance",
        "Fermetures latérales vitrées coulissantes"
      ],
      en: [
        "Motorized louver rotation via remote control",
        "Integrated rainwater drainage inside posts",
        "Dimmable LED perimeter lighting",
        "Optional sliding glass side closures"
      ],
      ar: [
        "شرائح ألمنيوم قابلة للتعديل بالريموت",
        "نظام تصريف مياه الأمطار مخفي داخل الأعمدة",
        "إضاءة LED دافئة قابلة للتعديل",
        "إمكانية إغلاق الجوانب بزجاج منزلق"
      ]
    }
  },
  {
    id: "service-08",
    number: "08",
    category: "architecture",
    slug: {
      fr: "mur-rideau",
      en: "curtain-wall",
      ar: "curtain-wall"
    },
    title: {
      fr: "MUR RIDEAU & FAÇADES VITRÉES",
      en: "CURTAIN WALL & GLASS FAÇADES",
      ar: "الواجهة الستارية والواجهات الزجاجية"
    },
    subtitle: {
      fr: "Grille VEC, VEP et façades structurales",
      en: "VEC, VEP grid & structural glazing façades",
      ar: "شبكات زجاجية هيكلية واجهات تجارية وإقامات"
    },
    shortDescription: {
      fr: "Façades vitrées en mur rideau structurel pour immeubles et résidences modernes.",
      en: "Structural glass curtain wall façades engineered for modern commercial landmarks.",
      ar: "واجهات زجاجية ستارية هيكلية للمباني والإقامات الحديثة."
    },
    fullDescription: {
      fr: "Nos systèmes de mur rideau VEC/VEP offrent une continuité vitrée spectaculaire avec étanchéité éprouvée et résistance mécanique supérieure.",
      en: "Our curtain wall systems deliver spectacular continuous glass skins engineered for wind and climate requirements.",
      ar: "توفر الواجهات الستارية استمرارية زجاجية مبهرة مقاومة لكافة الظروف الجوية."
    },
    heroImage: "/594977307_122157434636782111_7147173172611628204_n.jpg",
    galleryImages: [
      "/594977307_122157434636782111_7147173172611628204_n.jpg"
    ],
    examples: [
      {
        title: { fr: "Façade Mur Rideau VEC", en: "VEC Glass Curtain Wall", ar: "واجهة زجاجية ستارية VEC" },
        subtitle: { fr: "Vitrage extérieur collé à haute isolation", en: "Structural silicone solar glazing", ar: "زجاج عازل حرارياً بدون فواصل ظاهرية" },
        image: "/594977307_122157434636782111_7147173172611628204_n.jpg"
      }
    ],
    keyFeatures: {
      fr: [
        "Systèmes VEC à effet miroir continu",
        "Double vitrage à contrôle solaire",
        "Étanchéité éprouvée sous pluie battante"
      ],
      en: [
        "VEC structural silicone glazing",
        "High-insulation solar control double glazing",
        "Proven heavy rain drainage seal"
      ],
      ar: [
        "أنظمة VEC لشفافية زجاجية متصلة",
        "زجاج مزدوج معالج ضد الحرارة",
        "نظام تصريف وتسريب مياه الأمطار"
      ]
    }
  },
  {
    id: "service-09",
    number: "09",
    category: "glass",
    slug: {
      fr: "parois-douche",
      en: "glass-shower-enclosures",
      ar: "glass-shower-enclosures"
    },
    title: {
      fr: "PAROIS DE DOUCHE EN VERRE SUR MESURE",
      en: "CUSTOM GLASS SHOWER ENCLOSURES",
      ar: "حواجز الدش الزجاجية المصممة حسب المقاس"
    },
    subtitle: {
      fr: "Douches à l'italienne, profils noirs & verre anticalcaire",
      en: "Walk-in showers, black fittings & anti-limescale glass",
      ar: "حجيرات دش عصرية، إكسسوارات سوداء وزجاج مضاد للتكلس"
    },
    shortDescription: {
      fr: "Parois de douche en verre trempé 8mm/10mm façonnées sur mesure pour salles de bains de prestige.",
      en: "Bespoke toughened glass shower partition systems for luxury minimalist bathroom interiors.",
      ar: "حواجز دش زجاجية مقساة صُممت خصيصاً للحمامات العصرية الفاخرة."
    },
    fullDescription: {
      fr: "Nos parois et cabines de douche en verre trempé Securit apportent une transparence cristalline à vos salles de bains. Fixations sur mesure en noir mat ou inox brossé.",
      en: "Our tempered safety glass shower partitions infuse crystalline clarity into bathroom spaces.",
      ar: "تتميز حواجز الدش من طوميفال بزجاج أمان مقسى تمنح حمامك لمسة فندقية عصرية."
    },
    heroImage: "/624356465_122164177550782111_8010093476786226226_n.jpg",
    galleryImages: [
      "/624356465_122164177550782111_8010093476786226226_n.jpg",
      "/624338024_122164177622782111_5036245159740298017_n.jpg"
    ],
    examples: [
      {
        title: { fr: "Paroi Douche Italienne Profil Noir", en: "Walk-in Shower Panel Matte Black", ar: "حاجز دش ثابت بإطار أسود مطفي" },
        subtitle: { fr: "Verre trempé 10mm anticalcaire", en: "10mm toughened anti-limescale glass", ar: "زجاج 10 ملم معالج ضد الكلس" },
        image: "/624356465_122164177550782111_8010093476786226226_n.jpg"
      }
    ],
    keyFeatures: {
      fr: [
        "Verre trempé Securit de 8 mm ou 10 mm",
        "Traitement anticalcaire permanent",
        "Quincaillerie en acier inox résistant à la corrosion"
      ],
      en: [
        "8mm or 10mm Securit toughened safety glass",
        "Permanent anti-limescale treatment",
        "Corrosion resistant stainless steel hardware"
      ],
      ar: [
        "زجاج أمان مقسى سُمكه 8 ملم أو 10 ملم",
        "طلاء دائم مضاد للكلس والترسبات",
        "إكسسوارات ستانلس ستيل مقاومة للصدأ"
      ]
    }
  },
  {
    id: "service-10",
    number: "10",
    category: "glass",
    slug: {
      fr: "decoration-verre",
      en: "glass-decoration",
      ar: "glass-decoration"
    },
    title: {
      fr: "DÉCORATION & VERRE D'ART INTERIEUR",
      en: "DECORATIVE & ARTISTIC GLASS",
      ar: "الزجاج الديكوري والفن المعماري"
    },
    subtitle: {
      fr: "Crédences, vitrages feuilletés décoratifs & panneaux d'art",
      en: "Kitchen splashbacks & decorative panels",
      ar: "واجهات المطبخ، لوحات زجاجية وزجاج مزخرف"
    },
    shortDescription: {
      fr: "Le verre laqué et feuilleté décoratif pour sublimer les cuisines et intérieurs.",
      en: "Lacquered and decorative laminated glass customizing interior living environments.",
      ar: "الزجاج المطلي والمزخرف ليمنح مساحتك الداخلية تميزاً وإشراقاً."
    },
    fullDescription: {
      fr: "Du verre laqué pour crédences de cuisine aux vitrages décoratifs sur mesure, nos réalisations apportent couleur et relief à vos aménagement.",
      en: "From lacquered glass kitchen splashbacks to decorative glass, our bespoke designs infuse vibrant color.",
      ar: "من الزجاج المطلي بالورنيش لمطابخك إلى اللوحات الزجاجية المزخرفة، نوفر خيارات غير محدودة."
    },
    heroImage: "/624338024_122164177622782111_5036245159740298017_n.jpg",
    galleryImages: [
      "/624338024_122164177622782111_5036245159740298017_n.jpg"
    ],
    examples: [
      {
        title: { fr: "Crédence Cuisine Verre Laqué", en: "Lacquered Glass Splashback", ar: "واجهة مطبخ زجاجية مطلية" },
        subtitle: { fr: "Verre émaillé haute résistance thermique", en: "High thermal resistance enameled glass", ar: "زجاج مقاوم للحرارة" },
        image: "/624338024_122164177622782111_5036245159740298017_n.jpg"
      }
    ],
    keyFeatures: {
      fr: [
        "Verre laqué aux couleurs durables",
        "Résistance aux chocs thermiques et à l'humidité",
        "Entretien facile sans joints"
      ],
      en: [
        "Lacquered glass with durable colorfastness",
        "High thermal shock and moisture resistance",
        "Hygienic easy maintenance surface"
      ],
      ar: [
        "زجاج مطلي بألوان ثابتة مفعمة بالحياة",
        "مقاومة عالية للحرارة والرطوبة",
        "سطح صحي وسهل التنظيف"
      ]
    }
  },
  {
    id: "service-11",
    number: "11",
    category: "glass",
    slug: {
      fr: "miroirs",
      en: "mirrors",
      ar: "mirrors"
    },
    title: {
      fr: "MIROIRS SAINT-GOBAIN SUR MESURE",
      en: "SAINT-GOBAIN CUSTOM MIRRORS",
      ar: "مرايا سان جوبان المخصصة"
    },
    subtitle: {
      fr: "Miroirs écologiques Miralite, rétroéclairés & grand format",
      en: "Miralite mirrors, LED backlit & custom geometry",
      ar: "مرايا عالي الجودة، مضاة بـ LED ومصممة حسب القياس"
    },
    shortDescription: {
      fr: "Miroirs Saint-Gobain de première qualité pour apporter profondeur et lumière aux intérieurs.",
      en: "Superior quality Saint-Gobain mirrors designed to amplify spatial depth and interior light.",
      ar: "مرايا عالمية الجودة من سان جوبان لإضفاء عمق بصري وإشراق للمساحات."
    },
    fullDescription: {
      fr: "Nous façonnons et posons les miroirs Saint-Gobain Miralite Revolution en découpe sur mesure ou rétroéclairage LED pour les salles de bains et salons.",
      en: "We precision-cut and install Saint-Gobain Miralite Revolution mirrors free of lead with optional LED backlighting.",
      ar: "نقوم بتشكيل وتركيب مرايا Miralite Revolution من سان جوبان بأحجام مخصصة وإضاءة خلفية."
    },
    heroImage: "/624356465_122164177550782111_8010093476786226226_n.jpg",
    galleryImages: [
      "/624356465_122164177550782111_8010093476786226226_n.jpg"
    ],
    examples: [
      {
        title: { fr: "Miroir Rétroéclairé LED Tactile", en: "Touch LED Backlit Vanity Mirror", ar: "مرآة فاخرة مضاءة بـ LED" },
        subtitle: { fr: "Miroir Saint-Gobain 6mm à bords polis", en: "6mm Saint-Gobain mirror with polished edges", ar: "مرآة 6 ملم بحواف مصقولة بدقة" },
        image: "/624356465_122164177550782111_8010093476786226226_n.jpg"
      }
    ],
    keyFeatures: {
      fr: [
        "Verre Saint-Gobain Miralite pur",
        "Bords polis luisants ou chanfreinés",
        "Système anti-buée intégré"
      ],
      en: [
        "Pure Saint-Gobain Miralite mirror glass",
        "Flat polished or bevelled edge finishes",
        "Integrated anti-fog demister option"
      ],
      ar: [
        "زجاج مرآة نقي من سان جوبان العالمية",
        "حواف مصقولة أو مشطوفة بعناية",
        "نظام تسخين مانع لتكثف الضباب"
      ]
    }
  }
];
