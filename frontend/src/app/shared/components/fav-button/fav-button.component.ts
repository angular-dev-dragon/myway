import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-fav-button',
  templateUrl: './fav-button.component.html',
  styleUrls: ['./fav-button.component.scss'],
})
export class FavButtonComponent implements OnInit {
  @Input() id = ''
  @Input() pageName = ''
  constructor() {}

  ngOnInit(): void {}
}
