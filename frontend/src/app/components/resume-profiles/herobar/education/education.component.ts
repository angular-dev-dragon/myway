import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'Education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss', '../../style/main.scss'],
})
export class EducationComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  Edcucation: boolean | undefined;

  showEdcucation() {
    this.Edcucation = true;
  }
}
