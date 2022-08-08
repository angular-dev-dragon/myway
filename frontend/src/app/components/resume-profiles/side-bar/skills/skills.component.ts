import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', '../../style/main.scss'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  Skils: boolean | undefined;

  showSkils() {
    this.Skils = true;
  }
}
