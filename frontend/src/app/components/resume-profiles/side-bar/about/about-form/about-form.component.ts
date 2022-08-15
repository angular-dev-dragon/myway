
import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { DynamicDialogRef } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-about-form',
  templateUrl: './about-form.component.html',
  styleUrls: ['./about-form.component.scss'],
})
export class AboutFormComponent implements OnInit {
  public about_form: FormGroup;
  about_form_input_value: string = '';
  constructor(private fb: FormBuilder, private ref: DynamicDialogRef) {
    this.about_form = this.fb.group({
      about_form_input: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit() {}

  save_about_from() {
    if (this.about_form.valid) {
      console.log('this.c_form', this.about_form);
      this.ref.close();
    } else {
      this.about_form.markAllAsTouched();
      console.log('not valid');
    }
  }
}
