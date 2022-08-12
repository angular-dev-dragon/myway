import { Component, OnInit } from '@angular/core';
import {NgbModal,NgbModalConfig,ModalDismissReasons,}from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'Contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../../style/main.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private ms: NgbModal) {}

  ngOnInit(): void {}

  conect: boolean | undefined;

  open_contact_form(content: any) {
    this.ms.open(content, { centered: true, size: 'xl' });
  }
}
