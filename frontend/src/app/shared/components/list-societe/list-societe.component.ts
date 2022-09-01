import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core'

@Component({
  selector: 'app-list-societe',
  templateUrl: './list-societe.component.html',
  styleUrls: ['./list-societe.component.scss'],
})
export class ListSocieteComponent implements OnInit {
  @Input() link: any = ''
  @Input() pageName: any = ''

  @Input() dataList: any = []
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`)
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
    console.log(value)

    this.orientation = value
  }
}
