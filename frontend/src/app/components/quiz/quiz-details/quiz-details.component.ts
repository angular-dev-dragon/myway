import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss'],
})
export class QuizDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  quiz: any = {
    image:
      'https://wegate.eu/sites/default/files/styles/resize_750x450/public/coursera.jpg?itok=5dhpuGwQ',
    titre: 'Quiz HTML CSS',
    resume:
      'Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included Bootstrap dropdown JavaScript plugin. They’re toggled by clicking, not by hovering; this is an intentional design decision.',
    domaine: 'Front-End Developpement',
    specialisation: 'Bootstrap Html CSS',
    nbQuestions: 10,
    date: '2022-05-15',
    niveau: 'Avancé',
    note: 5,

    details: [
      {
        description:
          "Consequat NesciuntUne organisation est en sciences sociales un groupe social formé d'individus en interaction, ayant un but collectif, mais dont les préférences, les informations, les intérêts et les connaissances peuvent diverger1 : une entreprise, une administration publique, un syndicat, un parti politique, une association, etc.\n\nL'organisation de quelque chose désigne l'action d'organiser (structurer, délimiter, agencer, répartir ou articuler). En ce sens, il s'agit d'un processus social.\n\nUne organisation est le résultat d'actions réglementées (une entreprise, un service public, une administration, une association, une armée, un événement, etc.).",
        designation: 'Ipsa porro et ad ul',
      },
      {
        designation: 'Article 1 Projets de développement resume ',
        description:
          'Le projet est une forme d’organisation des affaires collectives apparue dans l’après Seconde Guerre mondiale pour rationaliser les grandes entreprises du complexe militaro-industriel américain (Ika et Hodgson, 2014). Il a rapidement gagné de nombreux secteurs d’activité, constituant notamment l’un des instruments principaux de l’action publique dans les pays du Sud (Hirschman, 1967). En première instance, un projet de développement peut être défini comme une organisation temporaire, dotée de moyens dédiés – humains, financiers, techniques – fonctionnant comme un dispositif à double détente : sa mise en œuvre vise des objectifs propres et est censée servir de levier de transformation de l’action publique à plus grande échelle (Sjöblom et al., 2013). Si une littérature importante a considéré le projet de développement comme unité d’analyse privilégiée pour questionner son efficacité au regard de ses objectifs (e.g. Castellanet, 2003) et ses effets sur les dynamiques sociales locales (e.g. Olivier de Sardan, 1995), les modalités de son articulation à l’action publique ont été moins analysées. Cet article propose ainsi de mettre en regard (i) la question de l’efficacité des projets et (ii) leur capacité à faire évoluer la conduite de l’action publique.',
      },
    ],
  }
}
