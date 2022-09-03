import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenericService } from '../services/generic.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  @Input() pageName: any = [];

  @Input() showTextInput: boolean = true;
  @Input() showSort: boolean = true;
  @Input() showOrientation: boolean = false;

  @Output() filtredData: any = new EventEmitter<any>();
  @Output() orientationView: any = new EventEmitter<any>();

  dataFiltrer: any = [];
  orientation: string = 'verticale';

  @Input() data: any = [];



  constructor() {}


  ngOnInit(): void {
    // this.filtredData.emit(this.data);
    // this.orientationView.emit(this.orientation);
  }


  filtredDataFunction(value: any) {
    this.dataFiltrer = value;
    this.filtredData.emit(this.dataFiltrer);
    console.log("----------///////////////new dataFiltrer: " + this.dataFiltrer);


  }

  toggleOrientation(orientation: any) {
    this.orientation = orientation;
    this.orientationView.emit(this.orientation);
  }
}
