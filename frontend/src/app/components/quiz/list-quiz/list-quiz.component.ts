import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.scss'],
})
export class ListQuizComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  listQuiz: any = [
    {
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
    },
    {
      image:
        'https://wegate.eu/sites/all/themes/wegate_foundation/images/logo-footer.svg',
      titre: 'Quiz Backend Developpement',
      resume:
        'Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included Bootstrap dropdown JavaScript plugin. They’re toggled by clicking, not by hovering; this is an intentional design decision.',

      domaine: 'Front-End Developpement',
      specialisation: 'Bootstrap Html CSS',
      nbQuestions: 10,
      date: '2022-05-15',
      niveau: 'Avancé',
      note: 4.5,
    },
    {
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ba/e14875b76f4e799e067d3551076e8c/1200x600_DA.png?auto=format%2Ccompress&dpr=1&w=268',
      titre: 'Quiz Marketing Digitale',
      resume:
        'Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included Bootstrap dropdown JavaScript plugin. They’re toggled by clicking, not by hovering; this is an intentional design decision.',

      domaine: 'Front-End Developpement',
      specialisation: 'Bootstrap Html CSS',
      nbQuestions: 10,
      date: '2022-05-15',
      niveau: 'Débutant',
      note: 3.5,
    },
    {
      image:
        'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/14/b2d530f1ad11e7ab380fc0c6c817a8/Search-Thumbnail.jpg?auto=format%2Ccompress&dpr=1&w=268',
      titre: 'Quiz React JS',
      resume:
        'Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included Bootstrap dropdown JavaScript plugin. They’re toggled by clicking, not by hovering; this is an intentional design decision.',
      niveau: 'Intermediare',

      domaine: 'Front-End Developpement',
      specialisation: 'Bootstrap Html CSS',
      nbQuestions: 10,
      date: '2022-05-15',
      note: 4,
    },
  ]
}
