import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core'

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.scss'],
})
export class ListQuizComponent implements OnInit {
  constructor() {
    this.listQuiz = this.allListQuiz
  }

  ngOnInit(): void {}
  allListQuiz: any = [
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
      secteur: 'Informatique',
      metier: ['Developpeur', 'Developpeur Front-End'],
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
      secteur: 'Informatique',
      metier: ['Developpeur'],
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
      secteur: 'Agriculture',
      metier: ['DevOps'],
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
      secteur: 'Électronique',
      metier: ['DevOps'],
    },
  ]
  listQuiz: any = []

  @ViewChildren('metier') metierBox!: any

  @ViewChild('secteur') secteurSelect!: any

  @ViewChild('search') searchInput!: any

  filter() {
    this.listQuiz = this.allListQuiz

    let secteurFiltre = this.secteurSelect.nativeElement.value
    console.log('filtre par secteurs', secteurFiltre)

    let searchFiltre = this.searchInput.nativeElement.value

    let metierFiltre = this.metierBox._results
    // console.log('filtre par contrat', contratFiltre)

    // console.log('filtre par date', dateFiltre)
    //let metierFilter = this.metierSelect.nativeElement.value

    if (searchFiltre != '') {
      this.listQuiz = this.listQuiz.filter((recruteur: any) => {
        return recruteur.title
          .toLowerCase()
          .includes(searchFiltre.toLowerCase())
      })
    }

    if (secteurFiltre != '') {
      this.listQuiz = this.listQuiz.filter((recruteur: any) => {
        return recruteur.secteur == secteurFiltre
      })
    }
    this.checkboxFiltre(metierFiltre, 'metier')
  }

  checkboxFiltre(CheckboxList: any, label: any) {
    let newList2
    let newList3: any = this.listQuiz
    let isFirstTime: Boolean = true
    CheckboxList.map((filtre: any) => {
      if (filtre.nativeElement.checked) {
        if (isFirstTime == true) {
          isFirstTime = false
          newList3 = []
        }

        newList2 = this.listQuiz
        newList2 = newList2.filter((quiz: any) => {
          return quiz.metier.includes(filtre.nativeElement.value)
        })

        newList2.map((list: any) => {
          newList3.push(list)
        })
      }
    })
    this.listQuiz = newList3
    console.log(
      '🚀 ~ file: list-quiz.component.ts ~ line 140 ~ ListQuizComponent ~ checkboxFiltre ~   this.listQuiz',
      this.listQuiz,
    )
  }

  sort(type: any) {
    this.listQuiz.sort((a: any, b: any) =>
      a[type].toLowerCase() > b[type].toLowerCase() ? 1 : -1,
    )
  }
  sortbyDate() {
    this.listQuiz.sort((a: any, b: any) => (a.Date < b.Date ? 1 : -1))
  }
  showSidebar: boolean = false

  showFilter() {
    this.showSidebar = !this.showSidebar
  }
  sideBarValue: string = 'ads'
}
