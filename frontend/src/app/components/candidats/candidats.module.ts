import { PresentationComponent } from './presentation/presentation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatsRoutingModule } from './candidats-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


import { DetailsRecruiterComponent } from './details-recruiter/details-recruiter.component';
import { ListRecruiterComponent } from './list-recruiter/list-recruiter.component';


@NgModule({
  declarations: [

    DetailsRecruiterComponent,
    ListRecruiterComponent,PresentationComponent
  ],
  imports: [CommonModule, CandidatsRoutingModule, SharedModule, RouterModule],
  exports: [CandidatsRoutingModule],
})
export class CandidatsModule {}
