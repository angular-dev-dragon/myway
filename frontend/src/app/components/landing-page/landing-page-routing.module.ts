
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { LayoutsComponent } from './layouts/layouts.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
