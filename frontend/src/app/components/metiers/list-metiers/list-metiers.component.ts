import { Component, OnInit, Input } from '@angular/core'
import { MetierService } from 'src/app/shared/services/metier.service'

@Component({
  selector: 'app-list-metiers',
  templateUrl: './list-metiers.component.html',
  styleUrls: ['./list-metiers.component.scss'],
})
export class ListMetiersComponent implements OnInit {
  @Input() Image = ''

  metiers: any = [
    {
      Image: '',
      Intitule: 'Développeur1',
      Secteur: 'Informatique',
    },
    {
      Image: '',
      Intitule: 'Ingénieur génie civil et minier ',
      Secteur: 'Informatique',
    },
    {
      Image: '',
      Intitule: 'développeur3',
      Secteur: 'Informatique',
    },
    {
      Image: '',
      Intitule: 'Développeur',
      Secteur: 'Textile',
    },
    {
      Image: '',
      Intitule: 'Développeur4',
      Secteur: 'Électronique',
    },
  ]

  paginate: any = ''
  allOffres: any
  constructor(public metierService: MetierService) {}

  ngOnInit(): void {}

  resultData: any = []
  orientation: string = ''
  filtredData(value: any) {
    this.resultData = value
  }

  getOrientaion(value: any) {
    this.orientation = value
  }
}
