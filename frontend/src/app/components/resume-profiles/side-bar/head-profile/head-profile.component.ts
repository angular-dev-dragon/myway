import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem, MessageService } from 'primeng/api';
@Component({
  selector: 'Head-Profile',
  templateUrl: './head-profile.component.html',
  styleUrls: ['./head-profile.component.scss', '../../style/main.scss'],
})
export class HeadProfileComponent implements OnInit {
  constructor(

    private primengConfig: PrimeNGConfig,
    private messageService: MessageService

  ){}

  hero: boolean | undefined;

  showhero() {
    this.hero = true;
  }



  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
