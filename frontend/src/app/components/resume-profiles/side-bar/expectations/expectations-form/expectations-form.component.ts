

import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-expectations-form',
  templateUrl: './expectations-form.component.html',
  styleUrls: ['./expectations-form.component.scss'],
})
export class ExpectationsFormComponent implements OnInit {
  public expectations_form: FormGroup;
  constructor(private fb: FormBuilder, private ref: DynamicDialogRef) {
    this.expectations_form = this.fb.group({
      platform: new FormControl('', [Validators.required]),
      user_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
      ]),
    });
  }
  ngOnInit() {}

  save_expectations_from() {
    if (this.expectations_form.valid) {
      console.log('this.cexpectations_form', this.expectations_form);
      this.ref.close();
    } else {
      this.expectations_form.markAllAsTouched();
      console.log('not valid');
    }
  }
}
