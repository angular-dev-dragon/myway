import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListRecruiterComponent } from './list-recruiter/list-recruiter.component'

const routes: Routes = [
  // {
  //   path: '',
  //   component: ListRecruiterComponent,
  // },
  {
    path: 'list-recruteur',
    component: ListRecruiterComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecruiterRoutingModule {}
