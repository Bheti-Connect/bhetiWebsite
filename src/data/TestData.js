import projet1 from "../assets/images/001.jpg"
import projet2 from "../assets/images/002.jpg"
import projet3 from "../assets/images/003.jpg"
import source1 from "../assets/images/source1.jpg"
import source2 from "../assets/images/source2.jpg"
import source3 from "../assets/images/source3.jpg"
import source4 from "../assets/images/source4.jpg"
import source5 from "../assets/images/source5.jpg"
import source6 from "../assets/images/source6.jpg"


const projects = [
    {
        id: 1,
        nom: "Projet 001",
        secteurs: ["Mobility"],
        financement: "2 000 000,00 €",
        siege: "Cote d'ivoire",
        stage: "Seed",
        type: "Startup",
        description: "Projet 001 est une entreprise basée en Côte d’Ivoire dans le domaine de la mobilité. Fondé par deux serials entrepreneurs, le projet a été lancé il y a 1 an et recherche 2M € pour le lancement d’une super application de services de livraison au dernier kilomètre pour tout secteur : Economique, Rapide, Accessible. Projet 001 is a company based in Ivory Coast in the field of mobility. Founded by two serial entrepreneurs, this project was launched 1 year ago and is looking for €2M to launch a super last mile delivery service application for any sector: Economic, Fast, Accessible.",
        pourquoi: [
            "D'ici 2025, les ventes en ligne en Afrique représenteront 10 % des ventes au détail et cela passera par la numérisation du secteur formel et informel.",
            "On assiste à l'émergence d'une classe moyenne. Alors que le paiement mobile explose (27,4 milliards de transactions par Mois)",
            "By 2025, online sales in Africa will account for 10% of retail sales and this will require the digitization of both the formal and informal sectors of the economy.",
            "We are seeing the emergence of a middle class and the simultaneous expansion of mobile payment (27.4 billion transactions per month)"
        ],
        solutions: [
            "Répondre au déficit de confiance, de mobilité, de numérisation et de paiements.",
            "Répondre au déficit de livraisons des très petites entreprises du secteur formel et informel.",
            "Simplifiez les livraisons à la demande, quel que soit l'endroit où vous vous trouvez.",
            "Facilitez les paiements grâce à des outils financiers pour les petites entreprises formelles et informelles",
            "Address the deficits in trust, of mobility, of digitization and of payment.",
            "Address the delivery gap for very small businesses in the formal and informal sector.",
            "Simplify on-demand deliveries regardless of location.",
            "Facilitate payments with financial tools for formal and informal small businesses"
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
            "Frais de livraison à partir de 1000 FCFA B2C",
            "Abonnement mensuel selon la demande",
            "15% sur toutes les commandes de produits alimentaires et de supermarchés",
            "Campagne publicitaire pour les restaurants sur l'APP",
            "B2C : Delivery fees from 1000 FCFA B2C",
            "B2B : Monthly subscription according to the demand",
            "15% on all food and supermarket orders",
            "Advertising campaign for restaurants on the APP"
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
        description: "Projet 001 est une société ivoirienne spécialisée dans l’importation et la vente de véhicules neufs et d’occasion, la maintenance et la réparation de camions tracteurs routiers, de semi-remorques, de citernes, de matériel de BTP, de carrières et destinés au transport de marchandises. La société lève 5 millions d’euros pour la construction d’une unité d’assemblage de bennes et semi-remorques et d’un stock outils camions. cette unité d’assemblage sera accessible aux poids lourds et comprendra une ligne de montage, une administration, un magasin de stockage et une ligne de peinture. Projet 002 is an Ivorian company specializing in the import and sale of new and used vehicles, maintenance and repair of road tractor trucks, semi-trailers, tankers, construction equipment, quarries, and the transport of goods. The company is raising 5 million euros for the construction of an assembly unit for tippers and semi-trailers and a stock of truck tools. This assembly unit will be accessible to heavy goods vehicles and will include an assembly line, an administration, a storage warehouse, and a paint line.",
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
            "Création d’une unité d’assemblage, de maintenance et de réparation d’équipements routiers : bennes semi remorques, plateaux semi remorques, citernes carburant, citernes à ciment et autres équipements.",
            "Creation of an assembly, maintenance, and repair unit for road equipment: semi-trailers, semi-trailers, fuel tanks, cement tanks and other equipment."
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
            "Vente de bennes, semi-remorques et camions",
            "Service de réparation et maintenance de véhicules",
            "Sale of tippers, semi-trailers and trucks",
            "Repair and maintenance of vehicles"
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
        description: "",
        pourquoi: "",
        solutions: "",
        equipe: "",
        business_model: "",
        kpi: "",
        source: [
            source4,
            source6
        ],
        video: "",
        problemes: "",
        image: projet3,
    }
]

export default projects