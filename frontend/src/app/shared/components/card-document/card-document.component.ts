import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-card-document',
  templateUrl: './card-document.component.html',
  styleUrls: ['./card-document.component.scss'],
})
export class CardDocumentComponent implements OnInit {
  @Input() titre = ''
  @Input() sousTitre = ''

  @Input() image = ''
  @Input() lienContenu = ''
  @Input() format = ''
  @Input() taille = ''
  @Input() tags: any = []
  @Input() file: any = ''
  @Input() dateEdition = ''

  constructor() {}

  ngOnInit(): void {}
}
