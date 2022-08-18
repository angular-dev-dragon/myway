







import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import{ContactFormComponent} from'../../../../components/resume-profiles/side-bar/contact/contact-form/contact-form.component';
// import { HeaderProfileFromComponent } from './header-profile-from/header-profile-from.component';
// import { ExpectationsFormComponent } from './expectations-form/expectations-form.component';
@Component({
  selector: 'app-condida-admin',
  templateUrl: './condida-admin.component.html',
  styleUrls: ['./condida-admin.component.scss', '../style/main.scss'],
  providers: [DialogService, MessageService],
})
export class CondidaAdminComponent implements OnInit {
  active = 1;

  constructor(
    public dialogService: DialogService,
    public messageService: MessageService
  ) {}

  ngOnInit(): void {}
  // @HostListener('window:resize', ['$event'])
  // w(w: any) {
  //   return (this.popup_w = w.target.innerWidth);
  // }
  ref: DynamicDialogRef | undefined;
  popup_w: number = window.innerWidth;
  f_w: string = '';
  open_contact_form(Component: any) {
    if (this.popup_w >= 600) {
      this.f_w = '70%';
      if (this.popup_w >= 1500) {
        this.f_w = '65%';
        if (this.popup_w >= 2000) {
          this.f_w = '60%';
          if (this.popup_w >= 2500) {
            this.f_w = '55%';
            if (this.popup_w >= 3000) {
              this.f_w = '52%';
              if (this.popup_w >= 3500) {
                this.f_w = '50%';
                if (this.popup_w >= 4500) {
                  this.f_w = '48%';
                }
              }
            }
          }
        }
      }
    }
    if (this.popup_w <= 600) {
      this.f_w = '75%';
      if (this.popup_w <= 550) {
        this.f_w = '80%';
        if (this.popup_w <= 500) {
          this.f_w = '85%';
          if (this.popup_w <= 450) {
            this.f_w = '90%';
            if (this.popup_w <= 400) {
              this.f_w = '95%';
              if (this.popup_w <= 350) {
                this.f_w = '100%';
              }
            }
          }
        }
      }
    } else {
      this.f_w = '70%';
    }

    this.ref = this.dialogService.open(Component, {
      header: 'Choose a Product',
      width: this.f_w,
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      baseZIndex: 10000,
    });
  }

  open_header_profile_form() {}
  open_about_form() {}
  open_expectations_form() {}
  open_skills_form() {}
  open_langouge_form() {}
  open_education_form() {}
  open_experience_form() {}
  open_achievement_form() {}
  open_hobbies_form() {}
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











