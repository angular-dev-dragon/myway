import { SharedModule } from 'src/app/shared/shared.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CondidaCRoutingModule } from './condida-c-routing.module'
import { CListComponent } from './c-list/c-list.component'
import { CDetailsComponent } from '../../../shared/components/c-details/c-details.component'

@NgModule({
  declarations: [CListComponent],
  imports: [SharedModule, CommonModule, CondidaCRoutingModule],
  exports: [],
})
export class CondidaCModule {}
