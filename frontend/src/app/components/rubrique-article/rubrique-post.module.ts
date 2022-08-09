import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from 'src/app/shared/shared.module'
import { DetailsRubriqueComponent } from './details-rubrique/details-rubrique.component'
import { RubriquePostRoutingModule } from './rubrique-post-routing.module'
import { DetailsArticleComponent } from './details-article/details-article.component'

@NgModule({
  declarations: [DetailsRubriqueComponent, DetailsArticleComponent],
  imports: [SharedModule, RouterModule],
  exports: [RubriquePostRoutingModule],
})
export class RubriquePostModule {}
