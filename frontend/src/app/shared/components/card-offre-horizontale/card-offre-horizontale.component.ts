import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-card-offre-horizontale',
  templateUrl: './card-offre-horizontale.component.html',
  styleUrls: ['./card-offre-horizontale.component.scss'],
})
export class CardOffreHorizontaleComponent implements OnInit {
  @Input() Intitule: any = ''
  @Input() Secteur: any = ''
  @Input() Poste: any = ''
  @Input() TypePoste: any = ''
  @Input() NomEntreprise: any = ''
  @Input() TypeEntreprise: any = ''
  @Input() Competences: any = ''
  @Input() TypeContrat: any = ''
  @Input() Ville: any = ''
  @Input() Date: any = ''
  constructor() {}

  ngOnInit(): void {}
}
