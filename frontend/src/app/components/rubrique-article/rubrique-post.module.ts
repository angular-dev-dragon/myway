import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from 'src/app/shared/shared.module'
import { RubriquePostRoutingModule } from './rubrique-post-routing.module'
import { DetailsArticleComponent } from './details-article/details-article.component'
import { DetailsRubriqueComponent } from './details-rubrique/details-rubrique.component'

@NgModule({
  declarations: [DetailsArticleComponent, DetailsRubriqueComponent],
  imports: [SharedModule, RouterModule],
  exports: [RubriquePostRoutingModule],
})
export class RubriquePostModule {}
