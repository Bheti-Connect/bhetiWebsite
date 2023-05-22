import projet1 from "../assets/images/projets/001.jpg"
import projet2 from "../assets/images/projets/002.jpg"
import projet3 from "../assets/images/projets/003.jpg"
import source1 from "../assets/images/projets/source1.jpg"
import source2 from "../assets/images/projets/source2.jpg"
import source3 from "../assets/images/projets/source3.jpg"
import source4 from "../assets/images/projets/source4.jpg"
import source5 from "../assets/images/projets/source5.jpg"
import source6 from "../assets/images/projets/source6.jpg"
import interview1 from "../assets/images/interviews/interview1.jpg"
import interview2 from "../assets/images/interviews/interview2.jpg"
import interview3 from "../assets/images/interviews/interview3.jpg"
import interview4 from "../assets/images/interviews/interview4.png"
import inter1 from "../assets/images/interviews/inter1.jpg"
import inter2 from "../assets/images/interviews/inter2.jpg"
import inter3 from "../assets/images/interviews/inter3.jpg"
import inter4 from "../assets/images/interviews/inter4.jpg"
import inter5 from "../assets/images/interviews/inter5.jpg"
import inter6 from "../assets/images/interviews/inter6.jpg"
import bizaoImage from "../assets/images/success/bizao_image.jpg"
import bizaoIcon from "../assets/images/success/bizao_icon.jpg"
import zazuuImage from "../assets/images/success/zazuu_image.jpg"
import zazuuIcon from "../assets/images/success/zazuu_icon.jpg"
import susuImage from "../assets/images/success/susu_image.jpg"
import susuIcon from "../assets/images/success/susu_icon.jpg"
import afrikamartImage from "../assets/images/success/afrikamart_image.jpg"
import afrikamartIcon from "../assets/images/success/afrikamart_icon.jpg"


