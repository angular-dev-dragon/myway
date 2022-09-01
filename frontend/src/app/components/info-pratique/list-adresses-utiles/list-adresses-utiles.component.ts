import { Component, OnInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { AdresseUtileService } from 'src/app/shared/services/adresse-utile.service'

@Component({
  selector: 'app-list-adresses-utiles',
  templateUrl: './list-adresses-utiles.component.html',
  styleUrls: ['./list-adresses-utiles.component.scss'],
})
export class ListAdressesUtilesComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    public adressesUtilesService: AdresseUtileService,
  ) {}

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
