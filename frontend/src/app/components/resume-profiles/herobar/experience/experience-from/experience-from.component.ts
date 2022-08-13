


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
  styleUrls: ['./experience-from.component.scss']
})
export class ExperienceFromComponent implements OnInit {


  public experience_from: FormGroup;
  constructor(private fb: FormBuilder, private ref: DynamicDialogRef) {
  this.experience_from = this.fb.group({

      // platform: new FormControl('', [Validators.required]),
      // user_name: new FormControl('', [
      //   Validators.required,
      //   Validators.minLength(3),
      //   Validators.maxLength(150),
      // ]),

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
