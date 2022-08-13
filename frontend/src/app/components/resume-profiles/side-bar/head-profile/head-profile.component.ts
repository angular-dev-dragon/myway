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

  popup_w: number = window.innerWidth;
  f_w: string = '';
  f_h: string = '';
  open_header_profile_form() {
    if (this.popup_w >= 600) {
      this.f_w = '70%';
      this.f_h = '500px';
      if (this.popup_w >= 1500) {
        this.f_w = '65%';
        this.f_h = '520px';
        if (this.popup_w >= 2000) {
          this.f_w = '60%';
          this.f_h = '540px';
          if (this.popup_w >= 2500) {
            this.f_w = '55%';
            this.f_h = '560px';
            if (this.popup_w >= 3000) {
              this.f_w = '52%';
              this.f_h = '580px';
              if (this.popup_w >= 3500) {
                this.f_w = '50%';
                this.f_h = '600px';
                if (this.popup_w >= 4500) {
                  this.f_w = '48%';
                  this.f_h = '650px';
                }
              }
            }
          }
        }
      }
    }
    if (this.popup_w <= 600) {
      this.f_w = '75%';
      this.f_h = '500px';
      if (this.popup_w <= 550) {
        this.f_w = '80%';
        this.f_h = '480px';
        if (this.popup_w <= 500) {
          this.f_w = '85%';
          this.f_h = '460px';
          if (this.popup_w <= 450) {
            this.f_w = '90%';
            this.f_h = '440px';
            if (this.popup_w <= 400) {
              this.f_w = '95%';
              this.f_h = '420px';
              if (this.popup_w <= 350) {
                this.f_w = '100%';
                this.f_h = '300px';
              }
            }
          }
        }
      }
    } else {
      this.f_w = '70%';
    }

    this.ref = this.dialogService.open(HeaderProfileFromComponent, {
      header: 'Choose a Product',
      width: this.f_w,
      contentStyle: { 'max-height': this.f_w, overflow: 'auto' },
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











