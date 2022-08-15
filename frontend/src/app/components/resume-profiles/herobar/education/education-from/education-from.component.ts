





import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'education-from',
  templateUrl: './education-from.component.html',
  styleUrls: ['./education-from.component.scss'],
})
export class EducationFromComponent implements OnInit {
  public education_form: FormGroup;
  active = 1;
  constructor(private fb: FormBuilder, private ref: DynamicDialogRef) {
    this.education_form = this.fb.group({
      //   langouge_form_langouge_name_input: new FormControl('', [
      //     Validators.required,
      //   ]),
    });
  }
  ngOnInit() {}

  save_education_from() {
    if (this.education_form.valid) {
      console.log('this.ceducation_from', this.education_form);
      this.ref.close();
    } else {
      this.education_form.markAllAsTouched();
      console.log('not valid');
    }
  }
}
