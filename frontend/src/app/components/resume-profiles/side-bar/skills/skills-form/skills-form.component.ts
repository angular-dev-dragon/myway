


import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss'],
})
export class SkillsFormComponent implements OnInit {
  public skills_form: FormGroup;
  constructor(private fb: FormBuilder, private ref: DynamicDialogRef) {
    this.skills_form = this.fb.group({

      // platform: new FormControl('', [Validators.required]),
      // user_name: new FormControl('', [
      //   Validators.required,
      //   Validators.minLength(3),
      //   Validators.maxLength(150),
      // ]),
    });
  }
  ngOnInit() {}

  save_skills_from() {
    if (this.skills_form.valid) {
      console.log('this.cskills_form', this.skills_form);
      this.ref.close();
    } else {
      this.skills_form.markAllAsTouched();
      console.log('not valid');
    }
  }
}
