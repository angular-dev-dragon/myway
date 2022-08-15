


import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { DynamicDialogRef } from 'primeng/dynamicdialog';




@Component({
  selector: 'app-experience-from',
  templateUrl: './experience-from.component.html',
  styleUrls: ['./experience-from.component.scss'],
})
export class ExperienceFromComponent implements OnInit {
  experience_from_experience_discription_input_value: string='';
  public experience_from: FormGroup;
  constructor(private fb: FormBuilder, private ref: DynamicDialogRef) {
    this.experience_from = this.fb.group({
      experience_from_start_date_input: new FormControl('', [
        Validators.required,
      ]),
      experience_from_end_date_input: new FormControl('', [
        Validators.required,
      ]),
      experience_from_not_end__checkbox: new FormControl('', [
        Validators.required,
      ]),
      experience_from_jobe_titale_input: new FormControl('', [
        Validators.required,
      ]),
      experience_from_company_name_input: new FormControl('', [
        Validators.required,
      ]),
      experience_from_experience_contry_input: new FormControl('', [
        Validators.required,
      ]),
      experience_from_experience_ctiy_input: new FormControl('', [
        Validators.required,
      ]),

      cexperience_from_experience_type_input: new FormControl('', [
        Validators.required,
      ]),

      experience_from_experience_discription_input: new FormControl('', [
        Validators.required,
      ]),
    });
  }
  ngOnInit() {}

  save_experience_from() {
    console.log('this.cexperience_from', this.experience_from);
    if (this.experience_from.valid) {
      console.log('this.cexperience_from', this.experience_from);

      this.ref.close();
    } else {
      this.experience_from.markAllAsTouched();
      console.log('not valid');
    }
  }
}
//
