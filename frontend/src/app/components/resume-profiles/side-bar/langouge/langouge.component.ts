import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'Langouge',
  templateUrl: './langouge.component.html',
  styleUrls: ['./langouge.component.scss', '../../style/main.scss'],
})
export class LangougeComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  Langouge: boolean | undefined;
  showLangouge() {
    this.Langouge = true;
  }
}



// import {NgbModal,NgbModalConfig,ModalDismissReasons,}from '@ng-bootstrap/ng-bootstrap';


//   constructor(private ms: NgbModal) {}
//   ngOnInit(): void {}
//   open_contact_form(content: any) {
//     this.ms.open(content, { centered: true, size: 'lg' });
//   }
