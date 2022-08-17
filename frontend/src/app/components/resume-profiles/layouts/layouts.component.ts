import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss','../style/main.scss']
})
export class LayoutsComponent implements OnInit {
  @Input() img: string = '';
  active = 1;
  constructor() {}

  ngOnInit(): void {}
}
