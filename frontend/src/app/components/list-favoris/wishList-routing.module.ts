import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListFavorisComponent } from './list-favoris.component'

const routes: Routes = [
  {
    path: '',
    component: ListFavorisComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WishListRoutingModule {}
