import { SharedModule } from 'src/app/shared/shared.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CompetenceRoutingModule } from './competences-routing.module'
import { ListCondidaturesSpontaneesComponent } from './list-condidatures-spontanees/list-condidatures-spontanees.component'

@NgModule({
  declarations: [ListCondidaturesSpontaneesComponent],
  imports: [SharedModule, CommonModule, CompetenceRoutingModule],
  exports: [],
})
export class CompetencesModule {}
