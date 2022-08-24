import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-card-library',
  templateUrl: './card-library.component.html',
  styleUrls: ['./card-library.component.scss'],
})
export class CardLibraryComponent implements OnInit {
  @Input() info: any;
  @Input() imageBg = '';
  @Input() logo = '';
  @Input() title    = '';
  @Input() type      = '';
  @Input() salaries  = '';
  @Input() caption   = '';
  getPosition(a1: any, a2: any) {
    for (let i of this.info) {
      a1.Object.key(i.p.span)[0];
      a2.Object.key(i.p.text);
      console.log(a1);
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
