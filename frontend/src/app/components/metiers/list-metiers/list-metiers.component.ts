import {
  Component,
  OnInit,
  ViewChildren,
  ViewChild,
  Input,
} from '@angular/core'

@Component({
  selector: 'app-list-metiers',
  templateUrl: './list-metiers.component.html',
  styleUrls: ['./list-metiers.component.scss'],
})
export class ListMetiersComponent implements OnInit {
  @Input()
  offres: any = [
    {
      Intitule: 'Développeur1',
      Secteur: 'Informatique',
    },
    {
      Intitule: 'Ingénieur génie civil et minier ',
      Secteur: 'Informatique',
    },
    {
      Intitule: 'développeur3',
      Secteur: 'Informatique',
    },
    {
      Intitule: 'Développeur',
      Secteur: 'Textile',
    },
    {
      Intitule: 'Développeur4',

      Secteur: 'Électronique',
    },
  ]
  paginate: any = ''
  allOffres: any
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('secteur') secteurSelect!: any
  @ViewChild('search') searchInput!: any

  filter() {
    this.offres = this.allOffres

    let secteurFiltre = this.secteurSelect.nativeElement.value
    // console.log('filtre par secteurs', secteurFiltre)

    let searchFiltre = this.searchInput.nativeElement.value
    console.log('filtre par search', searchFiltre)

    if (searchFiltre != '') {
      this.offres = this.offres.filter((offre: any) => {
        return offre.Intitule.toLowerCase().includes(searchFiltre.toLowerCase())
      })
    }
    if (secteurFiltre != '') {
      this.offres = this.offres.filter((offre: any) => {
        return offre.Secteur == secteurFiltre
      })
    }
  }
  sort(type: any) {
    this.offres.sort((a: any, b: any) =>
      a[type].toLowerCase() > b[type].toLowerCase() ? 1 : -1,
    )
  }
}
