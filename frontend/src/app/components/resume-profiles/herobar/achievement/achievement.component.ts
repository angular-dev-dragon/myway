



import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AchievementFromComponent } from './achievement-from/achievement-from.component';


@Component({
  selector: 'Achievements',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss', '../../style/main.scss'],
  providers: [DialogService, MessageService],
})
export class AchievementComponent implements OnInit {
  constructor(
    public dialogService: DialogService,
    public messageService: MessageService
  ) {}

  ngOnInit(): void {}

  ref: DynamicDialogRef | undefined;
  popup_w: number = window.innerWidth;
  f_w: string = '';
  open_achievement_form() {
    if (this.popup_w >= 600) {
      this.f_w = '70%';
      if (this.popup_w >= 1500) {
        this.f_w = '65%';
        if (this.popup_w >= 2000) {
          this.f_w = '60%';
          if (this.popup_w >= 2500) {
            this.f_w = '55%';
            if (this.popup_w >= 3000) {
              this.f_w = '52%';
              if (this.popup_w >= 3500) {
                this.f_w = '50%';
                if (this.popup_w >= 4500) {
                  this.f_w = '48%';
                }
              }
            }
          }
        }
      }
    }
    if (this.popup_w <= 600) {
      this.f_w = '75%';
      if (this.popup_w <= 550) {
        this.f_w = '80%';
        if (this.popup_w <= 500) {
          this.f_w = '85%';
          if (this.popup_w <= 450) {
            this.f_w = '90%';
            if (this.popup_w <= 400) {
              this.f_w = '95%';
              if (this.popup_w <= 350) {
                this.f_w = '100%';
              }
            }
          }
        }
      }
    } else {
      this.f_w = '70%';
    }

    this.ref = this.dialogService.open(AchievementFromComponent, {
      header: 'Choose a Product',
      width: this.f_w,
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      baseZIndex: 10000,
    });
  }
}

