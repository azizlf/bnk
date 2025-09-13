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
          title: "écoles rurales construites",
          desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel"
        },
        {
          img: "https://tse4.mm.bing.net/th/id/OIP.jqRLWSe3R3Fha_QFA0PP2gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          title: "Distribution de fournitures scolaires",
          desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel"
        },
        {
          img: "https://tse4.mm.bing.net/th/id/OIP.jqRLWSe3R3Fha_QFA0PP2gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          title: "Accés au digital et à l'e-learning",
          desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel"
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
          title: "Cliniques établies",
          desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel"
        },
        {
          img: "https://tse3.mm.bing.net/th/id/OIP.eZp7PXXwLU0f1iJQH1DRSAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          title: "Vaccinations",
          desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel"
        },
        {
          img: "https://tse3.mm.bing.net/th/id/OIP.eZp7PXXwLU0f1iJQH1DRSAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          title: "Sensibilisations",
          desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quos fugit ex nulla voluptate aperiam iure quaerat molestias deserunt sapiente sequi vel"
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
      id: "MPRPKXMJFDSL",
      title: "Micro-investissements solidaires",
      description: "Montants petits à partir de 106 pour soutenir l'éducation des enfants, la canté, reau",
      images: [
        {
          text: `<span>Lorem ipsum dolor sit amet consectetur </span>
            <br>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas voluptate cupiditate consectetur
            deserunt expedita soluta adipisci molestiae, quia a aspernatur perferendis rerum quisquam, quas dolor veniam
            aut similique exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas
            voluptate cupiditate consectetur
            deserunt expedita soluta adipisci molestiae, quia a aspernatur perferendis rerum quisquam, quas dolor veniam
            aut similique exercitationem.`,
          img: "https://www.thyenglishacademy.co.uk/wp-content/uploads/2017/08/africa.jpg",
          position: "left"
        }
      ],
      cover: "https://www.thyenglishacademy.co.uk/wp-content/uploads/2017/08/africa.jpg"
    },
    {
      id: "XRPKXMPOUROE",
      title: "Investissements durables (Projets verts & sociaux)",
      description: "Investissement dans des projets écologiques avec un impact mesurie",
      images: [{
        text: `<span>Lorem ipsum dolor sit amet consectetur </span>
            <br>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas voluptate cupiditate consectetur
            deserunt expedita soluta adipisci molestiae, quia a aspernatur perferendis rerum quisquam, quas dolor veniam
            aut similique exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas
            voluptate cupiditate consectetur
            deserunt expedita soluta adipisci molestiae, quia a aspernatur perferendis rerum quisquam, quas dolor veniam
            aut similique exercitationem.`,
        img: "https://tse1.mm.bing.net/th/id/OIP.1TVJIYgLkErmDuU8DgPUwQHaFl?rs=1&pid=ImgDetMain&o=7&rm=3",
        position: "left"
      },
      {
        text: `<span>Lorem ipsum dolor sit amet consectetur </span>
            <br>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas voluptate cupiditate consectetur
            deserunt expedita soluta adipisci molestiae, quia a aspernatur perferendis rerum quisquam, quas dolor veniam
            aut similique exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas
            voluptate cupiditate consectetur
            deserunt expedita soluta adipisci molestiae, quia a aspernatur perferendis rerum quisquam, quas dolor veniam
            aut similique exercitationem.`,
        img: "https://tse1.mm.bing.net/th/id/OIP.1TVJIYgLkErmDuU8DgPUwQHaFl?rs=1&pid=ImgDetMain&o=7&rm=3",
        position: "right"
      }],
      cover: "https://tse1.mm.bing.net/th/id/OIP.1TVJIYgLkErmDuU8DgPUwQHaFl?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: "MFJIOFEZKLZ",
      title: "Impact Bonds/Fonds/clm",
      description: "Outlis financiers innovants pour des investisseurs à là recherche d'impacts socieux",
      images: [{
        text: `<span>Lorem ipsum dolor sit amet consectetur </span>
            <br>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas voluptate cupiditate consectetur
            deserunt expedita soluta adipisci molestiae, quia a aspernatur perferendis rerum quisquam, quas dolor veniam
            aut similique exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas
            voluptate cupiditate consectetur
            deserunt expedita soluta adipisci molestiae, quia a aspernatur perferendis rerum quisquam, quas dolor veniam
            aut similique exercitationem.`,
        img: "https://img.freepik.com/photos-premium/close-up-deux-hommes-affaires-se-serrant-main-ordinateurs-portables-bureau_947794-35999.jpg",
        position: "left"
      },
      {
        text: `<span>Lorem ipsum dolor sit amet consectetur </span>
            <br>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas voluptate cupiditate consectetur
            deserunt expedita soluta adipisci molestiae, quia a aspernatur perferendis rerum quisquam, quas dolor veniam
            aut similique exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas
            voluptate cupiditate consectetur
            deserunt expedita soluta adipisci molestiae, quia a aspernatur perferendis rerum quisquam, quas dolor veniam
            aut similique exercitationem.`,
        img: "https://img.freepik.com/photos-premium/close-up-deux-hommes-affaires-se-serrant-main-ordinateurs-portables-bureau_947794-35999.jpg",
        position: "right"
      },
      {
        text: `<span>Lorem ipsum dolor sit amet consectetur </span>
            <br>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas voluptate cupiditate consectetur
            deserunt expedita soluta adipisci molestiae, quia a aspernatur perferendis rerum quisquam, quas dolor veniam
            aut similique exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas
            voluptate cupiditate consectetur
            deserunt expedita soluta adipisci molestiae, quia a aspernatur perferendis rerum quisquam, quas dolor veniam
            aut similique exercitationem.`,
        img: "https://img.freepik.com/photos-premium/close-up-deux-hommes-affaires-se-serrant-main-ordinateurs-portables-bureau_947794-35999.jpg",
        position: "left"
      }],
      cover: "https://img.freepik.com/photos-premium/close-up-deux-hommes-affaires-se-serrant-main-ordinateurs-portables-bureau_947794-35999.jpg"
    }
  ]

  constructor() { }
}
