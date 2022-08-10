import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'Experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss', '../../style/main.scss'],
})
export class ExperienceComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  Experince: boolean | undefined;

  showExperince() {
    this.Experince = true;
  }
}
