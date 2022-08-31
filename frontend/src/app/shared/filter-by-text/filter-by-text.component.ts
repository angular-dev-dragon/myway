import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'

@Component({
  selector: 'app-filter-by-text',
  templateUrl: './filter-by-text.component.html',
  styleUrls: ['./filter-by-text.component.scss'],
})
export class FilterByTextComponent implements OnInit, AfterViewInit {
  @Input() data: any = []
  @Input() pageName: string = ''

  @Output() filtredData: any = new EventEmitter<any>()

  constructor() {}
  ngAfterViewInit(): void {
    this.filterByText()
  }

  ngOnInit(): void {}

  @ViewChild('search') searchInput!: any

  filterByText() {
    let searchValue = this.searchInput.nativeElement.value || ''
    console.log('filterByText', searchValue)

    if (this.pageName == 'quiz') {
      let dataFiltred = this.data.filter((data: any) => {
        return data.titre.toLowerCase().includes(searchValue.toLowerCase())
      })
      console.log(dataFiltred)

      this.filtredData.emit(dataFiltred)
      return this.filtredData
    }
  }
}
