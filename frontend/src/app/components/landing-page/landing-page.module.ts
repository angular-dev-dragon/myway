import { SharedModule } from 'src/app/shared/shared.module';

import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LayoutsComponent } from './layouts/layouts.component';
import { NgModule } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowServesLandingPageCardsComponent } from './show-serves-landing-page-cards/show-serves-landing-page-cards.component';







// @NgModule({
//   imports: [BrowserModule, NgbModule],
//   declarations: [NgbdCarouselNavigation],
//   exports: [NgbdCarouselNavigation],
//   bootstrap: [NgbdCarouselNavigation],
// })

@NgModule({
  declarations: [
    LayoutsComponent,
    HeroSectionComponent,
    ShowServesLandingPageCardsComponent,
  
  ],

  imports: [SharedModule, CommonModule, LandingPageRoutingModule],
  exports: [LandingPageRoutingModule],
})
export class LandingPageModule {}
