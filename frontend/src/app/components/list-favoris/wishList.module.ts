import { SharedModule } from 'src/app/shared/shared.module'

import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { WishListRoutingModule } from './wishList-routing.module'
import { ListFavorisComponent } from './list-favoris.component'

@NgModule({
  declarations: [ListFavorisComponent],

  imports: [SharedModule, RouterModule],
  exports: [WishListRoutingModule],
})
export class WishListModule {}
