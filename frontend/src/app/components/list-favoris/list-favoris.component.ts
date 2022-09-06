import { Component, OnInit } from '@angular/core'
import { GenericService } from 'src/app/shared/services/generic.service'

@Component({
  selector: 'app-list-favoris',
  templateUrl: './list-favoris.component.html',
  styleUrls: ['./list-favoris.component.scss'],
})
export class ListFavorisComponent implements OnInit {
  wishList: any = []
  constructor(genericService: GenericService) {
    this.wishList = sessionStorage.getItem('wishList')
    this.wishList = JSON.parse(this.wishList)

    console.log(this.wishList)
  }

  ngOnInit(): void {}
}
