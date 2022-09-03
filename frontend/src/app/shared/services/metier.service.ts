import { Injectable } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class MetierService {
  listMetiers: any = []
  constructor(private router: Router) {
    this.listMetiers = this.listAllMetier

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.listMetiers = this.listAllMetier
      }
    })
  }

  listAllMetier: any = [
    {
      Image: '',
      Intitule: 'Développeur1',
      Secteur: 'Informatique',
      Metier: 'DevOps',
    },
    {
      Image: '',
      Intitule: 'Ingénieur génie civil et minier ',
      Secteur: 'Informatique',
      Metier: 'Developpeur',
    },
    {
      Image: '',
      Intitule: 'développeur3',
      Secteur: 'Informatique',
      Metier: 'Developpeur Back-End',
    },
    {
      Image: '',
      Intitule: 'Développeur',
      Secteur: 'Textile',
      Metier: 'Developpeur Front-End',
    },
    {
      Image: '',
      Intitule: 'Développeur4',
      Secteur: 'Électronique',
      Metier: 'Developpeur Front-End',
    },
  ]

  filter(secteurValue: string, metierName = '') {
    this.listMetiers = this.listAllMetier

    this.checkboxFiltre(metierName, 'Metier')

    if (secteurValue != '') {
      this.listMetiers = this.listMetiers.filter((metier: any) => {
        return metier.Secteur == secteurValue
      })
    }
  }

  checkboxFiltre(CheckboxList: any, label: any) {
    let newList2
    let newList3: any = this.listMetiers
    let isFirstTime: Boolean = true
    CheckboxList.map((filtre: any) => {
      if (filtre.nativeElement.checked) {
        if (isFirstTime == true) {
          isFirstTime = false
          newList3 = []
        }
        newList2 = this.listMetiers
        newList2 = newList2.filter((offre: any) => {
          return offre[label] == filtre.nativeElement.value
        })

        newList2.map((list: any) => {
          newList3.push(list)
        })
      }
    })
    this.listMetiers = newList3
  }
}
