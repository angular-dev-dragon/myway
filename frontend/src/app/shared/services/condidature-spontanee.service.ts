import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class CondidatureSpontaneeService {
  constructor() {
    this.listSocieteCondidature = this.allSocieteCondidature
  }
  allSocieteCondidature: any = [
    {
      logo:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/3195090/logo.png?1587552503',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5310523/index.png?1640179035',
      title: 'Total Energies',
      type: 'Start Up',
      salaries: '50',
      Pays: 'Algerie',

      caption: 'Une Compagnie intégrée multi-énergies',
      secteur: 'Informatique',
    },
    {
      logo:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/4537715/logo.png?1622715420',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/4548600/index.png?1623058769',
      title: 'Aramco S.A',
      type: 'Grande Societe',
      salaries: '100',
      caption: 'Une Compagnie intégrée multi-énergies',
      secteur: 'Agriculture',
      Pays: 'Maroc',
      Ville: 'Casablanca',
      Region: 'Grand Casablanca',
    },
    {
      logo:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/8124/logo.png?1469002464',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/6192405/index.png?1659520006',
      title: 'Patronas',
      type: 'Multinational',
      salaries: '354',
      caption: 'Une Compagnie intégrée multi-énergies',
      secteur: 'Informatique',
      Pays: 'Maroc',
      Ville: 'Casablanca',
      Region: 'Grand Casablanca',
    },
    {
      logo:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/1007848/logo.png?1558457886',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5027463/index.png?1634721315',
      title: 'Total Energies',
      type: 'Multinational',
      salaries: '458',
      caption: 'Une Compagnie intégrée multi-énergies',
      secteur: 'Électronique',
      Pays: 'Maroc',
      Ville: 'Casablanca',
      Region: 'Grand Casablanca',
    },
    {
      logo:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/69883/logo.png?1621953434',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/6179891/index.png?1659017908',
      title: 'Total Energies',
      type: 'Start Up',
      salaries: '13',
      caption: 'Une Compagnie intégrée multi-énergies',
      secteur: 'Informatique',
      Pays: 'Maroc',
      Ville: 'Tanger',
      Region: 'Tanger-Tetouan',
    },
  ]
  listSocieteCondidature: any = []
  filter(
    searchFiltre: string = '',
    secteurFiltre: string,
    paysFiltre: string,
    regionFiltre: string,
    villeFiltre: string,
    typeSociete: any,
  ) {
    this.listSocieteCondidature = this.allSocieteCondidature

    if (searchFiltre != '') {
      this.listSocieteCondidature = this.listSocieteCondidature.filter(
        (offre: any) => {
          return offre.Intitule.toLowerCase().includes(
            searchFiltre.toLowerCase(),
          )
        },
      )
    }
    if (paysFiltre != '') {
      this.listSocieteCondidature = this.listSocieteCondidature.filter(
        (offre: any) => {
          return offre.Pays.toLowerCase() == paysFiltre.toLowerCase()
        },
      )
    } else if (regionFiltre != '') {
      this.listSocieteCondidature = this.listSocieteCondidature.filter(
        (offre: any) => {
          return offre.Region == regionFiltre
        },
      )
    } else if (villeFiltre != '') {
      this.listSocieteCondidature = this.listSocieteCondidature.filter(
        (offre: any) => {
          return offre.Ville == villeFiltre
        },
      )
    } else if (secteurFiltre != '') {
      this.listSocieteCondidature = this.listSocieteCondidature.filter(
        (offre: any) => {
          return offre.secteur == secteurFiltre
        },
      )
    }

    this.checkboxFiltre(typeSociete, 'type')
  }

  checkboxFiltre(CheckboxList: any, label: any) {
    let newList2
    let newList3: any = this.listSocieteCondidature
    let isFirstTime: Boolean = true
    CheckboxList.map((filtre: any) => {
      if (filtre.nativeElement.checked) {
        if (isFirstTime == true) {
          isFirstTime = false
          newList3 = []
        }
        newList2 = this.listSocieteCondidature
        newList2 = newList2.filter((offre: any) => {
          return offre[label] == filtre.nativeElement.value
        })

        newList2.map((list: any) => {
          newList3.push(list)
        })
      }
    })
    this.listSocieteCondidature = newList3
  }
}
