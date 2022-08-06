import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { ResumeProfilesRoutingModule } from './resume-profiles-routing.module';



import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutsComponent } from './layouts/layouts.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { MainBarComponent } from './main-bar/main-bar.component';






@NgModule({
  declarations: [
    LayoutsComponent, LeftSideBarComponent, RightSideBarComponent, MainBarComponent,],
  imports: [
    SharedModule,
    RouterModule,


  ],
  exports: [
 
    ResumeProfilesRoutingModule,

  ],
})
export class ResumeProfilesModule {}
