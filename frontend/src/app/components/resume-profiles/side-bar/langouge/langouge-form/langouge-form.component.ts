



import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-langouge-form',
  templateUrl: './langouge-form.component.html',
  styleUrls: ['./langouge-form.component.scss'],
})
export class LangougeFormComponent implements OnInit {
  public langouge_form: FormGroup;
  constructor(private fb: FormBuilder, private ref: DynamicDialogRef) {
    this.langouge_form = this.fb.group({
      langouge_form_langouge_name_input: new FormControl('', [
        Validators.required,
      ]),
      langouge_form_langouge_lavel_input: new FormControl('', [
        Validators.required,
      ]),
    });
  }
  ngOnInit() {}

  save_langouge_from() {
    if (this.langouge_form.valid) {
      console.log('this.clangouge_form', this.langouge_form);
      this.ref.close();
    } else {
      this.langouge_form.markAllAsTouched();
      console.log('not valid');
    }
  }
}
