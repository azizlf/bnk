import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects = [
    {
      id: "JDF8493JDKLSDJK",
      img: "https://tse4.mm.bing.net/th/id/OIP.jqRLWSe3R3Fha_QFA0PP2gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Education pour les enfants en Afrique",
      description: "Grâce à ImpactBank, j’ai pu lancer mon atelier de couture pour aider les jeunes de mon village à apprendre un métier.",
      details: [
        {
          nbr: 3,
          title: "Ecoles rurales"
        },
        {
          nbr: 450,
          title: "Enfants soutenus"
        },
        {
          nbr: 200,
          title: "Enfants connectés au digital"
        }
      ],
      prj: [
        {
          img: "https://tse4.mm.bing.net/th/id/OIP.jqRLWSe3R3Fha_QFA0PP2gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          title: "écoles rurales construites",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel"
        },
        {
          img: "https://tse4.mm.bing.net/th/id/OIP.jqRLWSe3R3Fha_QFA0PP2gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          title: "Distribution de fournitures scolaires",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel"
        },
        {
          img: "https://tse4.mm.bing.net/th/id/OIP.jqRLWSe3R3Fha_QFA0PP2gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          title: "Accés au digital et à l'e-learning",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel"
        }
      ],
      comments: [
        {
          img: "https://tse4.mm.bing.net/th/id/OIP.jqRLWSe3R3Fha_QFA0PP2gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores quis facere dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores quis facere dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores quis facere dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores"
        },
        {
          img: "https://tse4.mm.bing.net/th/id/OIP.jqRLWSe3R3Fha_QFA0PP2gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores quis facere dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores quis facere dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores quis facere dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores"
        },
        {
          img: "https://tse4.mm.bing.net/th/id/OIP.jqRLWSe3R3Fha_QFA0PP2gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores quis facere dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores quis facere dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores quis facere dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores"
        }
      ]
    },
    {
      id: "PDF8459JDKLSDJK",
      img: "https://tse3.mm.bing.net/th/id/OIP.eZp7PXXwLU0f1iJQH1DRSAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Santé pour les communautés rurales",
      description: "Nous avons amélioré l'accès aux soins de santé grâce à votre soutien. Aujourd'hui, plus de familles peuvent bénéficier d'un suivi médical régulier.",
      details: [
        {
          nbr: 60000,
          title: "Personne soutenués"
        },
        {
          nbr: 25,
          title: "Cliniques installées"
        },
        {
          nbr: 30,
          title: "Programmes"
        }
      ],
      prj: [
        {
          img: "https://tse3.mm.bing.net/th/id/OIP.eZp7PXXwLU0f1iJQH1DRSAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          title: "Cliniques établies",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel"
        },
        {
          img: "https://tse3.mm.bing.net/th/id/OIP.eZp7PXXwLU0f1iJQH1DRSAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          title: "Vaccinations",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel"
        },
        {
          img: "https://tse3.mm.bing.net/th/id/OIP.eZp7PXXwLU0f1iJQH1DRSAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          title: "Sensibilisations",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel"
        }
      ],
      comments: [
        {
          img: "https://tse3.mm.bing.net/th/id/OIP.eZp7PXXwLU0f1iJQH1DRSAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores quis facere dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores quis facere dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores quis facere dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores"
        },
        {
          img: "https://tse3.mm.bing.net/th/id/OIP.eZp7PXXwLU0f1iJQH1DRSAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores quis facere dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores quis facere dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores quis facere dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores"
        },
        {
          img: "https://tse3.mm.bing.net/th/id/OIP.eZp7PXXwLU0f1iJQH1DRSAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores quis facere dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores quis facere dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores quis facere dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel, numquam excepturi minima dolores maiores"
        }
      ]
    }
  ]

  investments = [
    {
      id: "XMPRPKEIZAZNKDSL",
      title: "Développement de complexes immobiliers de luxe",
      description: `Construction et commercialisation de résidences haut de gamme (villas, appartements premium, complexes résidentiels) destinées à une clientèle fortunée locale et internationale, avec un fort potentiel de plus-value immobilière. 
<br>📊 Modèle de revenus : Vente directe + location haut standing
<br>📈 ROE estimé : 18 – 22 %
<br>💵 Revenus annuels estimés : 2,5 – 3 M€
<br>⏳ Payback period : 4 – 5 ans`,
      images: [
        {
          text: `<span>Opportunité de Marché</span>
            <br>
            Le marché de l’immobilier premium connaît une croissance annuelle de +7 % dans la région MENA. Avec une demande forte de la clientèle locale haut de gamme et des expatriés, investir dans ce secteur garantit stabilité et valorisation à long terme.`,
          img: "https://www.thyenglishacademy.co.uk/wp-content/uploads/2017/08/africa.jpg",
          position: "left"
        },
        {
          text: `<span>Rentabilité et Sécurité</span>
            <br>
            Chaque projet génère un ROE de 18 à 22 %, avec des revenus annuels estimés entre 2,5 et 3 M€. La période de retour sur investissement (payback) est de 4 à 5 ans, assurant un équilibre entre risque et rendement.`,
          img: "https://www.thyenglishacademy.co.uk/wp-content/uploads/2017/08/africa.jpg",
          position: "right"
        },
        {
          text: `<span>Atout Stratégique</span>
            <br>
            Investir dans l’immobilier de luxe, c’est détenir un actif tangible et durable qui se valorise avec le temps. Les investisseurs bénéficient à la fois de la revente directe et des revenus locatifs haut standing.`,
          img: "https://www.thyenglishacademy.co.uk/wp-content/uploads/2017/08/africa.jpg",
          position: "left"
        }
      ],
      cover: "https://tse2.mm.bing.net/th/id/OIP.0RgwPMPp-glC2qZ1MwL6qAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: "XRPKJFHLSQOUROE",
      title: "Projets d’énergie renouvelable",
      description: `Mise en place de parcs solaires et éoliens pour la production d’électricité verte, avec des contrats d’achat garantis à long terme. Ce secteur attire des investisseurs en quête de rentabilité durable et stable.
<br>📊 Modèle de revenus : Contrats PPA (Power Purchase Agreements) sur 15–20 ans
<br>📈 ROE estimé : 15 – 20 %
<br>💵 Revenus annuels estimés : 5 – 6 M€
<br>⏳ Payback period : 6 – 7 ans`,
      images: [{
        text: `<span>Impact Économique</span>
            <br>
            Avec des contrats d’achat d’électricité sécurisés sur 20 ans, ce projet génère des revenus stables entre 5 et 6 M€ par an. Le ROE estimé est de 15 à 20 %, avec une période de retour de 6 à 7 ans.`,
        img: "https://tse1.mm.bing.net/th/id/OIP.1TVJIYgLkErmDuU8DgPUwQHaFl?rs=1&pid=ImgDetMain&o=7&rm=3",
        position: "left"
      },
      {
        text: `<span>Impact Environnemental</span>
            <br>
            Investir dans ce projet, c’est soutenir la transition énergétique mondiale. Chaque parc contribue à réduire les émissions de CO₂, et la demande mondiale pour les énergies propres augmente de +10 % par an.`,
        img: "https://tse1.mm.bing.net/th/id/OIP.1TVJIYgLkErmDuU8DgPUwQHaFl?rs=1&pid=ImgDetMain&o=7&rm=3",
        position: "right"
      }
      ],
      cover: "https://tse3.mm.bing.net/th/id/OIP.sZZGPnDMQDcaV_hKrABlwwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: "VFJURIFEZKLD",
      title: "Développement d’hôtels 5 étoiles et resorts de luxe",
      description: `Création d’infrastructures hôtelières haut de gamme dans des zones touristiques stratégiques, intégrant hébergement, restauration et services exclusifs, pour capter une clientèle internationale premium.
<br>📊 Modèle de revenus : Hébergement, restauration, événements et services premium
<br>📈 ROE estimé : 20 – 25 %
<br>💵 Revenus annuels estimés : 4 – 5 M€
<br>⏳ Payback period : 5 – 6 ans
`,
      images: [
        {
          text: `<span>Marché en Croissance</span>
            <br>
            Le secteur du tourisme de luxe attire plus de 25 millions de visiteurs par an dans la région méditerranéenne. La demande pour des établissements haut de gamme ne cesse d’augmenter.`,
          img: "https://img.freepik.com/photos-premium/close-up-deux-hommes-affaires-se-serrant-main-ordinateurs-portables-bureau_947794-35999.jpg",
          position: "left"
        },
        {
          text: `<span>Potentiel Financier</span>
            <br>
            Avec un ROE de 20 à 25 %, et des revenus annuels entre 4 et 5 M€, ce projet offre une rentabilité élevée et diversifiée : hébergement, restauration et événements.`,
          img: "https://img.freepik.com/photos-premium/close-up-deux-hommes-affaires-se-serrant-main-ordinateurs-portables-bureau_947794-35999.jpg",
          position: "right"
        },
        {
          text: `<span>Expérience Unique</span>
            <br>
            Investir dans l’hôtellerie de luxe, c’est miser sur une clientèle internationale fidèle et à fort pouvoir d’achat, assurant des taux d’occupation stables toute l’année.`,
          img: "https://img.freepik.com/photos-premium/close-up-deux-hommes-affaires-se-serrant-main-ordinateurs-portables-bureau_947794-35999.jpg",
          position: "left"
        }
      ],
      cover: "https://th.bing.com/th/id/R.e4a42a0f9ecc265df256683df0eaca32?rik=ysWVPISCtwX5Hw&pid=ImgRaw&r=0"
    },
    {
      id: "BFJMLIEZKLY",
      title: "Développement de tours de bureaux et centres de coworking",
      description: `Conception et exploitation de bâtiments modernes dédiés aux entreprises et aux startups, combinant bureaux classiques et espaces de coworking flexibles, avec une forte demande dans les grandes villes.
<br>📊 Modèle de revenus : Loyers long terme + abonnements coworking
<br>📈 ROE estimé : 14 – 18 %
<br>💵 Revenus annuels estimés : 2 – 2,5 M€
<br>⏳ Payback period : 6 ans
`,
      images: [
        {
          text: `<span>Produits Premium</span>
            <br>
            Huile d’olive extra vierge, dattes bio et vins haut de gamme : des produits qui connaissent une demande croissante sur les marchés européens, américains et du Golfe.`,
          img: "https://img.freepik.com/photos-premium/close-up-deux-hommes-affaires-se-serrant-main-ordinateurs-portables-bureau_947794-35999.jpg",
          position: "left"
        },
        {
          text: `<span>Rentabilité Durable</span>
            <br>
            Avec un ROE de 16 à 20 % et des revenus annuels estimés à 1,5 – 2 M€, l’agrobusiness haut de gamme offre un retour rapide (3 à 4 ans) tout en valorisant le patrimoine agricole local.`,
          img: "https://img.freepik.com/photos-premium/close-up-deux-hommes-affaires-se-serrant-main-ordinateurs-portables-bureau_947794-35999.jpg",
          position: "right"
        }
      ],
      cover: "https://tse1.mm.bing.net/th/id/OIP.WbLShx93EDJBnGZfvz0OigHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: "XFJILJDZKLZ",
      title: "Développement d’entrepôts modernes et hubs logistiques",
      description: `Construction de plateformes logistiques et entrepôts connectés, adaptés aux besoins croissants du e-commerce et de la distribution internationale, avec des contrats de location longue durée.
<br>📊 Modèle de revenus : Location B2B longue durée (e-commerce & distribution)
<br>📈 ROE estimé : 15 – 18 %
<br>💵 Revenus annuels estimés : 2,5 – 3 M€
<br>⏳ Payback period : 5 ans
`,
      images: [
        {
          text: `<span>Le e-commerce connaît une croissance</span>
            <br>
            mondiale de +15 % par an. Ce projet de hubs logistiques et d’entrepôts modernes garantit des revenus récurrents à travers des contrats de location longue durée. Avec un ROE de 15 à 18 % et des revenus annuels entre 2,5 et 3 M€, il s’agit d’un secteur d’avenir, indispensable à la digitalisation de l’économie.`,
          img: "https://img.freepik.com/photos-premium/close-up-deux-hommes-affaires-se-serrant-main-ordinateurs-portables-bureau_947794-35999.jpg",
          position: "left"
        }
      ],
      cover: "https://tse4.mm.bing.net/th/id/OIP.dx3COSjsnsul1btOt8H-lAHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ]

  constructor() { }
}
