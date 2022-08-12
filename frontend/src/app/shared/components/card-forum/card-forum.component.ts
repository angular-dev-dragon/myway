import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-card-forum',
  templateUrl: './card-forum.component.html',
  styleUrls: ['./card-forum.component.scss'],
})
export class CardForumComponent implements OnInit {
  @Input() image: any = ''
  @Input() designation: any = ''
  @Input() descriptif: any = ''
  @Input() nbrTheme: any = ''
  @Input() nbrParticipants: any = ''

  @Input() nbrEchanges: any = ''

  constructor() {}

  ngOnInit(): void {}
}
