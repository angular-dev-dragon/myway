
import {  Component, OnInit } from '@angular/core';

// import { NgbModal, NgbModalConfig, ModalDismissReasons, } from '@ng-bootstrap/ng-bootstrap';

import {MessageService} from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import { ContactFormComponent } from './contact-form/contact-form.component';



@Component({
  selector: 'Contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../../style/main.scss'],
    providers: [DialogService, MessageService]
})
export class ContactComponent implements OnInit {
  constructor(
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

}








