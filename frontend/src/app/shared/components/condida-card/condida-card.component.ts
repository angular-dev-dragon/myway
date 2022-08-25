
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'condida-c-card',
  templateUrl: './condida-card.component.html',
  styleUrls: ['./condida-card.component.scss'],
})
export class CondidaCardComponent implements OnInit {
  @Input() available: boolean = true;
  @Input() img: string = '';
  @Input() last_name: string = '';
  @Input() first_name: string = '';
  @Input() age: number = 0;
  @Input() city: string = '';
  @Input() countrie: string = '';
  @Input() tital_job: string = '';
  @Input() years_of_ex: number = 0;
  @Input() ed_lavel: string = '';
  @Input() tag: any[] = [];

  name_all: any;
  name_mix: string | undefined;
  constructor() {
    // this.name_all = this.namee;
    // this.name_mix = `${Object.values(this.namee)[0]}`;
  }

  ngOnInit(): void {}
}
