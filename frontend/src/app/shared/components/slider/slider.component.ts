

import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app_app_slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() id: string = '1';
  @Input() width: string = '20%';
  @Input() height: string = '85vh';
  @Input() time_btwn_slide: number = 5000;
  @Input() Arrows_btns: boolean = true;
  @Input() keybourd_arrows_for_switching_slides: boolean = true;
  @Input() Arrows: boolean = true;
  @Input() footer = false;
  @Input() animation: boolean = true;
  @Input() info: any[] = [

  ];

  // images = [
  //   {
  //     url: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg',
  //   },
  // ];

  constructor() // config: NgbCarouselConfig
  {
    // customize default values of carousels used by this component tree
    // config.showNavigationArrows = true;
    // config.showNavigationIndicators = true;
    console.log(this.info);
  }
  ngOnInit(): void {
    console.log(this.info);
  }
}

