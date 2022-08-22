import { SharedModule } from 'src/app/shared/shared.module';

import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LayoutsComponent } from './layouts/layouts.component';
import { NgModule } from '@angular/core';






@NgModule({
  
  declarations: [LayoutsComponent],

  imports: [

    SharedModule,
    CommonModule,

    LandingPageRoutingModule,

  ],
})
export class LandingPageModule {}
