import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-test-tow',
  templateUrl: './test-tow.component.html',
  styleUrls: ['./test-tow.component.scss', '../layouts/layouts.component.scss'],
})
export class TestTowComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  conect: boolean | undefined;

  About: boolean | undefined;

  creter: boolean | undefined;

  Langouge: boolean | undefined;

  Skils: boolean | undefined;

  hero: boolean | undefined;

  showconect() {
    this.conect = true;
  }

  showAbout() {
    this.About = true;
  }

  showcreter() {
    this.creter = true;
  }

  showSkils() {
    this.Skils = true;
  }
  showLangouge() {
    this.Langouge = true;
  }
  showhero() {
    this.hero = true;
  }
}