const projects = [
    {
        id: 1,
        nom: "Projet 001",
        secteurs: ["Mobility"],
        financement: "2 000 000,00 €",
        siege: "Cote d'ivoire",
        stage: "Seed",
        type: "Startup",
        description: `Projet 001 est une entreprise basée en Côte d’Ivoire dans le domaine de la mobilité. Fondé par deux serials entrepreneurs, le projet a été lancé il y a 1 an et recherche 2M € pour le lancement d’une super application de services de livraison au dernier kilomètre pour tout secteur : Economique, Rapide, Accessible. <hr/> Projet 001 is a company based in Ivory Coast in the field of mobility. Founded by two serial entrepreneurs, this project was launched 1 year ago and is looking for €2M to launch a super last mile delivery service application for any sector: Economic, Fast, Accessible.`,
        pourquoi: [
            "D'ici 2025, les ventes en ligne en Afrique représenteront 10 % des ventes au détail et cela passera par la numérisation du secteur formel et informel.",
            "On assiste à l'émergence d'une classe moyenne. Alors que le paiement mobile explose (27,4 milliards de transactions par Mois)",
            "By 2025, online sales in Africa will account for 10% of retail sales and this will require the digitization of both the formal and informal sectors of the economy.",
            "We are seeing the emergence of a middle class and the simultaneous expansion of mobile payment (27.4 billion transactions per month)"
        ],
        solutions: [
            {
                title: "Répondre au déficit de confiance, de mobilité, de numérisation et de paiements.",
                description: []
            },
            {
                title: "Répondre au déficit de livraisons des très petites entreprises du secteur formel et informel.",
                description: []
            },
            {
                title: "Simplifiez les livraisons à la demande, quel que soit l'endroit où vous vous trouvez.",
                description: []
            },
            {
                title: "Facilitez les paiements grâce à des outils financiers pour les petites entreprises formelles et informelles",
                description: []
            },
           {
            title: "Address the deficits in trust, of mobility, of digitization and of payment.",
            description: []
           },
            {
                title: "Address the delivery gap for very small businesses in the formal and informal sector.",
                description: []
            },
            {
                title: "Simplify on-demand deliveries regardless of location.",
                description: []
            },
            {
                title: "Facilitate payments with financial tools for formal and informal small businesses",
                description: []
            }
        ],
        equipe: [
            {
                title: "+22 personnes",
                description: [
                    "10 Livreurs en CDI",
                    "Ludovic Ouattara, Cofondateur et CEO : expert en télécommunication - a été consultant pour le ministère des PTT au Congo- sérial entrepreneur - notamment l'un des premiers à distribuer des cartes téléphoniques prépayées dans les pays du Benelux.",
                    "Loic Ouattara, Cofondateur et COO : avocat de formation - serial entrepreneur dans les domaines de la technologie, de la fintech et de l'insurtech - lauréat de diversidays"
                ],
            },
            {
                title: "+22 people",
                description: [
                    "10 delivery people on permanent contracts",
                    "Ludovic Ouattara, Cofounder and CEO: expert in telecommunications - was a consultant for the Ministry of PTT in the Congo - serial entrepreneur - notably one of the first to distribute prepaid phone cards in the Benelux countries.",
                    "Loic Ouattara, Co-founder and COO: trained as a lawyer - serial entrepreneur in the fields of technology, fintech and insurtech - diversidays winner"
                ]
            }
        ],
        business_model: [
            {
                title: "Frais de livraison à partir de 1000 FCFA B2C",
                description: []
            },
            {
                title: "Abonnement mensuel selon la demande",
                description: []
            },
            {
                title: "15% sur toutes les commandes de produits alimentaires et de supermarchés",
                description: []
            },
            {
                title: "Campagne publicitaire pour les restaurants sur l'APP",
                description: []
            },
            {
                title: "B2C : Delivery fees from 1000 FCFA B2C",
                description: []
            },
            {
                title: "15% on all food and supermarket orders",
                description: []
            },
            {
                title: "Advertising campaign for restaurants on the APP",
                description: []
            }
        ],
        kpi: [
            {
                title: "Depuis janvier 2021 :",
                description: [
                    "+50 000 livraisons effectuées",
                    "1 millions de colis livrés",
                    "315 clients",
                    "Transactions réalisées sur la plateforme  : +650 000 $"
                ]
            },
            {
                title: "Since January  2021 :",
                description: [
                    "+50,000 deliveries made",
                    "1 million packages delivered",
                    "+350 customers",
                    "Transactions made on the platform: +$650,000"
                ]
            }
        ],
        source: [
            source1,
            source2,
            source5
        ],
        video: "",
        problemes: [
            "60 % de la population vit dans des zones urbaines.",
            "Besoins de mobilité accrus, allongement des distances à parcourir pour effectuer des livraisons, se rendre au travail",
            "Frais de déplacement élevés.",
            "Problème d'organisation des transports : pas d'acteur fiable avec une expérience utilisateur satisfaisante.",
            "Taux de mortalité multiplié par 4",
            "60% of the population are urban dwellers.",
            "Increased mobility needs, longer distances for deliveries, travel to work",
            "High travel costs.",
            "Problems for the organization of transportation: no single reliable actor delivering an acceptable user experience.",
            "Mortality rate multiplied by 4"
        ],
        image: projet1,
    },
    {
        id: 2,
        nom: "Projet 002",
        secteurs: ["Industry", "Automobile"],
        financement: "5 000 000,00 €",
        siege: "Cote d'ivoire",
        stage: "Seed B",
        type: "PME",
        description: "Projet 001 est une société ivoirienne spécialisée dans l’importation et la vente de véhicules neufs et d’occasion, la maintenance et la réparation de camions tracteurs routiers, de semi-remorques, de citernes, de matériel de BTP, de carrières et destinés au transport de marchandises. La société lève 5 millions d’euros pour la construction d’une unité d’assemblage de bennes et semi-remorques et d’un stock outils camions. cette unité d’assemblage sera accessible aux poids lourds et comprendra une ligne de montage, une administration, un magasin de stockage et une ligne de peinture. <hr/> Projet 002 is an Ivorian company specializing in the import and sale of new and used vehicles, maintenance and repair of road tractor trucks, semi-trailers, tankers, construction equipment, quarries, and the transport of goods. The company is raising 5 million euros for the construction of an assembly unit for tippers and semi-trailers and a stock of truck tools. This assembly unit will be accessible to heavy goods vehicles and will include an assembly line, an administration, a storage warehouse, and a paint line.",
        pourquoi: [
            "Un potentiel de marché important et dynamique avec un fort potentiel de croissance",
            "Une démographie favorable et en croissance continue : marché local de 25,6 millions d’habitants, marché régional de 124 millions d’habitants.",
            "Une forte croissance du marché ivoirien de l’automobile couplée à une émergence d’une classe moyenne locale, aujourd’hui estimée à 26,4%de la population.",
            "L’application effective, depuis le 1er Juillet 2018, de la nouvelle loi limitant l’âge des véhicules importés d’occasion à 5 ans et 10 ans a redonné un nouveau souffle au secteur en stimulant le marché du neuf au détriment de celui des véhicules d’occasion.",
            "Une intégration du porteur de projet sur la chaîne de valeur avec l’unité d’assemblage après une expérience réussie au niveau de la distribution.",
            "A large and dynamic market with strong growth potential",
            "A positive and growing population – local market of 25.6 million inhabitants, regional market of 124 million inhabitants.",
            "Strong growth in the Ivory Coast automotive market coupled with the emergence of a local middle class, now estimated at 26.4% of the population.",
            "Since July 1, 2018, a new law has become effective limiting the age of imported used vehicles to 5 years and 10 years, has given a new lease of life to the sector by stimulating the new market at the expense of that of used vehicles.",
            "The project holder will become more integrated into thisvalue chain by the creation of an assembly unit followig a successful track-record in vehicle distribution."
        ],
        solutions: [
            {
                title: "Création d’une unité d’assemblage, de maintenance et de réparation d’équipements routiers : bennes semi remorques, plateaux semi remorques, citernes carburant, citernes à ciment et autres équipements.",
                description: []
            },
            {
                title: "Creation of an assembly, maintenance, and repair unit for road equipment: semi-trailers, semi-trailers, fuel tanks, cement tanks and other equipment.",
                description: []
            }
        ],
        equipe: [
            {
                title: "+10 personnes",
                description: [
                    "Fabrice Konan, le fondateur : 10 ans dans le secteur de la commercialisation de véhicules - MBA en Management del’IAE Paris Sorbonne Business School - MBA del’Institut Français de Gestion (IFG) - PMD (ProgramForManagement Developement) de MDE Business school"
                ]
            },
            {
                title: "+10 people",
                description: [
                    "Fabrice Konan, the founder: 10 years in the vehicle marketing sector - MBA in Management from IAE Paris Sorbonne Business School - MBA from the French Institute of Management (IFG) - PMD (Program for Management Development) from MDE Business school",
                ]
            }
        ],
        business_model: [
            {
                title: "Vente de bennes, semi-remorques et camions",
                description: []
            },
            {
                title: "Service de réparation et maintenance de véhicules",
                description: []
            },
            {
                title: "Sale of tippers, semi-trailers and trucks",
                description: []
            },
            {
                title: "Repair and maintenance of vehicles",
                description: []
            }
        ],
        kpi: [
            {
                title: "La société vise",
                description: [
                    "6 millions d’euros de CA dès la 1ère année ",
                    "Un taux de croissance annuel moyen du chiffre d’affaires de 7% sur 5 ans VS",
                    "Une marge moyenne d’EBITDA de 14% sur 5 ans"
                ]
            },
            {
                title: "The company aims to achieve",
                description: [
                    "6 million euros in sales from the first year",
                    "An average annual growth rate in revenues of 7% over 5 years VS",
                    "An average EBITDA margin of 14% over 5 years"
                ]
            }
        ],
        source: [source3],
        video: "",
        problemes: [
            "Miné par les exportations non réglementées, le secteur des transports de marchandise est exposé à de haut risque d’accident, une pollution accrue et une surconsommation d’énergie",
            "Le continent africain ne dispose que d’environ 2% du parc automobile mondial",
            "Le transport routier supporte 90% des échanges intra-régionaux alors que la ZLECAF prévoit un doublement du fret routier de 201 à 403 millions de tonnes dans les prochaines années",
            "Undermined by unregulated exports, the freight transport sector is exposed to high accident risk, increased pollution, and over-consumption of energy",
            "The African continent has only about 2% of the world's vehicle fleet",
            "Road transport accounts for 90% of intra-regional trade, while the ZLECAF forecasts a doubling of road freight from 201 to 403 million tons in the coming years"
        ],
        image: projet2,
    },
    {
        id: 3,
        nom: "Projet 003",
        secteurs: ["IA/Big Data", "Agritech"],
        financement: "500 000,00 €",
        siege: "France",
        stage: "Seed B",
        type: "Startup",
        description: "Projet 003 est une application mobile de partage et de comparaison des pratiques agricoles Conçu par un agronome de formation qui comptabilise plus de 20 ans d’expériences dans l’analyse de données scientifiques et agricoles, Projet 003 offre de nouveaux itinéraires techniques afin de faire évoluer les pratiques agricoles grâce aux données.",
        pourquoi: [],
        solutions: [
            {
                title: "Application mobile de partage et de comparaison des pratiques agricoles qui permet de :",
                description: [
                    "Partager son expérience entre agriculteurs et se comparer pour apprendre plus vite",
                    "Alimenter les acteurs de l’agriculture, de alimentation de données sur les pratiques agricoles pour éclairer les décisions, orienter la R&D",
                    "Concevoir de nouveaux itinéraires techniques grâce aux données pour proposer des évolutions des pratiques agronomiques"
                ]
            }
        ],
        equipe: [
            {
                title: "2 personnes à temps plein",
                description: [
                    "Co-Fondateur et CEO: ingénieur agronome passionné par le numérique",
                    "Co-Fondateur et CTO: expert en science et technologies logicielles passionné par l'imagination et la création d'architectures informatiques,"
                ]
            }
        ],
        business_model: [
            {
                title: "Vente de l’application mobile :",
                description: [
                    "Freemium (accès limité à certains outils et données)",
                    "tarifs variables en fonction des pays (2 zones : pays développés/en développement)"
                ]
            },
            {
                title: "Vente de services associés aux données",
                description: [
                    "Tableaux de bord et études spécifiques"
                ]
            },
            {
                title: "Partenariat de R&D de développement agricoles ",
                description: [
                    "Partenariat de recherche public/privé avec financements publics"
                ]
            }
        ],
        kpi: [
            {
                title: "+100 000 téléchargements",
                description: []
            },
            {
                title: "10 000 visiteurs réguliers",
                description: []
            }
        ],
        source: [
            source6,
            source4
            
        ],
        video: "",
        problemes: [
            "Les modes de production de l’agriculture dans le monde sont remis cause",
            "L’agriculture dégrade la planète : biodiversité, pollution, réchauffement climatique",
            "Le revenu des agriculteurs est faible et ne permet pas de changement"
        ],
        image: projet3,
    }
]



