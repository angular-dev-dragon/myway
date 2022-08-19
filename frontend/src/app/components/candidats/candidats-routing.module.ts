import { CondidatDetailsComponent } from './condidat-details/condidat-details.component';
import { ListCondidatsComponent } from './list-condidats/list-condidats.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: ListCondidatsComponent,
  },
  {
    path: 'list-condidats',
    component: ListCondidatsComponent,
  },
  {
    path: 'condida-details',
    component: CondidatDetailsComponent,
  },
  //   // children: [
  //     // {
  //   path: '',
  //   redirectTo: 'presentation',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'presentation',
  //   component: PresentationComponent,
  // },

  // {
  //   path: 'avis',
  //   component: AvisComponent,
  // },
  // {
  //   path: 'membre',
  //   component: MembreComponent,
  // },
  // {
  //   path: 'entretien',
  //   component: EntretienComponent,
  // },
  // {
  //   path: 'gallerie',
  //   component: GalleryComponent,
  // },
  //   ],
  // },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatsRoutingModule {}
