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
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consequatur beatae modi, suntminima aliquam libero rerum inventore vitae distinctio quisquam incidunt.",
      details: [
        {
          nbr: 1200,
          title: "Enfants scolarisés"
        },
        {
          nbr: 15,
          title: "écoles rénovées"
        },
        {
          nbr: 500,
          title: "Ordinateurs distribués"
        }
      ],
      prj: [
        {
          img: "https://tse4.mm.bing.net/th/id/OIP.jqRLWSe3R3Fha_QFA0PP2gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          title: "écoles rurales construites"
        },
        {
          img: "https://tse4.mm.bing.net/th/id/OIP.jqRLWSe3R3Fha_QFA0PP2gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          title: "Distribution de fournitures scolaires"
        },
        {
          img: "https://tse4.mm.bing.net/th/id/OIP.jqRLWSe3R3Fha_QFA0PP2gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          title: "Accés au digital et à l'e-learning"
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
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consequatur beatae modi, suntminima aliquam libero rerum inventore vitae distinctio quisquam incidunt.",
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
          title: "Cliniques établies"
        },
        {
          img: "https://tse3.mm.bing.net/th/id/OIP.eZp7PXXwLU0f1iJQH1DRSAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          title: "Vaccinations"
        },
        {
          img: "https://tse3.mm.bing.net/th/id/OIP.eZp7PXXwLU0f1iJQH1DRSAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          title: "Sensibilisations"
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

  constructor() { }
}
