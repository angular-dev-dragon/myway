import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FaqPageComponent } from 'src/app/shared/components/faq-page/faq-page.component'
import { FilterComponent } from 'src/app/shared/components/filter/filter.component'
import { DetailsArticleComponent } from '../rubrique-article/details-article/details-article.component'
import { DetailsGuideComponent } from './details-guide/details-guide.component'

const routes: Routes = [
  {
    path: 'details-guide/:id',
    component: DetailsGuideComponent,
  },
  {
    path: 'details-guide/article/:id',
    component: DetailsArticleComponent,
  },
  {
    path: 'details-guide/:id/:idGuide',
    component: DetailsGuideComponent,
  },

  {
    path: 'faq',
    component: FaqPageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuideRoutingModule {}
