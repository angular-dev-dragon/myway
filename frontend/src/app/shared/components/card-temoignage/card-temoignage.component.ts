import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-card-temoignage',
  templateUrl: './card-temoignage.component.html',
  styleUrls: ['./card-temoignage.component.scss'],
})
export class CardTemoignageComponent implements OnInit {
  @Input() image: any = ''

  @Input() nom: any = ''
  @Input() fonction: any = ''
  @Input() commentaire: any = ''
  @Input() date: any = ''

  constructor() {}

  ngOnInit(): void {}
}
