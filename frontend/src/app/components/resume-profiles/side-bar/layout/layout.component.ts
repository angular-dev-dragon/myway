import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'SideBar-index',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss', '../../style/main.scss'],
})
export class LayoutComponent implements OnInit {
  @Input() img: string = '';
  constructor() {}

  ngOnInit(): void {}
}