const interviews = [
    {
        id: 1,
        title: "P.de Gaétan, PDG Fonds Pierre Castel",
        subtitle: "Fonds Pierre Castel",
        secteurs: ["Entrepreneuriat", "Fonds de dotation"],
        description: "Pierre De Gaétan Njikam, DG du fonds Pierre Castel, nous parle du « mythe du rêve africain ». Il revient aussi sur les variables à prendre en compte dans notre recherche d’opportunités dans les pays d’Afrique.",
        point: "Nous savons que chaque fait se lit à travers sa propre histoire. Nous vous donnons donc tous les éléments de lecture sur l’Homme qu’est notre invité et son parcours depuis Yaoundé",
        youtube: "https://www.youtube.com/embed/y310_TOicJ0",
        image: interview1,
        image2: inter5
    },
    {
        id: 2,
        title: "Bubacar Diallo, CEO Benoo",
        secteurs: ["Energie", "Greentech"],
        subtitle: "Benoo",
        description: "Benoo accompagne les entreprises africaines dans le développement et la gestion de leurs activités commerciales. Elle opère essentiellement dans les zones mal connectées au réseau électrique et où le solaire peut être une alternative viable.",
        point: "Bubacar nous partage son expérience du terrain et les réalités propres aux secteurs des énergies et à la Transition Digitale",
        youtube: "https://www.youtube.com/embed/0Vwwq0qOorg",
        image: interview2,
        image2: inter4
    },
    {
        id: 3,
        title: "Roger Nengwe, CEO Paysika",
        secteurs: ["Fintech"],
        subtitle: "Paysika",
        description: "PaySika est la première néo-banque d'Afrique à offrir des services bancaires sur des messageries populaires telles que WhatsApp, Messenger et Telegram, en plus des applications mobiles et web.",
        point: "Roger nous parle de son parcous et de comment son équipe et lui comptent démocratiser l'accès aux services financiers en Afrique Francophone.",
        youtube: "https://www.youtube.com/embed/1CWV95a-YrQ",
        image: interview3,
        image2: inter6
    },
    {
        id: 4,
        title: "Webinaire: rapprocher les entrepreneurs et les investisseurs d'Afrique francophone",
        secteurs: ["Finance", "Investissement", "Webinaire"],
        subtitle: "Webinaire",
        description: "Rapprocher les entrepreneurs et les investisseurs d'Afrique francophone A l'ère où l'essentiel des investissements va en priorité aux pays d'Afrique anglophone, nous pensons qu'il est plus que crucial de se poser les bonnes questions et de créer les conditions nécessaires au développement de relation durable entre les entrepreneurs et les investisseurs intéressés par l'Afrique francophone.",
        point: "Merci à Stezen BISSELOU-NZENGUE, CEO PaySika, Saïd SAKO, Directeur Investissement chez USAID Entrepreneuriat & Investissement et Aube Kouamé, CEO Bheti Connect pour leurs interventions.",
        youtube: "https://www.youtube.com/embed/h5IPEVqJ5XM",
        image: interview4,
        image2: inter2

    },
    {
        id: 5,
        title: "Webinaire: les aspects de l'entreprise les plus évalués par les investisseurs",
        secteurs: ["Finance", "Investissement", "Webinaire"],
        subtitle: "Webinaire",
        description: "Vous vous demandez si votre projet respecte les pré requis pour convaincre des investisseurs et obtenir du financement? Trouver du financement pour développer votre activité nécessite de confronter votre projet aux attentes des investisseurs. Toutefois, cette étape de la levée de fonds peut être complexe lorsqu’on ignore les critères d’évaluation des investisseurs et la capacité de son projet à répondre à ces critères.",
        point: "Découvrir les critères d'évaluation sur lesquels se fondent les décisions d’investissement des investisseurs !",
        youtube: "https://www.youtube.com/embed/Q6XxhOPYFSw",
        image: interview4,
        image2: inter1
    },
    {
        id: 6,
        title: "Webinaire: Entreprendre et investir dans un projet qui a du sens : comment ca marche ?",
        secteurs: ["Finance", "Investissement", "Webinaire"],
        subtitle: "Webinaire",
        description: "Vous portez un projet à impact et souhaitez le développer ? Vous souhaitez investir dans des projets qui ont du sens ? Nous avons échangé le jeudi 2 juin à 19h30 (UTC+2) pour parler d’entrepreneuriat social et de comment rapprocher entrepreneurs et investisseurs à impact pour répondre aux défis de la crise économique, sociale et environnementale actuelle Rasmey partage avec nous les exigences et les enjeux de l’investissement à impact en Afrique subsaharienne et comment entrepreneurs et investisseurs peuvent collaborer pour répondre aux problématiques sociales et environnementales actuelles. Marwa partage avec nous comment valoriser les projets de l'économie sociale et solidaire sur les marchés africains ainsi que son expérience en tant qu’entrepreneure engagée.",
        point: "Comment rapprocher entrepreneurs et investisseurs à impact pour répondre aux défis de la crise économique, sociale et environnementale actuelle ?",
        youtube: "https://www.youtube.com/embed/yP26X-5OCIs",
        image: interview4,
        image2: inter3
    }
]




