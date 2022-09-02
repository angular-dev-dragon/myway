import { Component, OnInit } from '@angular/core'
import { QuizService } from 'src/app/shared/services/quiz.service'

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.scss'],
})
export class ListQuizComponent implements OnInit {
  constructor(public quizService: QuizService) {}

  ngOnInit(): void {}

  listQuiz: any = []
  orientation: string = ''
  filtredData(value: any) {
    this.listQuiz = value
  }

  getOrientaion(value: any) {
    this.orientation = value
  }
}
