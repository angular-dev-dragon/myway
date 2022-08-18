import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CondidaListComponent } from './condida-list/condida-list.component';
import { CondidaDetailsComponent } from './condida-details/condida-details.component';
import { RouterModule } from '@angular/router'
import { SharedModule } from 'src/app/shared/shared.module'
import { CondidaRoutingModule } from './condida-routing.module';



@NgModule({
  declarations: [
    CondidaListComponent,
    CondidaDetailsComponent
  ],
  imports: [  CommonModule,SharedModule, RouterModule],

  exports: [CondidaRoutingModule],
})
export class CondidaModule { }







