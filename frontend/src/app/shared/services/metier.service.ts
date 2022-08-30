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

  filter(metierName = '', secteurValue: string) {
    this.listMetiers = this.listAllMetier

    if (metierName != '') {
      this.listMetiers = this.listMetiers.filter((offre: any) => {
        return offre.Intitule.toLowerCase().includes(metierName.toLowerCase())
      })
    }
    if (secteurValue != '') {
      this.listMetiers = this.listMetiers.filter((offre: any) => {
        return offre.Secteur == secteurValue
      })
    }
  }
}
