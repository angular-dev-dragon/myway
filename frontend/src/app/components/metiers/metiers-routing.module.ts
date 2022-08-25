import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListMetiersComponent } from './list-metiers/list-metiers.component'

const routes: Routes = [
  {
    path: '',
    component: ListMetiersComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetiersRoutingModule {}
