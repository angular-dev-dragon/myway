import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AvisComponent } from './avis/avis.component'
import { DetailsRecruiterComponent } from './details-recruiter/details-recruiter.component'
import { EntretienComponent } from './entretien/entretien.component'
import { FaqComponent } from './faq/faq.component'
import { GalleryComponent } from './gallery/gallery.component'
import { ListRecruiterComponent } from './list-recruiter/list-recruiter.component'
import { MembreComponent } from './membre/membre.component'
import { PresentationComponent } from './presentation/presentation.component'

const routes: Routes = [
  {
    path: '',
    component: ListRecruiterComponent,
  },
  {
    path: 'list-recruteur',
    component: ListRecruiterComponent,
  },
  {
    path: 'details-recruteur',
    component: DetailsRecruiterComponent,
    children: [
      {
        path: '',
        redirectTo: 'presentation',
        pathMatch: 'full',
      },
      {
        path: 'presentation',
        component: PresentationComponent,
      },
      {
        path: 'faq',
        component: FaqComponent,
      },
      {
        path: 'avis',
        component: AvisComponent,
      },
      {
        path: 'membre',
        component: MembreComponent,
      },
      {
        path: 'entretien',
        component: EntretienComponent,
      },
      {
        path: 'gallerie',
        component: GalleryComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecruiterRoutingModule {}
