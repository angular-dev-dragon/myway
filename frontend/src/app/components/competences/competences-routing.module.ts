import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DetailsDemandesSpecifiquesComponent } from './details-demandes-specifiques/details-demandes-specifiques.component'
import { ListCondidaturesSpontaneesComponent } from './list-condidatures-spontanees/list-condidatures-spontanees.component'
import { ListDemandesSpecifiquesComponent } from './list-demandes-specifiques/list-demandes-specifiques.component'

const routes: Routes = [
  {
    path: 'list-condidatures-spontannes',
    component: ListCondidaturesSpontaneesComponent,
  },



  {
    path: 'list-demandes-specifiques/:id',
    component: ListDemandesSpecifiquesComponent,
  },
  {
    path: 'details-demandes-specifiques/:id',
    component: DetailsDemandesSpecifiquesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompetenceRoutingModule {}
