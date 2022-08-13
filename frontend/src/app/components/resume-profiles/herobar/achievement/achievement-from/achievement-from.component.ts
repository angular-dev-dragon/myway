
import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { DynamicDialogRef } from 'primeng/dynamicdialog';





@Component({
  selector: 'app-achievement-from',
  templateUrl: './achievement-from.component.html',
  styleUrls: ['./achievement-from.component.scss'],
})
export class AchievementFromComponent implements OnInit {
  public achievement_from: FormGroup;
  constructor(private fb: FormBuilder, private ref: DynamicDialogRef) {
    this.achievement_from = this.fb.group({
      // platform: new FormControl('', [Validators.required]),
      // user_name: new FormControl('', [
      //   Validators.required,
      //   Validators.minLength(3),
      //   Validators.maxLength(150),
      // ]),
    });
  }
  ngOnInit() {}

  save_achievement_from() {
    if (this.achievement_from.valid) {
      console.log('this.cachievement_from', this.achievement_from);
      this.ref.close();
    } else {
      this.achievement_from.markAllAsTouched();
      console.log('not valid');
    }
  }
}
