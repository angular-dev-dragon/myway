import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core'

@Component({
  selector: 'app-list-recruiter',
  templateUrl: './list-recruiter.component.html',
  styleUrls: ['./list-recruiter.component.scss'],
})
export class ListRecruiterComponent implements OnInit {
  allRecruiterList: any = [
    {
      logo:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/3195090/logo.png?1587552503',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5310523/index.png?1640179035',
      title: 'Total Energies',
      type: 'Grande Societe',
      salaries: '',
      caption: 'Une Compagnie intégrée multi-énergies',
    },
    {
      logo:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/4537715/logo.png?1622715420',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/4548600/index.png?1623058769',
      title: 'Aramco S.A',
      type: 'Grande Societe',
      salaries: '',
      caption: 'Une Compagnie intégrée multi-énergies',
    },
    {
      logo:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/8124/logo.png?1469002464',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/6192405/index.png?1659520006',
      title: 'Patronas',
      type: 'Grande Societe',
      salaries: '',
      caption: 'Une Compagnie intégrée multi-énergies',
    },
    {
      logo:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/1007848/logo.png?1558457886',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5027463/index.png?1634721315',
      title: 'Total Energies',
      type: 'Grande Societe',
      salaries: '',
      caption: 'Une Compagnie intégrée multi-énergies',
    },
    {
      logo:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/69883/logo.png?1621953434',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/6179891/index.png?1659017908',
      title: 'Total Energies',
      type: 'Grande Societe',
      salaries: '',
      caption: 'Une Compagnie intégrée multi-énergies',
    },
    {
      logo:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/3195090/logo.png?1587552503',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5310523/index.png?1640179035',
      title: 'Total Energies',
      type: 'Grande Societe',
      salaries: '',
      caption: 'Une Compagnie intégrée multi-énergies',
    },
    {
      logo:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/3195090/logo.png?1587552503',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5310523/index.png?1640179035',
      title: 'Total Energies',
      type: 'Grande Societe',
      salaries: '',
      caption: 'Une Compagnie intégrée multi-énergies',
    },
  ]
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`)
  listRecruteur: any = []
  constructor() {
    this.listRecruteur = this.allRecruiterList
  }
  p: any = ''
  ngOnInit(): void {}

  @ViewChild('typePoste') typePosteSelect!: any
  @ViewChild('secteur') secteurSelect!: any
  @ViewChild('ville') villeSelect!: any
  @ViewChild('region') regionSelect!: any
  @ViewChild('pays') paysSelect!: any
  @ViewChildren('contrat') contratBox!: any
  @ViewChildren('niveauxEt') niveauxEtBox!: any
  @ViewChildren('niveauxEx') niveauxExBox!: any
  @ViewChildren('langue') langueBox!: any
  @ViewChild('search') searchInput!: any
  @ViewChild('date') dateInput!: any

  filter() {
    this.listRecruteur = this.allRecruiterList
    let villeFiltre = this.villeSelect.nativeElement.value
    // console.log('filtreParVille', villeFiltre)
    let regionFiltre = this.regionSelect.nativeElement.value
    // console.log('filtre par region', regionFiltre)
    let paysFiltre = this.paysSelect.nativeElement.value
    // console.log('filtre par pays', paysFiltre)
    let contratFiltre = this.contratBox._results
    // console.log('filtre par contrat', contratFiltre)

    let niveauxEtFiltre = this.niveauxEtBox._results
    // console.log('filtre par niveaux etude', niveauxEtFiltre)
    let niveauxExFiltre = this.niveauxExBox._results
    // console.log('filtre par niveaux experience', niveauxExFiltre)
    let langueFiltre = this.langueBox._results
    // console.log('filtre par langues', langueFiltre)
    let secteurFiltre = this.secteurSelect.nativeElement.value
    // console.log('filtre par secteurs', secteurFiltre)

    let searchFiltre = this.searchInput.nativeElement.value
    console.log('filtre par search', searchFiltre)
    let dateFiltre = this.dateInput.nativeElement.value
    // console.log('filtre par date', dateFiltre)

    if (searchFiltre != '') {
      this.listRecruteur = this.listRecruteur.filter((recruteur: any) => {
        return recruteur.title
          .toLowerCase()
          .includes(searchFiltre.toLowerCase())
      })
    }
    if (paysFiltre != '') {
      this.listRecruteur = this.listRecruteur.filter((recruteur: any) => {
        return recruteur.Pays == paysFiltre
      })
    } else if (regionFiltre != '') {
      this.listRecruteur = this.listRecruteur.filter((recruteur: any) => {
        return recruteur.Region == regionFiltre
      })
    } else if (villeFiltre != '') {
      this.listRecruteur = this.listRecruteur.filter((recruteur: any) => {
        return recruteur.Ville == villeFiltre
      })
    } else if (secteurFiltre != '') {
      this.listRecruteur = this.listRecruteur.filter((recruteur: any) => {
        return recruteur.Secteur == secteurFiltre
      })
    }
    if (dateFiltre != '') {
      this.listRecruteur = this.listRecruteur.filter((recruteur: any) => {
        return recruteur.Date == dateFiltre
      })
    }
    this.checkboxFiltre(contratFiltre, 'TypeContrat')
    this.checkboxFiltre(niveauxEtFiltre, 'NiveauxEtude')
    this.checkboxFiltre(niveauxExFiltre, 'NiveauxExperience')
    this.checkboxFiltre(langueFiltre, 'langue')
  }

  checkboxFiltre(CheckboxList: any, label: any) {
    let newList2
    let newList3: any = this.listRecruteur
    let isFirstTime: Boolean = true
    CheckboxList.map((filtre: any) => {
      if (filtre.nativeElement.checked) {
        if (isFirstTime == true) {
          isFirstTime = false
          newList3 = []
        }
        newList2 = this.listRecruteur
        newList2 = newList2.filter((recruteur: any) => {
          return recruteur[label] == filtre.nativeElement.value
        })

        newList2.map((list: any) => {
          newList3.push(list)
        })
      }
    })
    this.listRecruteur = newList3
  }

  sort(type: any) {
    this.listRecruteur.sort((a: any, b: any) =>
      a[type].toLowerCase() > b[type].toLowerCase() ? 1 : -1,
    )
  }
  sortbyDate() {
    this.listRecruteur.sort((a: any, b: any) => (a.Date < b.Date ? 1 : -1))
  }
  showSidebar: boolean = false

  showFilter() {
    this.showSidebar = !this.showSidebar
  }
}
