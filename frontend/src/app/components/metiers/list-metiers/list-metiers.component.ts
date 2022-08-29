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
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('secteur') secteurSelect!: any
  @ViewChild('search') searchInput!: any

  filter() {
    this.metiers = this.allOffres

    let secteurFiltre = this.secteurSelect.nativeElement.value
    // console.log('filtre par secteurs', secteurFiltre)

    let searchFiltre = this.searchInput.nativeElement.value
    console.log('filtre par search', searchFiltre)

    if (searchFiltre != '') {
      this.metiers = this.metiers.filter((offre: any) => {
        return offre.Intitule.toLowerCase().includes(searchFiltre.toLowerCase())
      })
    }
    if (secteurFiltre != '') {
      this.metiers = this.metiers.filter((offre: any) => {
        return offre.Secteur == secteurFiltre
      })
    }
  }
  sort(type: any) {
    this.metiers.sort((a: any, b: any) =>
      a[type].toLowerCase() > b[type].toLowerCase() ? 1 : -1,
    )
  }
}
