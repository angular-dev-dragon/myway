import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-condida-cart-tow',
  templateUrl: './condida-cart-tow.component.html',
  styleUrls: ['./condida-cart-tow.component.scss']
})
export class CondidaCartTowComponent implements OnInit {



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


