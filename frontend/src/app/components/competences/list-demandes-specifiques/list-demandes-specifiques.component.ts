import { Component, OnInit } from '@angular/core'
import { DemandeSpecifiqueService } from 'src/app/shared/services/demande-specifique.service'

@Component({
  selector: 'app-list-demandes-specifiques',
  templateUrl: './list-demandes-specifiques.component.html',
  styleUrls: ['./list-demandes-specifiques.component.scss'],
})
export class ListDemandesSpecifiquesComponent implements OnInit {
  constructor(public demandeSpecifiqueService: DemandeSpecifiqueService) {}
  listDemandes: any = []
  orientation: string = ''
  ngOnInit(): void {}
  resultData: any = []

  filtredData(value: any) {
    console.log(value)

    this.resultData = value
  }

  getOrientaion(value: any) {
    console.log(value)

    this.orientation = value
  }
}
