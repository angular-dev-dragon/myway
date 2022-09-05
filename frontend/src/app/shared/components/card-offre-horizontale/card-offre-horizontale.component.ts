import { Component, Input, OnInit } from '@angular/core'
import { GenericService } from '../../services/generic.service'

@Component({
  selector: 'app-card-offre-horizontale',
  templateUrl: './card-offre-horizontale.component.html',
  styleUrls: ['./card-offre-horizontale.component.scss'],
})
export class CardOffreHorizontaleComponent implements OnInit {
  @Input() Intitule: string = ''
  @Input() Secteur: string = ''
  @Input() Poste: string = ''
  @Input() TypePoste: string = ''
  @Input() NomEntreprise: string = ''
  @Input() TypeEntreprise: string = ''
  @Input() Competences: any = ''
  @Input() TypeContrat: string = ''
  @Input() Ville: string = ''
  @Input() Date: any = ''
  @Input() image: string = ''
  @Input() dateDisponibilite: any = ''
  @Input() showBtn: boolean = true
  @Input() link: any = ''
  @Input() id: string = ''

  @Input() pageName: string = ''

  constructor(public genericService: GenericService) {}
  reduireCard: boolean = false

  ngOnInit(): void {}
}
