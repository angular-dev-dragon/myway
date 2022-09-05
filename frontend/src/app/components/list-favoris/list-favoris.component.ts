import { Component, OnInit } from '@angular/core'
import { GenericService } from 'src/app/shared/services/generic.service'

@Component({
  selector: 'app-list-favoris',
  templateUrl: './list-favoris.component.html',
  styleUrls: ['./list-favoris.component.scss'],
})
export class ListFavorisComponent implements OnInit {
  constructor(genericService: GenericService) {
    let wishList: any = sessionStorage.getItem('wishList')
    wishList = JSON.parse(wishList)

    console.log(wishList)
  }

  ngOnInit(): void {}
}
