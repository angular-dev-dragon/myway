import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from 'src/app/shared/shared.module'
import { ListRecruiterComponent } from './list-recruiter/list-recruiter.component'
import { RecruiterRoutingModule } from './recruiter-routing.module'
import { DetailsRecruiterComponent } from './details-recruiter/details-recruiter.component'
import { RouterModule } from '@angular/router'
import { PresentationComponent } from './presentation/presentation.component'
import { FaqComponent } from './faq/faq.component'
import { AvisComponent } from './avis/avis.component'
import { MembreComponent } from './membre/membre.component'
import { EntretienComponent } from './entretien/entretien.component'
import { GalleryComponent } from './gallery/gallery.component'
import { CondidatureSpontaneeComponent } from './condidature-spontanee/condidature-spontanee.component'
import { OffreEmploiRecruiterComponent } from './offre-emploi-recruiter/offre-emploi-recruiter.component';
import { CabinetsRecrutementsComponent } from './cabinets-recrutements/cabinets-recrutements.component'

@NgModule({
  declarations: [
    ListRecruiterComponent,
    DetailsRecruiterComponent,
    PresentationComponent,
    FaqComponent,
    AvisComponent,
    MembreComponent,
    EntretienComponent,
    GalleryComponent,
    CondidatureSpontaneeComponent,
    OffreEmploiRecruiterComponent,
    CabinetsRecrutementsComponent,
  ],
  imports: [SharedModule, RouterModule],
  exports: [RecruiterRoutingModule],
})
export class RecruiterModule {}
