import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'Hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss', '../../style/main.scss'],
})
export class HobbiesComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  hobbie: boolean | undefined;
  showhobbie() {
    this.hobbie = true;
  }
}
