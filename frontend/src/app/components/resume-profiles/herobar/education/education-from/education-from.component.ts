import { Component, OnInit } from '@angular/core'

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'

import { DynamicDialogRef } from 'primeng/dynamicdialog'

@Component({
  selector: 'education-from',
  templateUrl: './education-from.component.html',
  styleUrls: ['./education-from.component.scss'],
})
export class EducationFromComponent implements OnInit {
  public education_form: FormGroup

  constructor(private fb: FormBuilder, private ref: DynamicDialogRef) {
    this.education_form = this.fb.group({
      education_form_start_date_input: new FormControl('', [
        Validators.required,
      ]),
      education_form_end_date_input: new FormControl('', [Validators.required]),
      education_form_not_end__checkbox: new FormControl('', [
        Validators.required,
      ]),
      education_form_education_fiield_input: new FormControl('', [
        Validators.required,
      ]),
      education_form_education_school_input: new FormControl('', [
        Validators.required,
      ]),
      education_form_education_contry_input: new FormControl('', [
        Validators.required,
      ]),
      education_form_education_ctiy_input: new FormControl('', [
        Validators.required,
      ]),
    })
  }
  ngOnInit() {}

  save_education_from() {
    if (this.education_form.valid) {
      this.ref.close()
    } else {
      this.education_form.markAllAsTouched()
    }
  }
}
