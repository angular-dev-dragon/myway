import { ContactFormComponent } from './contact-form/contact-form.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig, ModalDismissReasons, } from '@ng-bootstrap/ng-bootstrap';

import {MessageService} from 'primeng/api';
// import {ProductListDemo} from './productlistdemo';
import {DialogService} from 'primeng/dynamicdialog';
import {DynamicDialogRef} from 'primeng/dynamicdialog';




@Component({
  selector: 'Contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../../style/main.scss'],
    providers: [DialogService, MessageService]
})
export class ContactComponent implements OnInit {
  constructor(
    // private ms: NgbModal
    public dialogService: DialogService,
    public messageService: MessageService
  ) {}

  ngOnInit(): void {}

  ref: DynamicDialogRef | undefined;
 
  show() {
    this.ref = this.dialogService.open(ContactFormComponent, {
      header: 'Choose a Product',
      width: '70%',
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      baseZIndex: 10000,
    });
  }

  // open_contact_form(as: any) {
  //   this.ms.open(as, { centered: true, size: 'lg' });
  // }
}
