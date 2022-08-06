import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-card-recruiter',
  templateUrl: './card-recruiter.component.html',
  styleUrls: ['./card-recruiter.component.scss'],
})
export class CardRecruiterComponent implements OnInit {
  @Input() imageBg = ''
  @Input() logo = ''
  @Input() title = ''
  @Input() type = ''
  @Input() salaries = ''
  @Input() caption = ''

  constructor() {}

  ngOnInit(): void {}
}
