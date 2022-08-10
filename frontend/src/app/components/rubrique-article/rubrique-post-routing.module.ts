import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DetailsRubriqueComponent } from './details-rubrique/details-rubrique.component'
import { DetailsArticleComponent } from './details-article/details-article.component'

const routes: Routes = [
  {
    path: 'details-rubrique',
    component: DetailsRubriqueComponent,
  },
  {
    path: 'details-article',
    component: DetailsArticleComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RubriquePostRoutingModule {}
