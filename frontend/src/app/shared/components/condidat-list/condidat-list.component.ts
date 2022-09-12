import { Component, Input, OnInit } from '@angular/core'

import { CondidatService } from '../../services/condidat.service';

@Component({
  selector: 'app-condidat-list',
  templateUrl: './condidat-list.component.html',
  styleUrls: ['./condidat-list.component.scss'],
})
export class CondidatListComponent implements OnInit {
  @Input() link = '';
  @Input() condidatsList: any = [];
  collapsed = false;
  showSidebar: boolean = false;
  epingledSidebar: boolean = false;

  paginate: any = '';

  constructor(public candidatService: CondidatService) {}

  ngOnInit(): void {}
  resultData: any = [];
  orientation: string = '';
  filtredData(value: any) {
    this.resultData = value;
  }
}
