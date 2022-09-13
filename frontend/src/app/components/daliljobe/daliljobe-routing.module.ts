import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { viewport } from '@popperjs/core'
import { FaqPageComponent } from 'src/app/shared/components/faq-page/faq-page.component'
import { DetailsGuideComponent } from '../guides/details-guide/details-guide.component'
import { DetailsArticleComponent } from '../rubrique-article/details-article/details-article.component'
import { ViewProjectComponent } from './view-project/view-project.component'




const routes: Routes = [


  {
    path: '',
    component: ViewProjectComponent,
    children: [
      //////////////////////////////
      {
        path: 'offres-emploi',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      {
        path: 'offres-de-stage',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      {
        path: 'offres-alternance',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      {
        path: 'offres-extra',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      ///////////////////////////////////////
      {
        path: 'candidats',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      {
        path: 'demandes-specifiques',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      {
        path: 'condidatures-spontannes',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      /////////////////////////////////////////////
      {
        path: 'recruteurs',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      {
        path: 'etablissements-formation',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      {
        path: 'cabinets-recrutement',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      {
        path: 'associations-insertion-economique',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      // ///////////////////////////////
      {
        path: 'conseils-pratique',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      {
        path: 'adresses-utiles',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      {
        path: 'liens-utiles',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      {
        path: 'documents',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
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
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      // //////////////////////////////////////////////////////////////////////////////////////////////////
      {
        path: 'decouverte-des-metiers',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      {
        path: 'soft-skills',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      {
        path: 'hard-skills',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      {
        path: 'metiers-pour-vous',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      {
        path: 'quiz',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },


      {
        path: 'evenement',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      {
        path: 'actualites-emploi',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      //////////////////////////////////////////////////////////////////////////////////////////////////
      {
        path: 'forums',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      {
        path: 'sondage',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      {
        path: 'temoignage',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      {
        path: 'bloggers',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
      {
        path: 'undfind',
        component: ViewProjectComponent,
        loadChildren: () => import('./delials/delials.module').then((m) => m.DelialsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaliljobeRoutingModule {}
