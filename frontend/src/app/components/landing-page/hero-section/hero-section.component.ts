import { Component, OnInit } from '@angular/core';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { SliderService } from 'src/app/shared/Services/slider/slider.service';
@Component({
  selector: 'landing-page-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  providers: [NgbCarouselConfig],
})
export class HeroSectionComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  slide_info:any;
  constructor(config: NgbCarouselConfig, public slide: SliderService) {

   this.slide_info = slide.find_slide_by_name(
     'slide for hero section in the landing page'
   );



    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {}
}
