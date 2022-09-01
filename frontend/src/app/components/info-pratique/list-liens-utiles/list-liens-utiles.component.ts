import { ViewportScroller } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { LienUtileService } from 'src/app/shared/services/lien-utile.service'

@Component({
  selector: 'app-list-liens-utiles',
  templateUrl: './list-liens-utiles.component.html',
  styleUrls: ['./list-liens-utiles.component.scss'],
})
export class ListLiensUtilesComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    public lienUtilesService: LienUtileService,
  ) {}
  title = ''
  detailLien: any

  ngOnInit() {}
  lienUtilPost: any

  resultData: any = []
  orientation: string = ''
  filtredData(value: any) {
    this.resultData = value
  }

  getOrientaion(value: any) {
    console.log(value)

    this.orientation = value
  }

  _open(content: any, lienUtile: any) {
    this.lienUtilPost = lienUtile

    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        size: 'lg',
        centered: true,
      })
      .result.then(
        (result) => {},
        (reason) => {},
      )
  }
}
