import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.scss'],
})
export class CardArticleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() image = ''
  @Input() etiquette = ''
  @Input() motsCles = ''
  @Input() titre = ''
  @Input() sousTitre = ''

  @Input() resume = ''
}
