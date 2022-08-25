import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MetiersRoutingModule } from './metiers-routing.module'
import { ListMetiersComponent } from './list-metiers/list-metiers.component'
import { DetailsMetierComponent } from './details-metier/details-metier.component'

import { RouterModule } from '@angular/router'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [ListMetiersComponent, DetailsMetierComponent],
  imports: [RouterModule, SharedModule],
  exports: [MetiersRoutingModule],
})
export class MetiersModule {}
