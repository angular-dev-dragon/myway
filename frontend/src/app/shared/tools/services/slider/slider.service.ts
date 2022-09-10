
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  slider: any;
  constructor() {
        this.slider = [
          {
            name: 'slide for hero section in the landing page',
            id: '1',
            details: {
              width: '100%',
              height: '85vh',
              time_btwn_slide: 5000,
              Arrows_btns: true,
              keybourd_arrows_for_switching_slides: true,
              footer: false,
              animation: true,
              info: [
                {
                  url: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg',
                  alt: '1',
                  title: 'Slider 1',
                  p: 'heder 1 text',
                  id: '1',
                },
                {
                  url: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg',
                  alt: '2',
                  title: 'Slider3',
                  p: 'heder 1 text',
                  id: '2',
                },
                {
                  url: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg',
                  alt: '3',
                  title: 'Slider 2',
                  p: 'sheder 2 text',
                  id: '3',
                },
                {
                  url: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg',
                  alt: '1',
                  title: 'Slider 1',
                  p: 'heder 1 text',
                  id: '1',
                },
                {
                  url: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg',
                  alt: '2',
                  title: 'Slider3',
                  p: 'heder 1 text',
                  id: '2',
                },
                {
                  url: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg',
                  alt: '3',
                  title: 'Slider 2',
                  p: 'sheder 2 text',
                  id: '3',
                },
              ],
            },
          },
          {
            name: 'test',
            id: '14',
            details: {
              width: '50%',
              height: '85vh',
              time_btwn_slide: 5000,
              Arrows_btns: true,
              keybourd_arrows_for_switching_slides: true,
              footer: false,
              animation: true,
              info: [
                {
                  url: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg',
                  alt: '1',
                  title: 'Slider 1',
                  p: 'heder 1 text',
                  id: '1',
                },
                {
                  url: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg',
                  alt: '2',
                  title: 'Slider3',
                  p: 'heder 1 text',
                  id: '2',
                },
                {
                  url: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg',
                  alt: '3',
                  title: 'Slider 2',
                  p: 'sheder 2 text',
                  id: '3',
                },
                {
                  url: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg',
                  alt: '1',
                  title: 'Slider 1',
                  p: 'heder 1 text',
                  id: '1',
                },
                {
                  url: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg',
                  alt: '2',
                  title: 'Slider3',
                  p: 'heder 1 text',
                  id: '2',
                },
                {
                  url: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg',
                  alt: '3',
                  title: 'Slider 2',
                  p: 'sheder 2 text',
                  id: '3',
                },
              ],
            },
          },
        ];

  }




  getallslides() {
    return this.slider;
  }
  find_slide_by_name(name: string) {
    return this.slider.find((slide: any) => slide.name === name);
  }
  find_slide_by_id(id: string) {
    return this.slider.find((slide: any) => slide.id === id);
  }


}
