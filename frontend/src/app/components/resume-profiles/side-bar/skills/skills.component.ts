import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', '../../style/main.scss'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  Skils: boolean | undefined;

  showSkils() {
    this.Skils = true;
  }
}





// import {NgbModal,NgbModalConfig,ModalDismissReasons,}from '@ng-bootstrap/ng-bootstrap';


//   constructor(private ms: NgbModal) {}
//   ngOnInit(): void {}
//   open_contact_form(content: any) {
//     this.ms.open(content, { centered: true, size: 'lg' });
//   }