const successstories = [
    {
        id: 1,
        nom: "Bizao",
        pays: ["Côte d'Ivoire", "Sénégal", "Cameroun", "Tunisie"],
        secteurs: ["Fintech"],
        stage: "",
        type: "Levée de fonds",
        image: bizaoImage,
        icon: bizaoIcon,
        linkedin:"https://www.linkedin.com/feed/update/urn:li:activity:6961597988766892032"
    },
    {
        id: 2,
        nom: "Zazuu",
        pays: ["Royaume-Uni"],
        secteurs: ["Fintech"],
        type: "Levée de fonds",
        stage: "",
        image: zazuuImage,
        icon: zazuuIcon,
        linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:6956518384989519872"
    },
    {
        id: 3,
        nom: "Afrikamart",
        pays: [],
        stage: "Seed",
        secteurs: ["Logistique", "Transport", "Logistique & Transport", "Agritech"],
        type: "Levée de fonds",
        image: afrikamartImage,
        icon: afrikamartIcon,
        linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:6953985650794614784"
    },
    {
        id: 4,
        nom: "Susu",
        pays: [],
        stage: "Pre seed",
        type: "Levée de fonds",
        secteurs: ["Santé", "Medtech"],
        image: susuImage,
        icon: susuIcon,
        linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:6905814829907746816"
    }
]



export {
    projects,
    successstories,
    interviews
}