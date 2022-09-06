import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DetailsArticleComponent } from './details-article/details-article.component'
import { DetailsRubriqueComponent } from './details-rubrique/details-rubrique.component'

const routes: Routes = [
  {
    path: 'details-rubrique/:id',
    component: DetailsRubriqueComponent,
  },
  {
    path: 'details-article/:id',
    component: DetailsArticleComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RubriquePostRoutingModule {}
