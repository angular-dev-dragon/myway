import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from 'src/app/shared/shared.module'
import { ConseilsPratiqueComponent } from './conseils-pratique/conseils-pratique.component'
import { InfoPratiqueRoutingModule } from './info-pratique-routing.module';
import { DetailsArticleComponent } from './details-article/details-article.component';
import { TextDeLoisComponent } from './text-de-lois/text-de-lois.component'

@NgModule({
  declarations: [ConseilsPratiqueComponent, DetailsArticleComponent, TextDeLoisComponent],
  imports: [SharedModule, RouterModule],
  exports: [InfoPratiqueRoutingModule],
})
export class InfoPratiqueModule {}
