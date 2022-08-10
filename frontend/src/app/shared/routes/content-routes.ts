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
]
