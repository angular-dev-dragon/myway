import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core'
import { filter } from 'rxjs'

@Component({
  selector: 'app-list-offres',
  templateUrl: './list-offres.component.html',
  styleUrls: ['./list-offres.component.scss'],
})
export class ListOffresComponent implements OnInit {
  orientation: any = 'verticale'
  offres: any = [
    {
      Intitule: 'Développeur1',
      TypeContrat: 'CDI',
      Poste: 'Développeur Front-End',
      NomEntreprise: 'Jumia',
      TypeEntreprise: 'StartUp',
      Image: '',
      Ville: 'Tanger',
      Secteur: 'Informatique',
      Date: '2023-02-02',
      Competences: 'HTML',
      Pays: 'Maroc',
      NiveauxEtude: 'Bac',
      NiveauxExperience: 'entre 3 et 4',
      langue: 'Français',
    },
    {
      Intitule: 'Ingénieur génie civil et minier ',
      TypeContrat: 'Anapec',
      Poste: 'technicien en mécanique et électrique mécanique et électrique',
      NomEntreprise: 'Smart automation technologies',
      TypeEntreprise: 'StartUp',
      Image: '',
      Ville: 'Tétouan',
      Secteur: 'Informatique',
      Date: '2022-02-02',
      Competences: 'HTML',
      Pays: 'Maroc',
      NiveauxEtude: 'Bac',
      NiveauxExperience: 'entre 3 et 4',
      langue: 'Français',
    },
    {
      Intitule: 'développeur3',
      TypeContrat: 'CDD',
      Poste: 'Développeur Front-End',
      NomEntreprise: 'Jumia',
      TypeEntreprise: 'StartUp',
      Image: '',
      Ville: 'Tanger',
      Secteur: 'Informatique',
      Date: '2000-02-02',
      Competences: 'HTML',
      Pays: 'Algérie',
      NiveauxEtude: 'Bac',
      NiveauxExperience: 'entre 1 et 2',
      langue: 'Espagnol',
    },
    {
      Intitule: 'Développeur',
      TypeContrat: 'A discuter',
      NomEntreprise: 'Jumia',
      Poste: 'Développeur Back-End',
      TypeEntreprise: 'StartUp',
      Image: '',
      Ville: 'Tétouan',
      Secteur: 'Textile',
      Date: '2022-05-02',
      Competences: 'HTML',
      Pays: 'Maroc',
      NiveauxEtude: 'qualification avant bac',
      NiveauxExperience: 'entre 1 et 2',
      langue: 'Arabe',
    },
    {
      Intitule: 'Développeur4',
      TypeContrat: 'CDI',
      NomEntreprise: 'Jumia',
      TypeEntreprise: 'StartUp',
      Poste: 'Développeur Back-End',
      Image: '',
      Ville: 'Tanger',
      Secteur: 'Électronique',
      Date: '2022-02-02',
      Competences: 'HTML',
      Pays: 'Algérie',
      NiveauxEtude: 'qualification avant bac',
      NiveauxExperience: "moins d'un ans",
      langue: 'Espagnol',
    },
  ]
  allOffres: any
  constructor() {
    this.allOffres = this.offres
  }

  ngOnInit(): void {}

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
    this.offres = this.allOffres
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
    // console.log('filtre par search', searchFiltre)
    let dateFiltre = this.dateInput.nativeElement.value
    console.log('filtre par date', dateFiltre)

    if (searchFiltre != '') {
      this.offres = this.offres.filter((offre: any) => {
        return offre.Intitule.toLowerCase().includes(searchFiltre.toLowerCase())
      })
    }
    if (paysFiltre != '') {
      this.offres = this.offres.filter((offre: any) => {
        return offre.Pays == paysFiltre
      })
    } else if (regionFiltre != '') {
      this.offres = this.offres.filter((offre: any) => {
        return offre.Region == regionFiltre
      })
    } else if (villeFiltre != '') {
      this.offres = this.offres.filter((offre: any) => {
        return offre.Ville == villeFiltre
      })
    } else if (secteurFiltre != '') {
      this.offres = this.offres.filter((offre: any) => {
        return offre.Secteur == secteurFiltre
      })
    }
    if (dateFiltre != '') {
      this.offres = this.offres.filter((offre: any) => {
        return offre.Date == dateFiltre
      })
    }
    this.checkboxFiltre(contratFiltre, 'TypeContrat')
    this.checkboxFiltre(niveauxEtFiltre, 'NiveauxEtude')
    this.checkboxFiltre(niveauxExFiltre, 'NiveauxExperience')
    this.checkboxFiltre(langueFiltre, 'langue')
  }

  checkboxFiltre(CheckboxList: any, label: any) {
    let newList2
    let newList3: any = this.offres
    let isFirstTime: Boolean = true
    CheckboxList.map((filtre: any) => {
      if (filtre.nativeElement.checked) {
        if (isFirstTime == true) {
          isFirstTime = false
          newList3 = []
        }
        newList2 = this.offres
        newList2 = newList2.filter((offre: any) => {
          return offre[label] == filtre.nativeElement.value
        })

        newList2.map((list: any) => {
          newList3.push(list)
        })
      }
    })
    this.offres = newList3
  }
  changeview(or: any) {
    this.orientation = or
  }
  sort(type: any) {
    this.offres.sort((a: any, b: any) =>
      a[type].toLowerCase() > b[type].toLowerCase() ? 1 : -1,
    )
  }
  sortbyDate() {
    this.offres.sort((a: any, b: any) => (a.Date < b.Date ? 1 : -1))
  }
}
