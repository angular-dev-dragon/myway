import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { ResumeProfilesRoutingModule } from './resume-profiles-routing.module';
import { MainProfileComponent } from './main-profile/main-profile.component';


import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [MainProfileComponent,],
  imports: [ SharedModule, RouterModule],
  exports: [
    MainProfileComponent,

    ResumeProfilesRoutingModule,
  ],
})
export class ResumeProfilesModule {}
