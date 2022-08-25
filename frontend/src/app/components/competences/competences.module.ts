import { SharedModule } from 'src/app/shared/shared.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CompetenceRoutingModule } from './competences-routing.module'
import { ListCondidaturesSpontaneesComponent } from './list-condidatures-spontanees/list-condidatures-spontanees.component';
import { DetailsCondidatureSpontaneeComponent } from './details-condidature-spontanee/details-condidature-spontanee.component';
import { ListDemandesSpecifiquesComponent } from './list-demandes-specifiques/list-demandes-specifiques.component';
import { DetailsDemandesSpecifiquesComponent } from './details-demandes-specifiques/details-demandes-specifiques.component'

@NgModule({
  declarations: [ListCondidaturesSpontaneesComponent, DetailsCondidatureSpontaneeComponent, ListDemandesSpecifiquesComponent, DetailsDemandesSpecifiquesComponent],
  imports: [SharedModule, CommonModule, CompetenceRoutingModule],
  exports: [],
})
export class CompetencesModule {}
