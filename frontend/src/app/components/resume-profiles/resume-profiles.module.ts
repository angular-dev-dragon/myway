import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { ResumeProfilesRoutingModule } from './resume-profiles-routing.module';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { TestComponent } from './test/test.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [MainProfileComponent, SuggestionComponent, TestComponent],
  imports: [ SharedModule, RouterModule],
  exports: [
    MainProfileComponent,
    SuggestionComponent,
    ResumeProfilesRoutingModule,
  ],
})
export class ResumeProfilesModule {}
