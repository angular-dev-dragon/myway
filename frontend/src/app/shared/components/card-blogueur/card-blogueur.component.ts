import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-card-blogueur',
  templateUrl: './card-blogueur.component.html',
  styleUrls: ['./card-blogueur.component.scss'],
})
export class CardBlogueurComponent implements OnInit {
  @Input() nom = ''
  @Input() prenom = ''
  @Input() resume = ''
  @Input() image = ''
  @Input() fonction = ''

  constructor() {}

  ngOnInit(): void {}
}
