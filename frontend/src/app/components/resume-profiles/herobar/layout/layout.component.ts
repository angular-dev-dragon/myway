import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'herobar-index',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss','../../style/main.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}



























// import { Component, HostListener, OnInit } from '@angular/core';
// import { MessageService } from 'primeng/api';
// import { DialogService } from 'primeng/dynamicdialog';
// import { DynamicDialogRef } from 'primeng/dynamicdialog';


// @Component({




//   providers: [DialogService, MessageService],
// })





//   constructor(
//     public dialogService: DialogService,
//     public messageService: MessageService
//   ) {}

//   ngOnInit(): void {}

//   ref: DynamicDialogRef | undefined;
//   popup_w: number = window.innerWidth;
//   f_w: string = '';
//   open__form() {
//     if (this.popup_w >= 600) {
//       this.f_w = '70%';
//       if (this.popup_w >= 1500) {
//         this.f_w = '65%';
//         if (this.popup_w >= 2000) {
//           this.f_w = '60%';
//           if (this.popup_w >= 2500) {
//             this.f_w = '55%';
//             if (this.popup_w >= 3000) {
//               this.f_w = '52%';
//               if (this.popup_w >= 3500) {
//                 this.f_w = '50%';
//                 if (this.popup_w >= 4500) {
//                   this.f_w = '48%';
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     if (this.popup_w <= 600) {
//       this.f_w = '75%';
//       if (this.popup_w <= 550) {
//         this.f_w = '80%';
//         if (this.popup_w <= 500) {
//           this.f_w = '85%';
//           if (this.popup_w <= 450) {
//             this.f_w = '90%';
//             if (this.popup_w <= 400) {
//               this.f_w = '95%';
//               if (this.popup_w <= 350) {
//                 this.f_w = '100%';
//               }
//             }
//           }
//         }
//       }
//     } else {
//       this.f_w = '70%';
//     }

//     this.ref = this.dialogService.open(, {
//       header: 'Choose a Product',
//       width: this.f_w,
//       contentStyle: { 'max-height': '500px', overflow: 'auto' },
//       baseZIndex: 10000,
//     });
//   }
// }





// import { Component, OnInit } from '@angular/core';

// import {
//   FormGroup,
//   FormBuilder,
//   Validators,
//   FormControl,
// } from '@angular/forms';

// import { DynamicDialogRef } from 'primeng/dynamicdialog';






//   public _form: FormGroup;
//   constructor(private fb: FormBuilder, private ref: DynamicDialogRef) {
//   this._form = this.fb.group({

//       // platform: new FormControl('', [Validators.required]),
//       // user_name: new FormControl('', [
//       //   Validators.required,
//       //   Validators.minLength(3),
//       //   Validators.maxLength(150),
//       // ]),

//     });
//   }
//   ngOnInit() {}

//   save__from() {
//     if (this._form.valid) {
//       console.log('this.c_form', this._form);
//       this.ref.close();
//     } else {
//       this._form.markAllAsTouched();
//       console.log('not valid');
//     }
//   }
// }
// //
