import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent implements OnInit {
  @Input() data: any = []
  @Input() type: string = ''

  @Input() pageName: string = ''

  @Input() sortByName: boolean = true
  @Input() sortByDate: boolean = true

  constructor() {}

  ngOnInit(): void {}
  sort_by_name_value: string = 'sort'
  sort_by_date_value: string = 'date'

  sortByNameFunction() {
    // #region Offre
    if (this.pageName == 'offre') {
      if ((this.sort_by_name_value = 'sort-up')) {
        this.data.sort((a: any, b: any) =>
          a.Intitule.toLowerCase() > b.Intitule.toLowerCase() ? 1 : -1,
        )
        this.sort_by_name_value = 'sort-down'
      } else {
        this.data.sort((a: any, b: any) =>
          a.Intitule.toLowerCase() < b.Intitule.toLowerCase() ? 1 : -1,
        )
        this.sort_by_name_value = 'sort-up'
      }
    }
    // #endregion
    // #region condidat
    else if (this.pageName == 'condidat') {
      if ((this.sort_by_name_value = 'sort-up')) {
        this.data.sort((a: any, b: any) =>
          a.info.name.first_name.toLowerCase() >
          b.info.name.first_name.toLowerCase()
            ? 1
            : -1,
        )
        this.sort_by_name_value = 'sort-down'
      } else {
        this.data.sort((a: any, b: any) =>
          a.info.name.first_name.toLowerCase() <
          b.info.name.first_name.toLowerCase()
            ? 1
            : -1,
        )
        this.sort_by_name_value = 'sort-up'
      }
    }
    // #endregion
    // #region metier
    else if (this.pageName == 'metier') {
      if ((this.sort_by_name_value = 'sort-up')) {
        this.data.sort((a: any, b: any) =>
          a.Intitule.toLowerCase() > b.Intitule.toLowerCase() ? 1 : -1,
        )
        this.sort_by_name_value = 'sort-down'
      } else {
        this.data.sort((a: any, b: any) =>
          a.Intitule.toLowerCase() < b.Intitule.toLowerCase() ? 1 : -1,
        )
        this.sort_by_name_value = 'sort-up'
      }
    }
    // #endregion

    // #region offres
    else if (this.pageName == 'quiz') {
      if ((this.sort_by_name_value = 'sort-up')) {
        this.data.sort((a: any, b: any) =>
          a.titre.toLowerCase() > b.titre.toLowerCase() ? 1 : -1,
        )
        this.sort_by_name_value = 'sort-down'
      } else {
        this.data.sort((a: any, b: any) =>
          a.titre.toLowerCase() < b.titre.toLowerCase() ? 1 : -1,
        )
        this.sort_by_name_value = 'sort-up'
      }
    }
    // #endregion
    // #region demande specifique
    else if (this.pageName == 'demande specifique') {
      if ((this.sort_by_name_value = 'sort-up')) {
        this.data.sort((a: any, b: any) =>
          a.Intitule.toLowerCase() > b.Intitule.toLowerCase() ? 1 : -1,
        )
        this.sort_by_name_value = 'sort-down'
      } else {
        this.data.sort((a: any, b: any) =>
          a.Intitule.toLowerCase() < b.Intitule.toLowerCase() ? 1 : -1,
        )
        this.sort_by_name_value = 'sort-up'
      }
    }
    // #endregion
    // #region condidature Spontanee
    else if (this.pageName == 'condidature spontanee') {
      if ((this.sort_by_name_value = 'sort-up')) {
        this.data.sort((a: any, b: any) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1,
        )
        this.sort_by_name_value = 'sort-down'
      } else {
        this.data.sort((a: any, b: any) =>
          a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1,
        )
        this.sort_by_name_value = 'sort-up'
      }
    }
    // #endregion
    // #region condidature recruteur
    else if (this.pageName == 'recruteur') {
      if ((this.sort_by_name_value = 'sort-up')) {
        this.data.sort((a: any, b: any) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1,
        )
        this.sort_by_name_value = 'sort-down'
      } else {
        this.data.sort((a: any, b: any) =>
          a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1,
        )
        this.sort_by_name_value = 'sort-up'
      }
    }
    // #endregion

    // #region Evenement
    else if (this.pageName == 'evenement') {
      if ((this.sort_by_name_value = 'sort-up')) {
        this.data.sort((a: any, b: any) =>
          a.titre.toLowerCase() > b.titre.toLowerCase() ? 1 : -1,
        )
        this.sort_by_name_value = 'sort-down'
      } else {
        this.data.sort((a: any, b: any) =>
          a.titre.toLowerCase() < b.titre.toLowerCase() ? 1 : -1,
        )
        this.sort_by_name_value = 'sort-up'
      }
    }
    // #endregion
    // #region blog
    else if (this.pageName == 'blog') {
      if ((this.sort_by_name_value = 'sort-up')) {
        this.data.sort((a: any, b: any) =>
          a.nom.toLowerCase() > b.nom.toLowerCase() ? 1 : -1,
        )
        this.sort_by_name_value = 'sort-down'
      } else {
        this.data.sort((a: any, b: any) =>
          a.nom.toLowerCase() < b.nom.toLowerCase() ? 1 : -1,
        )
        this.sort_by_name_value = 'sort-up'
      }
    }
    // #endregion

    // #region conseils-pratique
    else if (this.pageName == 'conseils pratique') {
      if ((this.sort_by_name_value = 'sort-up')) {
        this.data.sort((a: any, b: any) =>
          a.titre.toLowerCase() > b.titre.toLowerCase() ? 1 : -1,
        )
        this.sort_by_name_value = 'sort-down'
      } else {
        this.data.sort((a: any, b: any) =>
          a.titre.toLowerCase() < b.titre.toLowerCase() ? 1 : -1,
        )
        this.sort_by_name_value = 'sort-up'
      }
    }
    // #endregion
    // #region adresses utiles
    else if (this.pageName == 'adresses utiles') {
      if ((this.sort_by_name_value = 'sort-up')) {
        this.data.sort((a: any, b: any) =>
          a.translations['fr'].__designation.toLowerCase() >
          b.translations['fr'].__designation.toLowerCase()
            ? 1
            : -1,
        )
        this.sort_by_name_value = 'sort-down'
      } else {
        this.data.sort((a: any, b: any) =>
          a.translations['fr'].__designation.toLowerCase() <
          b.translations['fr'].__designation.toLowerCase()
            ? 1
            : -1,
        )
        this.sort_by_name_value = 'sort-up'
      }
    }
    // #endregion

    // #region liens utiles
    else if (this.pageName == 'liens utiles') {
      if ((this.sort_by_name_value = 'sort-up')) {
        this.data.sort((a: any, b: any) =>
          a.translations['fr'].__designation.toLowerCase() >
          b.translations['fr'].__designation.toLowerCase()
            ? 1
            : -1,
        )
        this.sort_by_name_value = 'sort-down'
      } else {
        this.data.sort((a: any, b: any) =>
          a.translations['fr'].__designation.toLowerCase() <
          b.translations['fr'].__designation.toLowerCase()
            ? 1
            : -1,
        )
        this.sort_by_name_value = 'sort-up'
      }
    }
    // #endregion

    // #region documents et formulaire
    else if (this.pageName == 'documents et formulaire') {
      if ((this.sort_by_name_value = 'sort-up')) {
        this.data.sort((a: any, b: any) =>
          a.translations['fr'].__titre.toLowerCase() >
          b.translations['fr'].__titre.toLowerCase()
            ? 1
            : -1,
        )
        this.sort_by_name_value = 'sort-down'
      } else {
        this.data.sort((a: any, b: any) =>
          a.translations['fr'].__titre.toLowerCase() <
          b.translations['fr'].__titre.toLowerCase()
            ? 1
            : -1,
        )
        this.sort_by_name_value = 'sort-up'
      }
    }
    // #endregion

    // #region forum
    else if (this.pageName == 'forum') {
      if ((this.sort_by_name_value = 'sort-up')) {
        this.data.sort((a: any, b: any) =>
          a.translations['fr'].__titre.toLowerCase() >
          b.translations['fr'].__titre.toLowerCase()
            ? 1
            : -1,
        )
        this.sort_by_name_value = 'sort-down'
      } else {
        this.data.sort((a: any, b: any) =>
          a.translations['fr'].__titre.toLowerCase() <
          b.translations['fr'].__titre.toLowerCase()
            ? 1
            : -1,
        )
        this.sort_by_name_value = 'sort-up'
      }
    }
    // #endregion

    // #region Blogeurs
    else if (this.pageName == 'blogeurs') {
      if ((this.sort_by_name_value = 'sort-up')) {
        this.data.sort((a: any, b: any) =>
          a.nom.toLowerCase() > b.nom.toLowerCase() ? 1 : -1,
        )
        this.sort_by_name_value = 'sort-down'
      } else {
        this.data.sort((a: any, b: any) =>
          a.nom.toLowerCase() < b.nom.toLowerCase() ? 1 : -1,
        )
        this.sort_by_name_value = 'sort-up'
      }
    }
    // #endregion
  }

  sort_by_date(i: string) {
    if (i == 'sort-down') {
      this.sort_by_date_value = 'sort-up'
      this.data.sort((a: any, b: any) => (a[this.type] > b[this.type] ? 1 : -1))
    } else if (i == 'sort-up') {
      this.sort_by_date_value = 'sort-down'
      this.data.sort((a: any, b: any) => (a[this.type] < b[this.type] ? 1 : -1))
    }
  }
}
