import { CListComponent } from './c-list/c-list.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CDetailsComponent } from '../../../shared/components/details-hreader/c-details/c-details.component'

const routes: Routes = [
  {
    path: '',
    component: CListComponent,
  },
  {
    path: 'list',
    component: CListComponent,
  },
  {
    path: 'details/:id',
    component: CDetailsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CondidaCRoutingModule {}
