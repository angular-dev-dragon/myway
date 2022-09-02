import { Component, OnInit } from '@angular/core'

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'

import { DynamicDialogRef } from 'primeng/dynamicdialog'

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss'],
})
export class SkillsFormComponent implements OnInit {
  public skills_form: FormGroup
  constructor(private fb: FormBuilder, private ref: DynamicDialogRef) {
    this.skills_form = this.fb.group({
      skills_form_skill_name_input: new FormControl('', [Validators.required]),
      skills_form_skill_lavel_input: new FormControl('', [Validators.required]),
    })
  }
  ngOnInit() {}

  save_skills_from() {
    if (this.skills_form.valid) {
      this.ref.close()
    } else {
      this.skills_form.markAllAsTouched()
    }
  }
}
