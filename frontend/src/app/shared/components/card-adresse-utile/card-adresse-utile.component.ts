import { Component, Input, OnInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-card-adresse-utile',
  templateUrl: './card-adresse-utile.component.html',
  styleUrls: ['./card-adresse-utile.component.scss'],
})
export class CardAdresseUtileComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
  @Input() data: any = {}
  ngOnInit(): void {}
  adresse: any = {}
  _open(content: any, adr: any) {
    this.adresse = adr
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl' })
      .result.then(
        (result) => {},
        (reason) => {},
      )
  }
}
