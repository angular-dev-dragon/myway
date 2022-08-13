





import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-education-from',
  templateUrl: './education-from.component.html',
  styleUrls: ['./education-from.component.scss']
})
export class EducationFromComponent implements OnInit {



  public education_from: FormGroup;
  constructor(private fb: FormBuilder, private ref: DynamicDialogRef) {
  this.education_from = this.fb.group({

      // platform: new FormControl('', [Validators.required]),
      // user_name: new FormControl('', [
      //   Validators.required,
      //   Validators.minLength(3),
      //   Validators.maxLength(150),
      // ]),

    });
  }
  ngOnInit() {}

  save_education_from() {
    if (this.education_from.valid) {
      console.log('this.ceducation_from', this.education_from);
      this.ref.close();
    } else {
      this.education_from.markAllAsTouched();
      console.log('not valid');
    }
  }
}
