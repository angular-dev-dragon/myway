import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'src/app/shared/shared.module'
import { GuideRoutingModule } from './guide.routing.module'
import { DetailsGuideComponent } from './details-guide/details-guide.component'

@NgModule({
  declarations: [DetailsGuideComponent],
  imports: [CommonModule, GuideRoutingModule, SharedModule],
})
export class GuideEmploiModule {}
