import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ConseilsPratiqueComponent } from './conseils-pratique/conseils-pratique.component'
import { DetailsArticleComponent } from './details-article/details-article.component'

const routes: Routes = [
  {
    path: 'conseils-pratique',
    component: ConseilsPratiqueComponent,
  },
  {
    path: 'details-artcile',
    component: DetailsArticleComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPratiqueRoutingModule {}
