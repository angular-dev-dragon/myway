import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-card-question-reponse',
  templateUrl: './card-question-reponse.component.html',
  styleUrls: ['./card-question-reponse.component.scss'],
})
export class CardQuestionReponseComponent implements OnInit {
  @Input() question: string = ''
  @Input() reponse: string = ''

  constructor() {}

  ngOnInit(): void {}
}
