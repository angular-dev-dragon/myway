import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from 'src/app/shared/shared.module'
import { ListRecruiterComponent } from './list-recruiter/list-recruiter.component'
import { RecruiterRoutingModule } from './recruiter-routing.module'

@NgModule({
  declarations: [ListRecruiterComponent],
  imports: [SharedModule],
  exports: [ListRecruiterComponent, RecruiterRoutingModule],
})
export class RecruiterModule {}
