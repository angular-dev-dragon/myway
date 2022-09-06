import { Component, Input, OnInit } from '@angular/core'
import { GenericService } from '../../services/generic.service'

@Component({
  selector: 'app-fav-button',
  templateUrl: './fav-button.component.html',
  styleUrls: ['./fav-button.component.scss'],
})
export class FavButtonComponent implements OnInit {
  @Input() id = ''
  @Input() pageName = ''
  constructor(public genericService: GenericService) {}

  ngOnInit(): void {}
}
