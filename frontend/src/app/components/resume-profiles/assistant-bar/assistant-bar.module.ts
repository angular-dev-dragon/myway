import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationBarComponent } from './pagination-bar/pagination-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutsComponent } from './layouts/layouts.component';


@NgModule({
  declarations: [PaginationBarComponent, LayoutsComponent],
  imports: [CommonModule, SharedModule],
  exports: [LayoutsComponent],
})
export class AssistantBarModule {}
