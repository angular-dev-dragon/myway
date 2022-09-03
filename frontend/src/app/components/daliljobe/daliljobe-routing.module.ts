
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { viewport } from '@popperjs/core';
import { ViewProjectComponent } from './view-project/view-project.component';

const routes: Routes = [
  {
    path: '',
    component: ViewProjectComponent,
    children: [
      {
        path: 'offres',
        component: ViewProjectComponent,
      },
      {
        path: 'candidats',
        component: ViewProjectComponent,
      },
      {
        path: 'demandes-specifiques',
        component: ViewProjectComponent,
      },
      {
        path: 'condidatures-spontannes',
        component: ViewProjectComponent,
      },
      {
        path: 'recruteurs',
        component: ViewProjectComponent,
      },
      {
        path: 'rubrique-details',
        component: ViewProjectComponent,
      },
      {
        path: 'adresses-utiles',
        component: ViewProjectComponent,
      },
      {
        path: 'liens-utiles',
        component: ViewProjectComponent,
      },

      {
        path: 'metier',
        component: ViewProjectComponent,
      },
      {
        path: 'quiz',
        component: ViewProjectComponent,
      },
      {
        path: 'evenement',
        component: ViewProjectComponent,
      },
      {
        path: 'documents',
        component: ViewProjectComponent,
      },
      {
        path: 'forums',
        component: ViewProjectComponent,
      },
      {
        path: 'sondage',
        component: ViewProjectComponent,
      },
      {
        path: 'temoignage',
        component: ViewProjectComponent,
      },
      {
        path: 'bloggers',
        component: ViewProjectComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaliljobeRoutingModule { }


