import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'Achievements',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss', '../../style/main.scss'],
})
export class AchievementComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  achievement: boolean | undefined;

  showachievement() {
    this.achievement = true;
  }
}
