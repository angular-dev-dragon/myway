import { NgModule } from '@angular/core'

import { OffresRoutingModule } from './offres-routing.module'
import { ListOffresComponent } from './list-offres/list-offres.component'
import { DetailOffresComponent } from './detail-offres/detail-offres.component'

import { RouterModule } from '@angular/router'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [ListOffresComponent, DetailOffresComponent],
  imports: [SharedModule, RouterModule],
  exports: [OffresRoutingModule],
})
export class OffresModule {}
