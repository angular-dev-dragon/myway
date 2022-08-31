import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-card-quiz',
  templateUrl: './card-quiz.component.html',
  styleUrls: ['./card-quiz.component.scss'],
})
export class CardQuizComponent implements OnInit {
  @Input() image: string = ''
  @Input() resume: string = ''
  @Input() titre: string = ''
  @Input() link: string = ''
  @Input() domaine: string = ''
  @Input() specialisation: string = ''
  @Input() nbQuestions: string = ''
  @Input() niveau: string = ''
  @Input() date: string = ''
  @Input() note: string = ''

  constructor() {}

  ngOnInit(): void {}
}
