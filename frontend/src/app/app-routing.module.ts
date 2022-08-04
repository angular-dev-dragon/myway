import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListRecruiterComponent } from './components/recruiter/list-recruiter/list-recruiter.component'
import { ContentLayoutComponent } from './shared/components/layouts/content-layout.component'
import { content } from './shared/routes/content-routes'
const routes: Routes = [
  // {
  //   path:'',component:Login
  // },

  {
    path: '',
    component: ContentLayoutComponent,
    children: content,
    data: {
      title: '',
    },
    // canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
