import { Component, OnInit } from '@angular/core'
import { OwlOptions } from 'ngx-owl-carousel-o'
import { GenericService } from 'src/app/shared/services/generic.service'

@Component({
  selector: 'app-list-favoris',
  templateUrl: './list-favoris.component.html',
  styleUrls: ['./list-favoris.component.scss'],
})
export class ListFavorisComponent implements OnInit {
  wishListSessionStorage: any = []
  wishList: any = []

  constructor(public genericService: GenericService) {
    //this.getWishListItems()
    this.wishList = sessionStorage.getItem('wishList')
    this.wishList = JSON.parse(this.wishList)

    console.log(this.wishList)
  }

  ngOnInit(): void {}

  getWishListItems() {
    this.wishList = sessionStorage.getItem('wishList')
    this.wishList = JSON.parse(this.wishList)

    console.log(this.wishList)

    if (this.wishList.length > 0) {
      this.wishList.map((element: any) => {
        if (element.pageName == 'offre') {
          element.items = this.genericService
            .get(element.pageName)
            .getByIdWishList(element.items)
        } else if (element.pageName == 'candidat') {
          element.items = this.genericService
            .get(element.pageName)
            .getByIdWishList(element.items)
        } else if (element.pageName == 'recruteur') {
          element.items = this.genericService
            .get(element.pageName)
            .getByIdWishList(element.items)
        } else if (element.pageName == 'demande specifique') {
          element.items = this.genericService
            .get(element.pageName)
            .getByIdWishList(element.items)
        }
      })
    }
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
    navText: [
      '<i style="color: #7c2bbb;" class="ti-angle-left"></i>',
      '<i style="color: #7c2bbb;" class="ti-angle-right"></i>',
    ],
  }
}
