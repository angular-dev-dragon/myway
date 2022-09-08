import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FaqPageComponent } from 'src/app/shared/components/faq-page/faq-page.component'
import { FaqComponent } from '../recruiter/faq/faq.component'
import { DetailsGuideComponent } from './details-guide/details-guide.component'

const routes: Routes = [
  {
    path: 'details-guide/:id',
    component: DetailsGuideComponent,
    children: [],
  },
  {
    path: 'details-guide/:id/:idGuide',
    component: DetailsGuideComponent,
    children: [],
  },
  {
    path: 'faq',
    component: FaqPageComponent,
    children: [],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuideRoutingModule {}
