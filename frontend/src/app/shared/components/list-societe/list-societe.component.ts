import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-list-societe',
  templateUrl: './list-societe.component.html',
  styleUrls: ['./list-societe.component.scss'],
})
export class ListSocieteComponent implements OnInit {
  @Input() link: any = ''
  @Input() pageName: any = ''

  @Input() dataList: any = []
  listRecruteur: any = []
  constructor() {}
  p: any = ''
  ngOnInit(): void {}
  resultData: any = []
  orientation: string = ''
  filtredData(value: any) {
    this.resultData = value
  }

  getOrientaion(value: any) {
    this.orientation = value
  }
}
