import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss','../style/main.scss']
})
export class LayoutsComponent implements OnInit {
  active = 1;
  constructor() {}

  ngOnInit(): void {}
}
