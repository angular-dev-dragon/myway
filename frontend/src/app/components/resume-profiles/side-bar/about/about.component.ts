import { Component, OnInit } from '@angular/core';
import {NgbModal,NgbModalConfig,ModalDismissReasons,}from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'About',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../../style/main.scss'],
})
export class AboutComponent implements OnInit {

  constructor(private ms: NgbModal) {}
  ngOnInit(): void { }

  open_about_from(content: any) {
    this.ms.open(content, { centered: true, size: 'lg' });
  }
}
