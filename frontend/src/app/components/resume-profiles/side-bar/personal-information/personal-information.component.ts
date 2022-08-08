import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'Personal-Informations',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss', '../../style/main.scss'],
})
export class PersonalInformationComponent implements OnInit {
  // info: boolean | undefined;
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  // showinfo() {
  //   this.info = true;
  // }
}
