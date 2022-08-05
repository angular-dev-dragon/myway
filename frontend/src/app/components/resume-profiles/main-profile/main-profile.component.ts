import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavItem,  } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.scss'],
})
export class MainProfileComponent implements OnInit {
  active = 1;
  constructor() {}

  ngOnInit(): void {}
}
