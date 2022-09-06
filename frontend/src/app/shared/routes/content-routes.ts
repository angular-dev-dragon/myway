import { Routes } from '@angular/router'

export const content: Routes = [
  {
    path: 'daliljob',
    loadChildren: () =>
      import('../../components/daliljobe/daliljobe.module').then(
        (m) => m.DaliljobeModule,
      ),
  },

  {
    path: '',
    loadChildren: () =>
      import('../../components/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule,
      ),
  },

  {
    path: 'Candidats',
    loadChildren: () =>
      import('../../components/competences/condida-c/condida-c.module').then(
        (m) => m.CondidaCModule,
      ),
  },

  {
    path: 'recruteurs',
    loadChildren: () =>
      import('../../components/recruiter/recruiter.module').then(
        (m) => m.RecruiterModule,
      ),
  },
  {
    path: 'offres',
    loadChildren: () =>
      import('./../../components/offres/offres.module').then(
        (m) => m.OffresModule,
      ),
  },

  {
    path: 'resume-profiles',
    loadChildren: () =>
      import('../../components/resume-profiles/resume-profiles.module').then(
        (m) => m.ResumeProfilesModule,
      ),
  },

  {
    path: 'rubrique',
    loadChildren: () =>
      import('../../components/rubrique-article/rubrique-post.module').then(
        (m) => m.RubriquePostModule,
      ),
  },
  {
    path: 'info-pratique',
    loadChildren: () =>
      import('../../components/info-pratique/info-pratique.module').then(
        (m) => m.InfoPratiqueModule,
      ),
  },
  {
    path: 'espace-communautaire',
    loadChildren: () =>
      import(
        '../../components/espace-communautaire/espace-communautaire.module'
      ).then((m) => m.EspaceCommunautaireModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('../../components/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'competences',
    loadChildren: () =>
      import('../../components/competences/competences.module').then(
        (m) => m.CompetencesModule,
      ),
  },
  {
    path: 'metiers',

    loadChildren: () =>
      import('../../components/metiers/metiers.module').then(
        (m) => m.MetiersModule,
      ),
  },
  {
    path: 'quiz',

    loadChildren: () =>
      import('../../components/quiz/quiz.module').then((m) => m.QuizModule),
  },
  {
    path: 'evenement',

    loadChildren: () =>
      import('../../components/evenement/evenement.module').then(
        (m) => m.EvenementModule,
      ),
  },

  {
    path: 'wishList',
    loadChildren: () =>
      import('../../components/list-favoris/wishList.module').then(
        (m) => m.WishListModule,
      ),
  },
  // {
  //   path: 'liens-utiles',
  //   loadChildren: () =>
  //     import('../../components/info-pratique/info-pratique.module').then(
  //       (m) => m.LiensUtilesModule,
  //     ),
  // },
  // {
  //   path: 'adresses-utiles',
  //   loadChildren: () =>
  //     import('../../components/adresses-utiles/info-pratique.module').then(
  //       (m) => m.AdressesUtilesModume,
  //     ),
  // },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'dashboard',
  // },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   data: {
  //     title: 'titles.dash',
  //     breadcrumb: 'titles.dash',
  //   },
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'profile',
  //   loadChildren: () =>
  //     import('../../components/profile/profile.module').then(
  //       (m) => m.ProfileModule
  //     ),
  // },
  // {
  //   path: 'test',
  //   component: TestComponent,
  //   data: {
  //     title: 'titles.test',
  //     breadcrumb: 'titles.test',
  //   },
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'gestion',
  //   children: [
  //     {
  //       path: 'acteurs',
  //       loadChildren: () =>
  //         import('../../components/gestion-acteur/gestion-acteur.module').then(
  //           (m) => m.GestionActeurModule
  //         ),
  //     },
  //     {
  //       path: 'groups',
  //       loadChildren: () =>
  //         import('../../components/gestion-group/gestion-group.module').then(
  //           (m) => m.GestionGroupModule
  //         ),
  //     },
  //     {
  //       path: 'users',
  //       loadChildren: () =>
  //         import('../../components/gestion-users/gestion-users.module').then(
  //           (m) => m.GestionUsersModule
  //         ),
  //     },
  //     {
  //       path: 'traces',
  //       loadChildren: () =>
  //         import(
  //           '../../components/gestion-trace-fournisseur/gestion-trace-fournisseur.module'
  //         ).then((m) => m.GestionTraceFournisseurModule),
  //     },
  //     {
  //       path: 'media',
  //       loadChildren: () =>
  //         import('../../components/gestion-media/gestion-media.module').then(
  //           (m) => m.GestionMediaModule
  //         ),
  //     },
  //   ],
  // },
  // {
  //   path: 'PageNotFound',
  //   component: Page404Component,
  //   canActivate: [AuthGuard],
  //   data: {
  //     title: '',
  //   },
  // },
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   redirectTo: 'PageNotFound',
  // },
]
