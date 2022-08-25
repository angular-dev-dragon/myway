import { CondidaListComponent } from './condida-list/condida-list.component'

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CondidatDetailsComponent } from '../candidats/condidat-details/condidat-details.component'

const routes: Routes = [
  {
    path: '',
    component: CondidaListComponent,
    pathMatch: 'full',
  },
  {
    path: 'list-condidats',
    component: CondidaListComponent,
  },
  {
    path: 'details-condidat',
    component: CondidatDetailsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CondidaRoutingModule {}
