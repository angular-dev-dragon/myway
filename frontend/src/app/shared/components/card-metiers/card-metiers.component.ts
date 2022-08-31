import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-card-metiers',
  templateUrl: './card-metiers.component.html',
  styleUrls: ['./card-metiers.component.scss'],
})
export class CardMetiersComponent implements OnInit {
  @Input() Image = ''
  @Input() Intitule = ''
  @Input() Secteur = ''
  @Input() link: any = ''
  constructor() {}

  ngOnInit(): void {}
}
