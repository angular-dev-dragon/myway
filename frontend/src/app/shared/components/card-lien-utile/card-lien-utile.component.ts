import { Component, Input, OnInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-card-lien-utile',
  templateUrl: './card-lien-utile.component.html',
  styleUrls: ['./card-lien-utile.component.scss'],
})
export class CardLienUtileComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
  @Input() data: any = ''

  lienUtilPost: any

  ngOnInit(): void {}
  detailLien: any

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
