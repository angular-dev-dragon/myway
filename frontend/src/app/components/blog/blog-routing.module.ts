import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DetailsBlogeurComponent } from './details-blogeur/details-blogeur.component'
import { ListBlogeurComponent } from './list-blogeur/list-blogeur.component'

const routes: Routes = [
  {
    path: '',
    component: ListBlogeurComponent,
  },
  {
    path: 'details-blogeur',
    component: DetailsBlogeurComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
