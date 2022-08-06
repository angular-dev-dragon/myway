import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-card-info-small',
  templateUrl: './card-info-small.component.html',
  styleUrls: ['./card-info-small.component.scss'],
})
export class CardInfoSmall implements OnInit {
  @Input() titre = ''
  @Input() valeur = ''
  @Input() type = ''

  constructor() {}

  ngOnInit(): void {}
}
