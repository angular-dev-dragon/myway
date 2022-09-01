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

  constructor(public offreService: OffreService) {
    // this.allOffres = this.offres
    // config.placement = 'end'
    // config.triggers = 'hover'
  }
  listOffres: any = []
  ngOnInit(): void {}

  filtredData(value: any) {
    console.log(value)

    this.listOffres = value
  }

  getOrientaion(value: any) {
    console.log(value)

    this.orientation = value
  }
}
