import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DetailsMetierComponent } from './details-metier/details-metier.component'
import { ListMetiersComponent } from './list-metiers/list-metiers.component'

const routes: Routes = [
  {
    path: '',
    component: ListMetiersComponent,
  },
  {
    path: 'details-metiers',
    component: DetailsMetierComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetiersRoutingModule {}
