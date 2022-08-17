
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatsRoutingModule } from './candidats-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListCondidatsComponent } from './list-condidats/list-condidats.component';
import { CondidatDetailsComponent } from './condidat-details/condidat-details.component';
import { ResumeProfilesModule } from '../resume-profiles/resume-profiles.module';


@NgModule({
  declarations: [


     ListCondidatsComponent,
       CondidatDetailsComponent,
  ],
  imports: [CommonModule, CandidatsRoutingModule, SharedModule, RouterModule,ResumeProfilesModule ],
  exports: [CandidatsRoutingModule],
})
export class CandidatsModule {}
