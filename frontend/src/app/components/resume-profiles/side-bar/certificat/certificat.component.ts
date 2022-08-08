import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'Certificat',
  templateUrl: './certificat.component.html',
  styleUrls: ['./certificat.component.scss', '../../style/main.scss'],
})
export class CertificatComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  t: boolean | undefined;
  showt() {
    this.t = true;
  }
}
