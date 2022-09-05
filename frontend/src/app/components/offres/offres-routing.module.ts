import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DetailOffresComponent } from './detail-offres/detail-offres.component'
import { ListOffresComponent } from '../../shared/components/list-offres/list-offres.component'
import { ListOffresEmploiComponent } from './list-offres-emploi/list-offres-emploi.component'

const routes: Routes = [
  {
    path: '',
    component: ListOffresEmploiComponent,
  },
  {
    path: 'list-offres',
    component: ListOffresEmploiComponent,
  },
  {
    path: 'details-offres/:id',
    component: DetailOffresComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffresRoutingModule {}
