import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DetailOffresComponent } from './detail-offres/detail-offres.component'
import { ListOffresComponent } from './list-offres/list-offres.component'

const routes: Routes = [
  {
    path: '',
    component: ListOffresComponent,
  },
  {
    path: 'list-offres',
    component: ListOffresComponent,
  },
  {
    path: 'details-offres',
    component: DetailOffresComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffresRoutingModule {}
