import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaliljobeRoutingModule } from './daliljobe-routing.module';

import { ViewProjectComponent } from './view-project/view-project.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ViewProjectComponent,
   
  ],
  imports: [
    CommonModule,
    DaliljobeRoutingModule,
    SharedModule

  ]
})
export class DaliljobeModule { }
