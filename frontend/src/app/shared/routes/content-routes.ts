import { Routes } from '@angular/router'

export const content: Routes = [
  {
    path: 'recruteur',
    loadChildren: () =>
      import('../../components/recruiter/recruiter.module').then(
        (m) => m.RecruiterModule,
      ),
  },
  {
    path: 'offres',
    loadChildren: () =>
      import('../../components/recruiter/recruiter.module').then(
        (m) => m.RecruiterModule,
      ),
  },
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
