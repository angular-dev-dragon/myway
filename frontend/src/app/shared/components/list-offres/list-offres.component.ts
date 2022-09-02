import { Component, Input, OnInit } from '@angular/core'

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

  constructor(public offreService: OffreService) {}
  listOffres: any = []
  ngOnInit(): void {}

  filtredData(value: any) {
    this.listOffres = value
  }

  getOrientaion(value: any) {
    this.orientation = value
  }
}
