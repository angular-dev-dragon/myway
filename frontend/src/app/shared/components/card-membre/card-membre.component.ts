import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-card-membre',
  templateUrl: './card-membre.component.html',
  styleUrls: ['./card-membre.component.scss'],
})
export class CardMembreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() nom = ''
  @Input() prenom = ''
  @Input() resume = ''
  @Input() fonction = ''
  @Input() email = ''
  @Input() telephone = ''
  @Input() service = ''
  @Input() rating = ''
  @Input() nbBlog = ''
}
