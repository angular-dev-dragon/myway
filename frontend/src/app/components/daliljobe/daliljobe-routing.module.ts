import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ViewDetialsComponent } from '../detials/view-detials/view-detials.component'
import { ViewProjectComponent } from './view-project/view-project.component'




const routes: Routes = [
  {
    path: 'details',
    component:ViewDetialsComponent,
    children: [
      ////////////////////////////
      {
        path: 'offres-emploi/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },

      {
        path: 'offres-de-stage/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      {
        path: 'offres-alternance/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      {
        path: 'offres-extra/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      ///////////////////////////////////////
      {
        path: 'candidats/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      {
        path: 'demandes-specifiques/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      {
        path: 'condidatures-spontannes/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      /////////////////////////////////////////////
      {
        path: 'recruteurs/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      {
        path: 'etablissements-formation/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      {
        path: 'cabinets-recrutement/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      {
        path: 'associations-insertion-economique/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      // ///////////////////////////////
      {
        path: 'conseils-pratique/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      {
        path: 'adresses-utiles/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      {
        path: 'liens-utiles/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      {
        path: 'documents/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },

      {
        path: 'legislations-et-textes-lois/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      // //////////////////////////////////////////////////////////////////////////////////////////////////
      {
        path: 'decouverte-des-metiers/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      {
        path: 'soft-skills/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      {
        path: 'hard-skills/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      {
        path: 'metiers-pour-vous/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      {
        path: 'quiz/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },

      {
        path: 'evenement/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      {
        path: 'actualites-emploi/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      //////////////////////////////////////////////////////////////////////////////////////////////////
      {
        path: 'forums/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      {
        path: 'sondage/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      {
        path: 'temoignage/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
      {
        path: 'bloggers/:id',
        loadChildren: () =>
          import('../detials/detials.module').then((m) => m.DetialsModule),
      },
    ],
  },
  {
    path: 'list',
    component: ViewProjectComponent,
    children: [
      ////////////////////////////
      {
        path: 'offres-emploi',
        component: ViewProjectComponent,
      },

      {
        path: 'offres-de-stage',
        component: ViewProjectComponent,
      },
      {
        path: 'offres-alternance',
        component: ViewProjectComponent,
      },
      {
        path: 'offres-extra',
        component: ViewProjectComponent,
      },
      ///////////////////////////////////////
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
      /////////////////////////////////////////////
      {
        path: 'recruteurs',
        component: ViewProjectComponent,
      },
      {
        path: 'etablissements-formation',
        component: ViewProjectComponent,
      },
      {
        path: 'cabinets-recrutement',
        component: ViewProjectComponent,
      },
      {
        path: 'associations-insertion-economique',
        component: ViewProjectComponent,
      },
      // ///////////////////////////////
      {
        path: 'conseils-pratique',
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
        path: 'documents',
        component: ViewProjectComponent,
      },
      {
        path: 'guides-emploi',

        loadChildren: () =>
          import('../../components/guides/guide.module').then(
            (m) => m.GuideEmploiModule
          ),
      },
      {
        path: 'legislations-et-textes-lois',
        component: ViewProjectComponent,
      },
      // //////////////////////////////////////////////////////////////////////////////////////////////////
      {
        path: 'decouverte-des-metiers',
        component: ViewProjectComponent,
      },
      {
        path: 'soft-skills',
        component: ViewProjectComponent,
      },
      {
        path: 'hard-skills',
        component: ViewProjectComponent,
      },
      {
        path: 'metiers-pour-vous',
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
        path: 'actualites-emploi',
        component: ViewProjectComponent,
      },
      //////////////////////////////////////////////////////////////////////////////////////////////////
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
      {
        path: 'undfind',
        component: ViewProjectComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaliljobeRoutingModule {}
