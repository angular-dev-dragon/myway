


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
      hobbies_from_hobbies_name_inpute: new FormControl('', [
        Validators.required
      ]),
      hobbies_from_hobbies_icon_inpute: new FormControl('', [
        Validators.required,
      ]),
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
