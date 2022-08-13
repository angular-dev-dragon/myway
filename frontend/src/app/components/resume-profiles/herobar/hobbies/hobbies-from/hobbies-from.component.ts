


import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { DynamicDialogRef } from 'primeng/dynamicdialog';




@Component({
  selector: 'app-hobbies-from',
  templateUrl: './hobbies-from.component.html',
  styleUrls: ['./hobbies-from.component.scss'],
})
export class HobbiesFromComponent implements OnInit {
  public hobbies_from: FormGroup;
  constructor(private fb: FormBuilder, private ref: DynamicDialogRef) {
    this.hobbies_from = this.fb.group({
      // platform: new FormControl('', [Validators.required]),
      // user_name: new FormControl('', [
      //   Validators.required,
      //   Validators.minLength(3),
      //   Validators.maxLength(150),
      // ]),
    });
  }
  ngOnInit() {}

  save_hobbies_from() {
    if (this.hobbies_from.valid) {
      console.log('this.chobbies_from', this.hobbies_from);
      this.ref.close();
    } else {
      this.hobbies_from.markAllAsTouched();
      console.log('not valid');
    }
  }
}
//
