import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core'
import { filter } from 'rxjs'
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap'
import { OffreService } from '../../services/offre.service'

@Component({
  selector: 'app-list-offres',
  templateUrl: './list-offres.component.html',
  styleUrls: ['./list-offres.component.scss'],
})
export class ListOffresComponent implements OnInit {
  @Input() link = ''
  @Input() pageName: string = ''
  @Input() offres: any = []
  collapsed = false
  showSidebar: boolean = false
  epingledSidebar: boolean = false
  orientation: any = 'verticale'
  paginate: any = ''

  allOffres: any
  constructor(public offreService: OffreService) {
    // this.allOffres = this.offres
    // config.placement = 'end'
    // config.triggers = 'hover'
  }

  ngOnInit(): void {}

  changeview(or: any) {
    this.orientation = or
  }
  sort(type: any) {
    this.offres.sort((a: any, b: any) =>
      a[type].toLowerCase() > b[type].toLowerCase() ? 1 : -1,
    )
  }
  sortbyDate() {
    this.offres.sort((a: any, b: any) => (a.Date < b.Date ? 1 : -1))
  }

  showFilter() {
    this.showSidebar = !this.showSidebar
  }
}
