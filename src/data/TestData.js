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
        description: "",
        pourquoi: "",
        solutions: "",
        equipe: "",
        business_model: "",
        kpi: "",
        source: [source3],
        video: "",
        problemes: "",
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