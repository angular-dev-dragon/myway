import { filter } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class RecruteurService {
  constructor(private http: HttpClient) {
    this.listRecruteur = this.allRecruteur;
  }
  getAllRecruteurs() {
    return (this.allRecruteur = this.http.get(API + '/recruteur'));
  }
  getRecruteurCondidaturesSpontanees() {
    return this.http.get(API + '/recruteur/condidatures-spontanees');
  }
  getRecruteurById(id: any) {
    return this.http.get(API + '/recruteur/' + id);
  }
  public postReview(review: any, id: any) {
    return this.http.post(API + '/recruteur/review/' + id, review);
  }
  public postEntretien(entretien: any, id: any) {
    return this.http.post(API + '/recruteur/entretien/' + id, entretien);
  }
  public postCondidatureSpontanee(condidature: any, id: any) {
    return this.http.post(
      API + '/recruteur/condidature-spontanee/' + id,
      condidature
    );
  }

  allRecruteur: any = [
    // #region just one
    {
      id: '1',
      logo: 'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/8124/logo.png?1469002464',

      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/6192405/index.png?1659520006',
      title: 'Patronas',
      type: 'Multinational',
      salaries: '354',
      caption: 'Une Compagnie intégrée multi-énergies',
      secteur: 'Informatique',
      Pays: 'maroc',
      Ville: 'taza',
      Region: 'Grand taza',
    },
    {
      id: '2',

      logo: 'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/4537715/logo.png?1622715420',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/4548600/index.png?1623058769',
      title: 'Aramco S.A',
      type: 'Grande Societe',
      salaries: '100',
      caption: 'Une Compagnie intégrée multi-énergies',
      secteur: 'Agriculture',
      Pays: 'use',
      Ville: 'tata',
      Region: 'Grand tata',
    },

    {
      id: '3',

      logo: 'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/3195090/logo.png?1587552503',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5310523/index.png?1640179035',
      title: 'Total Energies',
      type: 'Start Up',
      salaries: '50',
      Pays: 'Algerie',
      Ville: 'tata',
      caption: 'Une Compagnie intégrée multi-énergies',
      secteur: 'Informatique',
    },
    {
      id: '4',

      logo: 'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/1007848/logo.png?1558457886',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5027463/index.png?1634721315',
      title: 'Total Energies',
      type: 'Multinational',
      salaries: '458',
      caption: 'Une Compagnie intégrée multi-énergies',
      secteur: 'Électronique',
      Pays: 'use',
      Ville: '789789',
      Region: 'Grand tata',
    },
    {
      id: '5',

      logo: 'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/69883/logo.png?1621953434',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/6179891/index.png?1659017908',
      title: 'Total Energies',
      type: 'Start Up',
      salaries: '13',
      caption: 'Une Compagnie intégrée multi-énergies',
      secteur: 'Informatique',
      Pays: 'use',

      Ville: 'Tanger',
      Region: 'Tanger-Tetouan',
    },
    {
      id: '6',

      logo: 'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/8124/logo.png?1469002464',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/6192405/index.png?1659520006',
      title: 'Patronas',
      type: 'Multinational',
      salaries: '354',
      caption: 'Une Compagnie intégrée multi-énergies',
      secteur: 'Informatique',
      Pays: 'use',
      Ville: 'tata',
      Region: 'Grand tata',
    },
    {
      id: '7',

      logo: 'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/4537715/logo.png?1622715420',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/4548600/index.png?1623058769',
      title: 'Aramco S.A',
      type: 'Grande Societe',
      salaries: '100',
      caption: 'Une Compagnie intégrée multi-énergies',
      secteur: 'Agriculture',
      Pays: 'use',
      Ville: 't42345234523453252345ttta',
      Region: 'Grand Casablanca',
    },

    {
      id: '8',

      logo: 'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/3195090/logo.png?1587552503',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5310523/index.png?1640179035',
      title: 'Total Energies',
      type: 'Start Up',
      salaries: '50',
      Pays: 'Algerie',
      Ville: 'Casablanca',
      caption: 'Une Compagnie intégrée multi-énergies',
      secteur: 'Informatique',
    },
    {
      id: '9',

      logo: 'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/1007848/logo.png?1558457886',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/5027463/index.png?1634721315',
      title: 'Total Energies',
      type: 'Multinational',
      salaries: '458',
      caption: 'Une Compagnie intégrée multi-énergies',
      secteur: 'Électronique',
      Pays: 'use',
      Ville: 'Casablanca',
      Region: 'Grand Casablanca',
    },
    // #endregion

    {
      id: '10',

      logo: 'https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/69883/logo.png?1621953434',
      imageBg:
        'https://d1guu6n8gz71j.cloudfront.net/system/asset/covers/6179891/index.png?1659017908',
      title: 'Total Energies',
      type: 'Start Up',
      salaries: '13',
      caption: 'Une Compagnie intégrée multi-énergies',
      secteur: 'Informatique',
      Pays: 'use',
      Ville: 'Tanger',
      Region: 'Tanger-Tetouan',
    },
  ];

  secteurFiltre: string = '';
  paysFiltre: string = '';
  regionFiltre: string = '';
  villeFiltre: string = '';
  typeSociete: any = [];
  searchValue: string = '';
  listRecruteur: any[] = [];
  path: any[] = ['Region', 'Ville', 'secteur', 'Pays'];
  indexpath: number = 0;
  index: number = 0;

  getlist() {
    console.log('bloblo');

    console.log(this.listRecruteur);
    return this.allRecruteur;
  }

  // a: any = this.listRecruteur[this.index][this.Region[this.indexpath]];

  // b(path: string, data: any , ): any {
  //   let [current, ...child] = path.split('.');
  //   if (child?.length) {
  //     return this.b(child.join('.'), data[current]);
  //   }
  //   if (current) {
  //    data[current].filter((i: any) => {
  //       return .toLowerCase() == regionFiltre;

  //   }
  //   return data;
  // }

  //  g(path: string, data: any): any {
  //     let [current, ...child] = path.split('.');
  //     if (child?.length) {
  //       return this.g(child.join('.'), data[current]);
  //     }
  //     if (current) {
  //       return data[current];
  //     }
  //     return data;
  //   }

  // this.listRecruteur = this.listRecruteur.filter((i: any, ) => {
  //       return this.g('ville',i).toLowerCase() == this.paysFiltre.toLowerCase();
  //     });
  // filter(
  //   searchFiltre: string = '',
  //   secteurFiltre: string,
  //   paysFiltre: string,
  //   regionFiltre: string,
  //   villeFiltre: string,
  //   typeSociete: any
  // ) {

  // if (searchFiltre != '') {
  //   this.listRecruteur = this.listRecruteur.filter((offre: any) => {
  //     return offre.title.toLowerCase().includes(searchFiltre.toLowerCase());
  //   });
  // }

  //   if (paysFiltre != '') {
  //     this.listRecruteur = this.listRecruteur.filter((i: any, index) => {
  //       return i[this.path[0]].toLowerCase() == paysFiltre.toLowerCase();
  //     });
  //   } else if (regionFiltre != '') {
  //     this.listRecruteur = this.listRecruteur.filter((i: any, index) => {
  //       return i[this.path[1]].toLowerCase() == regionFiltre;
  //     });
  //   } else if (villeFiltre != '') {
  //     this.listRecruteur = this.listRecruteur.filter((i: any, index) => {
  //       return i[this.path[2]] == villeFiltre;
  //     });
  //   } else if (secteurFiltre != '') {
  //     this.listRecruteur = this.listRecruteur.filter((i: any, index) => {
  //       return i[this.path[3]] == secteurFiltre;
  //     });
  //   }

  //   this.checkboxFiltre(typeSociete, 'type');

  //   if (this.searchValue != '') {
  //     this.listRecruteur = this.listRecruteur.filter((data: any) => {
  //       return data.title
  //         .toLowerCase()
  //         .includes(this.searchValue.toLowerCase());
  //     });
  //   }
  //   console.log('end function filter globale');
  // }

  // checkboxFiltre(CheckboxList: any, label: any) {
  //   let newList2;
  //   let newList3: any = this.listRecruteur;
  //   let isFirstTime: Boolean = true;
  //   CheckboxList.map((filtre: any) => {
  //     if (filtre.nativeElement.checked) {
  //       if (isFirstTime == true) {
  //         isFirstTime = false;
  //         newList3 = [];
  //       }
  //       newList2 = this.listRecruteur;
  //       newList2 = newList2.filter((offre: any) => {
  //         return offre[label] == filtre.nativeElement.value;
  //       });

  //       newList3.push(...newList2);
  //     }
  //   });
  //   this.listRecruteur = newList3;
  // }
  // getAllRecruteursInfo() {
  //   return this.listRecruteur;
  // }

  // filterByText(text: string) {
  //   this.searchValue = text;

  //   this.filter(
  //     '',
  //     this.secteurFiltre,
  //     this.paysFiltre,
  //     this.regionFiltre,
  //     this.villeFiltre,
  //     this.typeSociete
  //   );
  // }

  // getByIdWishList(ids: any) {
  //   return this.http.get<any>(
  //     API + '/recruteur/wishList',

  //     {
  //       headers: new HttpHeaders({
  //         ids,
  //       }),
  //     }
  //   );
  // }
}
