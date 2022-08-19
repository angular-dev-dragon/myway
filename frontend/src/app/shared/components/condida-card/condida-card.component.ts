
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'condida-c-card',
  templateUrl: './condida-card.component.html',
  styleUrls: ['./condida-card.component.scss'],
})
export class CondidaCardComponent implements OnInit {
  @Input() available: boolean = true;
  @Input() img: string = '';
  @Input() name: string = '';
  @Input() age: number = 0;
  @Input() address: string = '';
  @Input() tital_job: string = '';
  @Input() years_of_ex: number = 0;
  @Input() ed_lavel: string = '';
  @Input() tag: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
