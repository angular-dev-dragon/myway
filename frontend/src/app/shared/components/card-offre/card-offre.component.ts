import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-card-offre',
  templateUrl: './card-offre.component.html',
  styleUrls: ['./card-offre.component.scss'],
})
export class CardOffreComponent implements OnInit {
  @Input() Intitule: any = ''
  @Input() Secteur: any = ''
  @Input() Poste: any = ''
  @Input() NomEntreprise: any = ''
  @Input() TypeEntreprise: any = ''
  @Input() Competences: any = ''
  @Input() TypeContrat: any = ''
  @Input() Ville: any = ''
  @Input() Date: any = ''

  constructor() {}

  ngOnInit(): void {}
}
