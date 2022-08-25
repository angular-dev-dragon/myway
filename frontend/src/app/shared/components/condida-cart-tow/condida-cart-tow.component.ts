import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'condida-c-cart-tow',
  templateUrl: './condida-cart-tow.component.html',
  styleUrls: ['./condida-cart-tow.component.scss'],
})
export class CondidaCartTowComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
