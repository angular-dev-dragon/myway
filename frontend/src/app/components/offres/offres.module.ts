import { NgModule } from '@angular/core'

import { OffresRoutingModule } from './offres-routing.module'
import { DetailOffresComponent } from './detail-offres/detail-offres.component'

import { RouterModule } from '@angular/router'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [DetailOffresComponent],
  imports: [SharedModule, RouterModule],
  exports: [OffresRoutingModule],
})
export class OffresModule {}
