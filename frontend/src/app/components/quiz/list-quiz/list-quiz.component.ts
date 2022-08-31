import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core'
import { QuizService } from 'src/app/shared/services/quiz.service'

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.scss'],
})
export class ListQuizComponent implements OnInit {
  constructor(public quizService: QuizService) {}

  ngOnInit(): void {}

  // @ViewChildren('metier') metierBox!: any

  // @ViewChild('secteurFilter') secteurSelect!: any

  // @ViewChild('search') searchInput!: any

  // filter() {
  //   this.listQuiz = this.allListQuiz

  //   let searchInput = this.searchInput.nativeElement.value
  //   console.log('searchInput', searchInput)

  //   let metierFiltre = this.metierBox._results

  //   let secteurFiltre = this.secteurSelect.nativeElement.value

  //   if (searchInput != '') {
  //     this.listQuiz = this.listQuiz.filter((quiz: any) => {
  //       return quiz.titre.toLowerCase().includes(searchInput.toLowerCase())
  //     })
  //   }

  //   if (secteurFiltre != '') {
  //     this.listQuiz = this.listQuiz.filter((quiz: any) => {
  //       return quiz.secteur == secteurFiltre
  //     })
  //   }
  //   this.checkboxFiltre(metierFiltre, 'metier')
  // }

  // checkboxFiltre(CheckboxList: any, label: any) {
  //   let newList2
  //   let newList3: any = this.listQuiz
  //   let isFirstTime: Boolean = true
  //   CheckboxList.map((filtre: any) => {
  //     if (filtre.nativeElement.checked) {
  //       if (isFirstTime == true) {
  //         isFirstTime = false
  //         newList3 = []
  //       }

  //       newList2 = this.listQuiz
  //       newList2 = newList2.filter((quiz: any) => {
  //         return quiz.metier.includes(filtre.nativeElement.value)
  //       })

  //       newList2.map((list: any) => {
  //         newList3.push(list)
  //       })
  //     }
  //   })
  //   this.listQuiz = newList3
  //   console.log(
  //     '🚀 ~ file: list-quiz.component.ts ~ line 140 ~ ListQuizComponent ~ checkboxFiltre ~   this.listQuiz',
  //     this.listQuiz,
  //   )
  // }
  listQuiz: any = []
  filtredData(value: any) {
    this.listQuiz = value
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
