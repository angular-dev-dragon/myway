import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core'
import { filter } from 'rxjs'
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap'
import { CondidaInfoService } from '../../Services/condida-info/condida-info.service'

@Component({
  selector: 'app-condidat-list',
  templateUrl: './condidat-list.component.html',
  styleUrls: ['./condidat-list.component.scss'],
})
export class CondidatListComponent implements OnInit {
  @Input() link = ''
  @Input() condidatsList: any = []
  collapsed = false
  showSidebar: boolean = false
  epingledSidebar: boolean = false
  orientation: any = 'verticale'
  paginate: any = ''

  allallcondidats: any
  constructor(
    config: NgbPopoverConfig,
    public candidatService: CondidaInfoService,
  ) {
    this.allallcondidats = this.condidatsList
    config.placement = 'end'
    config.triggers = 'hover'
  }

  ngOnInit(): void {}

  changeview(or: any) {
    this.orientation = or
  }
  sort(type: any) {
    this.condidatsList.sort((a: any, b: any) =>
      a[type].toLowerCase() > b[type].toLowerCase() ? 1 : -1,
    )
  }
  sortbyDate() {
    this.condidatsList.sort((a: any, b: any) => (a.Date < b.Date ? 1 : -1))
  }

  showFilter() {
    this.showSidebar = !this.showSidebar
  }
}
