import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'condida-c-cart-tow',
  templateUrl: './condida-cart-tow.component.html',
  styleUrls: ['./condida-cart-tow.component.scss'],
})
export class CondidaCartTowComponent implements OnInit {
  @Input() availablet: boolean = true;
  @Input() imgt: string = '';
  @Input() namet: string = '';
  @Input() aget: number = 0;
  @Input() addresst: string = '';
  @Input() tital_jobt: string = '';
  @Input() years_of_ext: number = 0;
  @Input() ed_lavelt: string = '';
  @Input() tagt: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
