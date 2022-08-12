import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'Expectations',
  templateUrl: './expectations.component.html',
  styleUrls: ['./expectations.component.scss', '../../style/main.scss'],
})
export class ExpectationsComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  creter: boolean | undefined;

  showcreter() {
    this.creter = true;
  }
}


// import {NgbModal,NgbModalConfig,ModalDismissReasons,}from '@ng-bootstrap/ng-bootstrap';


//   constructor(private ms: NgbModal) {}
//   ngOnInit(): void {}
//   open_contact_form(content: any) {
//     this.ms.open(content, { centered: true, size: 'lg' });
//   }
