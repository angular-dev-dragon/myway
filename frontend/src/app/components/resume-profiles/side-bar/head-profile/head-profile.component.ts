import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { HeaderProfileFromComponent } from './header-profile-from/header-profile-from.component';

@Component({
  selector: 'Head-Profile',
  templateUrl: './head-profile.component.html',
  styleUrls: ['./head-profile.component.scss', '../../style/main.scss'],
  providers: [DialogService, MessageService],
})
export class HeadProfileComponent implements OnInit {
  constructor(
    public dialogService: DialogService,
    public messageService: MessageService
  ) {}

  ngOnInit(): void {}

  ref: DynamicDialogRef | undefined;

  open_header_profile_form() {
    this.ref = this.dialogService.open(HeaderProfileFromComponent, {
      header: 'Choose a Product',
      width: '74%',
      contentStyle: { 'max-height': '100%', overflow: 'auto' },
      baseZIndex: 10000,
    });
  }
}





// PERNENT================================================================  ===============================================================================================================================

// providers: [DialogService, MessageService];

// constructor(
//     public dialogService: DialogService,
//     public messageService: MessageService
//   ) {}

//   ngOnInit(): void {}

//   ref: DynamicDialogRef | undefined;

//   show() {
//     this.ref = this.dialogService.open(ContactFormComponent, {
//       header: 'Choose a Product',
//       width: '70%',
//       contentStyle: { 'max-height': '500px', overflow: 'auto' },
//       baseZIndex: 10000,
//     });

//   }
// ===========================================================================================================================================================================================

// Child ===========================================================================================================================  =========
// save_contact_from();

// import { DynamicDialogRef } from 'primeng/dynamicdialog';

// private ref: DynamicDialogRef
//  this.ref.close();

//==============================================================================================================================











