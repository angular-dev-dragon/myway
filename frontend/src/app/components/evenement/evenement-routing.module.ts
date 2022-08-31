import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DetailsEventComponent } from './details-event/details-event.component'
import { ListEvenementsComponent } from './list-evenements/list-evenements.component'

const routes: Routes = [
  {
    path: 'list-events',
    component: ListEvenementsComponent,
  },
  {
    path: 'details-event',
    component: DetailsEventComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvenementRoutingModule {}
