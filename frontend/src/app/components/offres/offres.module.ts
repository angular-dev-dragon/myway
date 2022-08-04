import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffresRoutingModule } from './offres-routing.module';
import { ListOffresComponent } from './list-offres/list-offres.component';
import { DetailOffresComponent } from './detail-offres/detail-offres.component';


@NgModule({
  declarations: [
    ListOffresComponent,
    DetailOffresComponent
  ],
  imports: [
    CommonModule,
    OffresRoutingModule
  ]
})
export class OffresModule { }
