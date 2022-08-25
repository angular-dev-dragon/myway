import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DetailsCondidatureSpontaneeComponent } from './details-condidature-spontanee/details-condidature-spontanee.component'
import { DetailsDemandesSpecifiquesComponent } from './details-demandes-specifiques/details-demandes-specifiques.component'
import { ListCondidaturesSpontaneesComponent } from './list-condidatures-spontanees/list-condidatures-spontanees.component'
import { ListDemandesSpecifiquesComponent } from './list-demandes-specifiques/list-demandes-specifiques.component'

const routes: Routes = [
  {
    path: 'list-condidatures-spontannes',
    component: ListCondidaturesSpontaneesComponent,
  },
  {
    path: 'list-condidatures-spontannes',
    component: ListCondidaturesSpontaneesComponent,
  },
  {
    path: 'details-condidature-spontanee',
    component: DetailsCondidatureSpontaneeComponent,
  },

  {
    path: 'list-demandes-specifiques',
    component: ListDemandesSpecifiquesComponent,
  },
  {
    path: 'details-demandes-specifiques',
    component: DetailsDemandesSpecifiquesComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompetenceRoutingModule {}
