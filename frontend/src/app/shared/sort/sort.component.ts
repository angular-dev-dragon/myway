import { RecruteurService } from 'src/app/shared/services/recruteur.service';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core'

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent implements OnInit {
  @Input() data: any = [];
  @Input() type: string = '';

  @Input() pageName: string = '';

  @Input() sortByName: boolean = true;
  @Input() sortByDate: boolean = true;

  constructor(private recruteurService:RecruteurService) {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    this.sort_by_name_value = 'sort';
  }
  sort_by_name_value: string = 'sort';
  sort_by_date_value: string = 'sort';

  sortByNameFunction(): any {
    // #region Offre
    console.log('sortByNameFunction');

    if (this.pageName == 'offre') {
      if (this.sort_by_name_value == 'sort-up') {
        this.data.sort((a: any, b: any) =>
          a.Intitule.toLowerCase() > b.Intitule.toLowerCase() ? 1 : -1
        );
        this.sort_by_name_value = 'sort-down';
      } else if (this.sort_by_name_value == 'sort-down') {
        this.data.sort((a: any, b: any) =>
          a.Intitule.toLowerCase() < b.Intitule.toLowerCase() ? 1 : -1
        );
        this.sort_by_name_value = 'sort-up';
      } else if (this.sort_by_name_value == 'sort') {
        this.sort_by_name_value = 'sort-down';
      }
    }
    // #endregion
    // #region condidat
    else if (this.pageName == 'condidat') {
      if (this.sort_by_name_value == 'sort-up') {
        this.data.sort((a: any, b: any) =>
          a.info.name.first_name.toLowerCase() >
          b.info.name.first_name.toLowerCase()
            ? 1
            : -1
        );
        this.sort_by_name_value = 'sort-down';
      } else if (this.sort_by_name_value == 'sort-down') {
        this.data.sort((a: any, b: any) =>
          a.info.name.first_name.toLowerCase() <
          b.info.name.first_name.toLowerCase()
            ? 1
            : -1
        );
        this.sort_by_name_value = 'sort-up';
      } else if (this.sort_by_name_value == 'sort') {
        this.sort_by_name_value = 'sort-down';
      }
    }
    // #endregion
    // #region metier
    else if (this.pageName == 'metier') {
      if (this.sort_by_name_value == 'sort-up') {
        this.data.sort((a: any, b: any) =>
          a.Intitule.toLowerCase() > b.Intitule.toLowerCase() ? 1 : -1
        );
        this.sort_by_name_value = 'sort-down';
      } else if (this.sort_by_name_value == 'sort-down') {
        this.data.sort((a: any, b: any) =>
          a.Intitule.toLowerCase() < b.Intitule.toLowerCase() ? 1 : -1
        );
        this.sort_by_name_value = 'sort-up';
      } else if (this.sort_by_name_value == 'sort') {
        this.sort_by_name_value = 'sort-down';
      }
    }
    // #endregion
    // #region quiz
    else if (this.pageName == 'quiz') {
      if (this.sort_by_name_value == 'sort-up') {
        this.data.sort((a: any, b: any) =>
          a.titre.toLowerCase() > b.titre.toLowerCase() ? 1 : -1
        );
        this.sort_by_name_value = 'sort-down';
      } else if (this.sort_by_name_value == 'sort-down') {
        this.data.sort((a: any, b: any) =>
          a.titre.toLowerCase() < b.titre.toLowerCase() ? 1 : -1
        );
        this.sort_by_name_value = 'sort-up';
      } else if (this.sort_by_name_value == 'sort') {
        this.sort_by_name_value = 'sort-down';
      }
    }
    // #endregion
    // #region demande specifique
    else if (this.pageName == 'demande specifique') {
      if (this.sort_by_name_value == 'sort-up') {
        this.data.sort((a: any, b: any) =>
          a.Intitule.toLowerCase() > b.Intitule.toLowerCase() ? 1 : -1
        );
        this.sort_by_name_value = 'sort-down';
      } else if (this.sort_by_name_value == 'sort-down') {
        this.data.sort((a: any, b: any) =>
          a.Intitule.toLowerCase() < b.Intitule.toLowerCase() ? 1 : -1
        );
        this.sort_by_name_value = 'sort-up';
      } else if (this.sort_by_name_value == 'sort') {
        this.sort_by_name_value = 'sort-down';
      }
    }
    // #endregion
    // #region condidature Spontanee
    else if (this.pageName == 'condidature spontanee') {
      if (this.sort_by_name_value == 'sort-up') {
        this.data.sort((a: any, b: any) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
        );
        this.sort_by_name_value = 'sort-down';
      } else if (this.sort_by_name_value == 'sort-down') {
        this.data.sort((a: any, b: any) =>
          a.titre.toLowerCase() < b.titre.toLowerCase() ? 1 : -1
        );
        this.sort_by_name_value = 'sort-up';
      } else if (this.sort_by_name_value == 'sort') {
        this.sort_by_name_value = 'sort-down';
      }
    }
    // #endregion
    // #region condidature recruteur
    else if (this.pageName == 'recruteur') {
      if (this.sort_by_name_value == 'sort-up') {
        this.recruteurService.listRecruteur.sort((a: any, b: any) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
        );
        this.sort_by_name_value = 'sort-down';
      } else if (this.sort_by_name_value == 'sort-down') {
        this.recruteurService.listRecruteur.sort((a: any, b: any) =>
          a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
        );
        this.sort_by_name_value = 'sort-up';
      } else if (this.sort_by_name_value == 'sort') {
        this.sort_by_name_value = 'sort-down';
      }
    }
    // #endregion
    // #region Evenement
    else if (this.pageName == 'evenement') {
      if (this.sort_by_name_value == 'sort-up') {
        this.data.sort((a: any, b: any) =>
          a.titre.toLowerCase() > b.titre.toLowerCase() ? 1 : -1
        );
        this.sort_by_name_value = 'sort-down';
      } else if (this.sort_by_name_value == 'sort-down') {
        this.data.sort((a: any, b: any) =>
          a.titre.toLowerCase() < b.titre.toLowerCase() ? 1 : -1
        );
        this.sort_by_name_value = 'sort-up';
      } else if (this.sort_by_name_value == 'sort') {
        this.sort_by_name_value = 'sort-down';
      }
    }
    // #endregion
    // #region blog
    else if (this.pageName == 'blog') {
      if (this.sort_by_name_value == 'sort-up') {
        this.data.sort((a: any, b: any) =>
          a.nom.toLowerCase() > b.nom.toLowerCase() ? 1 : -1
        );
        this.sort_by_name_value = 'sort-down';
      } else if (this.sort_by_name_value == 'sort-down') {
        this.data.sort((a: any, b: any) =>
          a.nom.toLowerCase() < b.nom.toLowerCase() ? 1 : -1
        );
        this.sort_by_name_value = 'sort-up';
      } else if (this.sort_by_name_value == 'sort') {
        this.sort_by_name_value = 'sort-down';
      }
    }
    // #endregion
    // #region conseils-pratique
    else if (this.pageName == 'conseils pratique') {
      if (this.sort_by_name_value == 'sort-up') {
        this.data.sort((a: any, b: any) =>
          a.titre.toLowerCase() > b.titre.toLowerCase() ? 1 : -1
        );
        this.sort_by_name_value = 'sort-down';
      } else if (this.sort_by_name_value == 'sort-down') {
        this.data.sort((a: any, b: any) =>
          a.titre.toLowerCase() < b.titre.toLowerCase() ? 1 : -1
        );
        this.sort_by_name_value = 'sort-up';
      } else if (this.sort_by_name_value == 'sort') {
        this.sort_by_name_value = 'sort-down';
      }
    }
    // #endregion
    // #region adresses utiles
    else if (this.pageName == 'adresses utiles') {
      if (this.sort_by_name_value == 'sort-up') {
        this.data.sort((a: any, b: any) =>
          a.translations['fr'].__designation.toLowerCase() >
          b.translations['fr'].__designation.toLowerCase()
            ? 1
            : -1
        );
        this.sort_by_name_value = 'sort-down';
      } else if (this.sort_by_name_value == 'sort-down') {
        this.data.sort(
          (a: any, b: any) =>
            a.translations['fr'].__designation.toLowerCase() <
            b.translations['fr'].__designation.toLowerCase()
        );
        this.sort_by_name_value = 'sort-up';
      } else if (this.sort_by_name_value == 'sort') {
        this.sort_by_name_value = 'sort-down';
      }
    }
    // #endregion
    // #region liens utiles
    else if (this.pageName == 'liens utiles') {
      if (this.sort_by_name_value == 'sort-up') {
        this.data.sort((a: any, b: any) =>
          a.translations['fr'].__designation.toLowerCase() >
          b.translations['fr'].__designation.toLowerCase()
            ? 1
            : -1
        );
        this.sort_by_name_value = 'sort-down';
      } else if (this.sort_by_name_value == 'sort-down') {
        this.data.sort(
          (a: any, b: any) =>
            a.translations['fr'].__designation.toLowerCase() <
            b.translations['fr'].__designation.toLowerCase()
        );
        this.sort_by_name_value = 'sort-up';
      } else if (this.sort_by_name_value == 'sort') {
        this.sort_by_name_value = 'sort-down';
      }
    }
    // #endregion
    // #region documents et formulaire
    else if (this.pageName == 'documents et formulaire') {
      if (this.sort_by_name_value == 'sort-up') {
        this.data.sort((a: any, b: any) =>
          a.translations['fr'].__titre.toLowerCase() >
          b.translations['fr'].__titre.toLowerCase()
            ? 1
            : -1
        );
        this.sort_by_name_value = 'sort-down';
      } else if (this.sort_by_name_value == 'sort-down') {
        this.data.sort(
          (a: any, b: any) =>
            a.translations['fr'].__titre.toLowerCase() <
            b.translations['fr'].__titre.toLowerCase()
        );
        this.sort_by_name_value = 'sort-up';
      } else if (this.sort_by_name_value == 'sort') {
        this.sort_by_name_value = 'sort-down';
      }
    }
    // #endregion
    // #region forum
    else if (this.pageName == 'forum') {
      if (this.sort_by_name_value == 'sort-up') {
        this.data.sort((a: any, b: any) =>
          a.translations['fr'].__titre.toLowerCase() >
          b.translations['fr'].__titre.toLowerCase()
            ? 1
            : -1
        );
        this.sort_by_name_value = 'sort-down';
      } else if (this.sort_by_name_value == 'sort-down') {
        this.data.sort(
          (a: any, b: any) =>
            a.translations['fr'].__titre.toLowerCase() <
            b.translations['fr'].__titre.toLowerCase()
        );
        this.sort_by_name_value = 'sort-up';
      } else if (this.sort_by_name_value == 'sort') {
        this.sort_by_name_value = 'sort-down';
      }
    }
    // #endregion
    // #region Blogeurs
    else if (this.pageName == 'blogeurs') {
      if (this.sort_by_name_value == 'sort-up') {
        console.log('before', this.sort_by_name_value);

        this.data.sort((a: any, b: any) =>
          a.nom.toLowerCase() > b.nom.toLowerCase() ? 1 : -1
        );
        this.sort_by_name_value = 'sort-down';
        console.log('after', this.sort_by_name_value);
      } else if (this.sort_by_name_value == 'sort-down') {
        this.data.sort((a: any, b: any) =>
          a.nom.toLowerCase() < b.nom.toLowerCase() ? 1 : -1
        );
        this.sort_by_name_value = 'sort-up';
      } else if (this.sort_by_name_value == 'sort') {
        this.sort_by_name_value = 'sort-down';
      }
    }
    // #endregion
  }

  sortByDateFunction(i: string) {
    if (i == 'sort-down') {
      this.sort_by_date_value = 'sort-up';
      this.data.sort((a: any, b: any) =>
        a[this.type] > b[this.type] ? 1 : -1
      );
    } else if (i == 'sort-up') {
      this.sort_by_date_value = 'sort-down';
      this.data.sort((a: any, b: any) =>
        a[this.type] < b[this.type] ? 1 : -1
      );
    }
  }
}
