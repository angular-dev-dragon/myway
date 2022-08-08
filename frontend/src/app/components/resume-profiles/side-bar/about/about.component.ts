import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'About',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../../style/main.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  About: boolean | undefined;
  showAbout() {
    this.About = true;
  }
}
