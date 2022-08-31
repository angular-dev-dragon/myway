import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent implements OnInit {
  @Input() data: any = []
  @Input() type: string = ''

  @Input() pageName: string = ''

  @Output() sortedData: any = new EventEmitter<any>()

  constructor() {}

  ngOnInit(): void {}
  sort_by_name_value: string = 'sort'
  sort_by_date_value: string = 'date'

  sort_by_name(i: string) {
    if (i == 'sort-down') {
      this.sort_by_name_value = 'sort-up'
      this.data.sort((a: any, b: any) =>
        a[this.type].toLowerCase() > b[this.type].toLowerCase() ? 1 : -1,
      )
    } else {
      if (i == 'sort-up') {
        this.sort_by_name_value = 'sort-down'
        this.data.sort((a: any, b: any) =>
          a[this.type].toLowerCase() < b[this.type].toLowerCase() ? 1 : -1,
        )
      }
    }
  }
  sort_by_date(i: string) {
    this.sort_by_date_value = i
    this.data.sort((a: any, b: any) => (a[this.type] > b[this.type] ? 1 : -1))
  }
}
