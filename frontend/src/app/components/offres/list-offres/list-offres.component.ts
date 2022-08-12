import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core'
import { filter } from 'rxjs'

@Component({
  selector: 'app-list-offres',
  templateUrl: './list-offres.component.html',
  styleUrls: ['./list-offres.component.scss'],
})
export class ListOffresComponent implements OnInit {
  offres: any = [
    {
      Intitule: 'Développeur',
      TypeContrat: 'CDI',
      Poste: 'Développeur Front-End',
      NomEntreprise: 'Jumia',
      TypeEntreprise: 'StartUp',
      Image: '',
      Ville: 'Tanger',
      Secteur: 'Informatique',
      Date: '2022-02-02',
      Competences: 'HTML',
      Pays: 'Maroc',
      NiveauxEtude: 'Bac',
      NiveauxExperience: 'entre 3 et 4',
      langue: 'Français',
    },
    {
      Intitule: 'Développeur',
      TypeContrat: 'Anapec',
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
      Intitule: 'Développeur',
      TypeContrat: 'CDD',
      NomEntreprise: 'Jumia',
      TypeEntreprise: 'StartUp',
      Image: '',
      Ville: 'Tanger',
      Secteur: 'Informatique',
      Date: '2022-02-02',
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
      TypeEntreprise: 'StartUp',
      Image: '',
      Ville: 'Tétouan',
      Secteur: 'Informatique',
      Date: '2022-02-02',
      Competences: 'HTML',
      Pays: 'Maroc',
      NiveauxEtude: 'qualification avant bac',
      NiveauxExperience: 'entre 1 et 2',
      langue: 'Arabe',
    },
    {
      Intitule: 'Développeur',
      TypeContrat: 'CDI',
      NomEntreprise: 'Jumia',
      TypeEntreprise: 'StartUp',
      Image: '',
      Ville: 'Tanger',
      Secteur: 'Informatique',
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

  @ViewChild('ville') villeSelect!: any
  @ViewChild('region') regionSelect!: any
  @ViewChild('pays') paysSelect!: any
  @ViewChildren('contrat') contratBox!: any
  @ViewChildren('niveauxEt') niveauxEtBox!: any
  @ViewChildren('niveauxEx') niveauxExBox!: any
  @ViewChildren('langue') langueBox!: any

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
    console.log('filtre par langues', langueFiltre)

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
}
