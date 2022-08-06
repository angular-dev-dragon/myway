import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  recruteurInfo: any = {
    paragraphes: [
      {
        designation: 'Services',
        description:
          'Nous sommes là, avec vous! Votre équipe RH ne suffit pas aux différentes demandes? Vous désirez de l’aide pour atteindre vos objectifs? Il suffit de nous contacter et nous pourrons répondre à vos questions et élaborer conjointement comment nous pourrons vous aider.',
      },
      {
        designation: 'Nos Services',
        description:
          'Nous sommes là, avec vous! Notre principe directeur est de faire équipe avec vous. Nous sommes là pour vous accompagner dans vos besoins et répondre à vos différents défis en ce qui a trait à la gestion de la fonction des ressources humaines. Notre mission dit tout, contribuer à propulser l’aura de votre entreprise!',
      },
      {
        designation: 'Pourquoi choisir ANAYLI Consulting ?',
        description:
          'Parce qu’avec ANAYLI, vous aurez accès à une équipe multidisciplinaire. Peu importe le défi auquel vous devez faire face, notre équipe comporte différents intervenants ayant chacun ses forces. Nous sommes commis à faire un impact positif dans votre entreprise.',
      },
      {
        description:
          "Consequat NesciuntUne organisation est en sciences sociales un groupe social formé d'individus en interaction, ayant un but collectif, mais dont les préférences, les informations, les intérêts et les connaissances peuvent diverger1 : une entreprise, une administration publique, un syndicat, un parti politique, une association, etc.\n\nL'organisation de quelque chose désigne l'action d'organiser (structurer, délimiter, agencer, répartir ou articuler). En ce sens, il s'agit d'un processus social.\n\nUne organisation est le résultat d'actions réglementées (une entreprise, un service public, une administration, une association, une armée, un événement, etc.).",
        designation: 'Ipsa porro et ad ul',

        Chemin_associe:
          'http://localhost:3600/uploads/paragraphe/1_file-1646146911264.mp4',

        lien_contenu: 'Eum nobis et laborum',
        type_contenu: 'video',

        source_contenu: 'Autem ea ex veniam ',
        titre_contenu: 'Id nesciunt esse ',
      },
      {
        designation: 'Article 1 Projets de développement resume ',
        description:
          'Le projet est une forme d’organisation des affaires collectives apparue dans l’après Seconde Guerre mondiale pour rationaliser les grandes entreprises du complexe militaro-industriel américain (Ika et Hodgson, 2014). Il a rapidement gagné de nombreux secteurs d’activité, constituant notamment l’un des instruments principaux de l’action publique dans les pays du Sud (Hirschman, 1967). En première instance, un projet de développement peut être défini comme une organisation temporaire, dotée de moyens dédiés – humains, financiers, techniques – fonctionnant comme un dispositif à double détente : sa mise en œuvre vise des objectifs propres et est censée servir de levier de transformation de l’action publique à plus grande échelle (Sjöblom et al., 2013). Si une littérature importante a considéré le projet de développement comme unité d’analyse privilégiée pour questionner son efficacité au regard de ses objectifs (e.g. Castellanet, 2003) et ses effets sur les dynamiques sociales locales (e.g. Olivier de Sardan, 1995), les modalités de son articulation à l’action publique ont été moins analysées. Cet article propose ainsi de mettre en regard (i) la question de l’efficacité des projets et (ii) leur capacité à faire évoluer la conduite de l’action publique.',

        etat_objet: 'active',
        photo: 'assets/images/img-article.webp',
        titre_contenu: 'Projets de développement resume ',
        source_contenu: 'Projets de développement resume ',
        lien_contenu: ' ',
        type_contenu: 'image',
        Chemin_associe: '',
      },

      {
        designation: '',
        description: '',
      },
    ],
    dateCreation: 2014,
    effectif: 102,
    secteurActivite: 'Developpement Digitale',
    email: 'testmail@gmail.com',
    phone: '0522114477',
    cordonneeGeo: '150, Rue ali Ben Omar Casablanca',
    website: 'www.websiterecruteur.com',
  }
}
