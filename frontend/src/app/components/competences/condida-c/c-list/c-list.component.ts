// #region importes

import { Component, OnInit } from '@angular/core'
import { CondidatService } from 'src/app/shared/services/condidat.service'


// #endregion
// #region selectoes

@Component({
  selector: 'app-c-list',
  templateUrl: './c-list.component.html',
  styleUrls: ['./c-list.component.scss'],
})
// #endregion
// #region export class
export class CListComponent implements OnInit {
  // #region vars
  paginate: any = ''
  condidatsList: any
  allcondidates: any
  offres: any
  niveauxExBox: any
  contratBox: any
  villeSelect: any
  regionSelect: any
  paysSelect: any
  allOffres: any
  langueBox: any
  secteurSelect: any
  dateInput: any
  searchInput: any
  orientation: any = 'horizontale'

  // #endregion
  constructor(private condida_data: CondidatService) {
    this.condidatsList = this.condida_data.getlist()

    // #region condida data
    // this.condidatsList = [
    //   {
    //     avalilaible: true,
    //     img: 'https://avatars.githubusercontent.com/u/71600486?v=4',
    //     name: 'Ahmed Aoulad Amar',
    //     age: '25',
    //     address: 'tanger/morococ',
    //     tital_job: 'web developer',
    //     years_of_ex: '2 years',
    //     ed_lavel: 'bac + 3',
    //     tag: ['web', 'developer'],
    //   },
    //   {
    //     avalilaible: false,
    //     img: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
    //     name: 'ahmed aoulad amr',
    //     age: '25',
    //     address: 'tanger/morococ',
    //     tital_job: 'web developer',
    //     years_of_ex: '2 years',
    //     ed_lavel: 'bac + 3',
    //     tag: ['web', 'developer'],
    //   },
    //   {
    //     avalilaible: true,
    //     img: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
    //     name: 'ahmed aoulad amr',
    //     age: '25',
    //     address: 'tanger/morococ',
    //     tital_job: 'web developer',
    //     years_of_ex: '2 years',
    //     ed_lavel: 'bac + 3',
    //     tag: ['web', 'developer'],
    //   },
    //   {
    //     avalilaible: true,
    //     img: 'https://www.bootdey.com/img/Content/avatar/avatar4.png',
    //     name: 'ahmed aoulad amr',
    //     age: '25',
    //     address: 'tanger/morococ',
    //     tital_job: 'web developer',
    //     years_of_ex: '2 years',
    //     ed_lavel: 'bac + 3',
    //     tag: ['web', 'developer'],
    //   },
    //   {
    //     avalilaible: true,
    //     img: 'https://www.bootdey.com/img/Content/avatar/avatar5.png',
    //     name: 'ahmed aoulad amr',
    //     age: '25',
    //     address: 'tanger/morococ',
    //     tital_job: 'web developer',
    //     years_of_ex: '2 years',
    //     ed_lavel: 'bac + 3',
    //     tag: ['web', 'developer'],
    //   },
    //   {
    //     avalilaible: true,
    //     img: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
    //     name: 'ahmed aoulad amr',
    //     age: '25',
    //     address: 'tanger/morococ',
    //     tital_job: 'web developer',
    //     years_of_ex: '2 years',
    //     ed_lavel: 'bac + 3',
    //     tag: ['web', 'developer'],
    //   },
    //   {
    //     avalilaible: true,
    //     img: 'https://www.bootdey.com/img/Content/avatar/avatar7.png',
    //     name: 'ahmed aoulad amr',
    //     age: '25',
    //     address: 'tanger/morococ',
    //     tital_job: 'web developer',
    //     years_of_ex: '2 years',
    //     ed_lavel: 'bac + 3',
    //     tag: ['web', 'developer'],
    //   },
    //   {
    //     avalilaible: true,
    //     img: 'https://www.bootdey.com/img/Content/avatar/avatar8.png',
    //     name: 'ahmed aoulad amr',
    //     age: '25',
    //     address: 'tanger/morococ',
    //     tital_job: 'web developer',
    //     years_of_ex: '2 years',
    //     ed_lavel: 'bac + 3',
    //     tag: ['web', 'developer'],
    //   },
    //   {
    //     avalilaible: true,
    //     img: 'https://www.bootdey.com/img/Content/avatar/avatar9.png',
    //     name: 'ahmed aoulad amr',
    //     age: '25',
    //     address: 'tanger/morococ',
    //     tital_job: 'web developer',
    //     years_of_ex: '2 years',
    //     ed_lavel: 'bac + 3',
    //     tag: ['web', 'developer'],
    //   },
    //   {
    //     avalilaible: true,
    //     img: 'https://www.bootdey.com/img/Content/avatar/avatar10.png',
    //     name: 'ahmed aoulad amr',
    //     age: '25',
    //     address: 'tanger/morococ',
    //     tital_job: 'web developer',
    //     years_of_ex: '2 years',
    //     ed_lavel: 'bac + 3',
    //     tag: ['web', 'developer'],
    //   },
    //   {
    //     avalilaible: true,
    //     img: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
    //     name: 'ahmed aoulad amr',
    //     age: '25',
    //     address: 'tanger/morococ',
    //     tital_job: 'web developer',
    //     years_of_ex: '2 years',
    //     ed_lavel: 'bac + 3',
    //     tag: ['web', 'developer'],
    //   },
    //   {
    //     avalilaible: true,
    //     img: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
    //     name: 'ahmed aoulad amr',
    //     age: '25',
    //     address: 'tanger/morococ',
    //     tital_job: 'web developer',
    //     years_of_ex: '2 years',
    //     ed_lavel: 'bac + 3',
    //     tag: ['web', 'developer'],
    //   },
    //   {
    //     avalilaible: true,
    //     img: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
    //     name: 'ahmed aoulad amr',
    //     age: '25',
    //     address: 'tanger/morococ',
    //     tital_job: 'web developer',
    //     years_of_ex: '2 years',
    //     ed_lavel: 'bac + 3',
    //     tag: ['web', 'developer'],
    //   },
    //   {
    //     avalilaible: true,
    //     img: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
    //     name: 'ahmed aoulad amr',
    //     age: '25',
    //     address: 'tanger/morococ',
    //     tital_job: 'web developer',
    //     years_of_ex: '2 years',
    //     ed_lavel: 'bac + 3',
    //     tag: ['web', 'developer'],
    //   },
    //   {
    //     avalilaible: true,
    //     img: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
    //     name: 'ahmed aoulad amr',
    //     age: '25',
    //     address: 'tanger/morococ',
    //     tital_job: 'web developer',
    //     years_of_ex: '2 years',
    //     ed_lavel: 'bac + 3',
    //     tag: ['web', 'developer'],
    //   },
    //   {
    //     avalilaible: true,
    //     img: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
    //     name: 'ahmed aoulad amr',
    //     age: '25',
    //     address: 'tanger/morococ',
    //     tital_job: 'web developer',
    //     years_of_ex: '2 years',
    //     ed_lavel: 'bac + 3',
    //     tag: ['web', 'developer'],
    //   },
    //   {
    //     avalilaible: true,
    //     img: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
    //     name: 'ahmed aoulad amr',
    //     age: '25',
    //     address: 'tanger/morococ',
    //     tital_job: 'web developer',
    //     years_of_ex: '2 years',
    //     ed_lavel: 'bac + 3',
    //     tag: ['web', 'developer'],
    //   },
    //   {
    //     avalilaible: true,
    //     img: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
    //     name: 'ahmed aoulad amr',
    //     age: '25',
    //     address: 'tanger/morococ',
    //     tital_job: 'web developer',
    //     years_of_ex: '2 years',
    //     ed_lavel: 'bac + 3',
    //     tag: ['web', 'developer'],
    //   },
    // ];
    // #endregion
  }
  ngOnInit(): void {}
  // #region filter
  filter() {
    this.offres = this.allOffres
    let villeFiltre = this.villeSelect.nativeElement.value
    //
    let regionFiltre = this.regionSelect.nativeElement.value
    //
    let paysFiltre = this.paysSelect.nativeElement.value
    //
    let contratFiltre = this.contratBox._results
    //

    let niveauxEtFiltre = this.niveauxExBox._results
    //
    let niveauxExFiltre = this.niveauxExBox._results
    //
    let langueFiltre = this.langueBox._results
    //
    let secteurFiltre = this.secteurSelect.nativeElement.value
    //
    let searchFiltre = this.searchInput.nativeElement.value
    //
    let dateFiltre = this.dateInput.nativeElement.value

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
  // #endregion
}

// #endregion
