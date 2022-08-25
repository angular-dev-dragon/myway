import { NgModule } from '@angular/core'

import { OffresRoutingModule } from './offres-routing.module'
import { DetailOffresComponent } from './detail-offres/detail-offres.component'

import { RouterModule } from '@angular/router'
import { SharedModule } from 'src/app/shared/shared.module';
import { ListOffresEmploiComponent } from './list-offres-emploi/list-offres-emploi.component'

@NgModule({
  declarations: [DetailOffresComponent, ListOffresEmploiComponent],
  imports: [SharedModule, RouterModule],
  exports: [OffresRoutingModule],
})
export class OffresModule {}
