import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-card-offre-details-verticale',
  templateUrl: './card-offre-details-verticale.component.html',
  styleUrls: ['./card-offre-details-verticale.component.scss'],
})
export class CardOffreDetailsVerticaleComponent implements OnInit {
  @Input() image: any = ''

  @Input() titre: any = ''
  @Input() secteur: any = ''
  @Input() poste: any = ''
  @Input() nomEntreprise: any = ''
  @Input() typeEntreprise: any = ''
  @Input() typeContrat: any = ''
  @Input() typePoste: any = ''

  @Input() datePublication: any = ''
  @Input() adresse: any = ''

  constructor() {}

  ngOnInit(): void {}
}
