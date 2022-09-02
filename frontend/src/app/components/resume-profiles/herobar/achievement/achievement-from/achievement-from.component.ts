import { Component, OnInit } from '@angular/core'

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'

import { DynamicDialogRef } from 'primeng/dynamicdialog'

@Component({
  selector: 'app-achievement-from',
  templateUrl: './achievement-from.component.html',
  styleUrls: ['./achievement-from.component.scss'],
})
export class AchievementFromComponent implements OnInit {
  achievement_from_achievement_discription_input_value: string = ''
  public achievement_from: FormGroup
  constructor(private fb: FormBuilder, private ref: DynamicDialogRef) {
    this.achievement_from = this.fb.group({
      achievement_from_achievement_date_input: new FormControl('', [
        Validators.required,
      ]),
      achievement_from_achievement_titale_input: new FormControl('', [
        Validators.required,
      ]),
      achievement_from_achievement_discription_input: new FormControl('', [
        Validators.required,
      ]),
      // user_name: new FormControl('', [
      //   Validators.required,
      //   Validators.minLength(3),
      //   Validators.maxLength(150),
      // ]),
    })
  }
  ngOnInit() {}

  save_achievement_from() {
    if (this.achievement_from.valid) {
      this.ref.close()
    } else {
      this.achievement_from.markAllAsTouched()
    }
  }
}
