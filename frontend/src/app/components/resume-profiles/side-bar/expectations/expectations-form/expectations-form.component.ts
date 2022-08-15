

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
      expectations_form_job_fild_1_input: new FormControl('', [Validators.required,]),
      expectations_form_job_fild_2_input: new FormControl('', [Validators.required,]),
      expectations_form_job_fild_3_input: new FormControl('', [Validators.required,]),
      expectations_form_contry_input: new FormControl('',     [Validators.required,]),
      expectations_form_ctiy_input: new FormControl('',       [Validators.required,]),
      expectations_form_time_input: new FormControl('',       [Validators.required,]),
      expectations_form_conteract_type_input: new FormControl('',[Validators.required,]),
      expectations_form_saliry_input: new FormControl('',        [Validators.required,]),
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
