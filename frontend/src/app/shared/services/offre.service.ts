import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { API } from './api.service'

@Injectable({
  providedIn: 'root',
})
export class OffreService {
  constructor(private http: HttpClient) {
    this.listOffres = this.allOffres;
  }

  allOffres: any = [
    {
      id: '1',
      Intitule: 'AHMED',
      TypeContrat: 'CDI',
      Poste:' Développeur Front-End Développeur Front-End Développeur Front-End',
      TypePoste: 'Emploi',
      NomEntreprise: 'Jumia',
      TypeEntreprise: 'StartUp',
      Image: '',
      ville: 'Tanger',
      Secteur: 'Informatique',
      Date: '2023-02-02',
      Competences: 'HTML',
      Pays: 'Maroc',
      NiveauxEtude: 'Bac',
      NiveauxExperience: 'entre 3 et 4',
      langue: 'Français',
      Region: 'Tanger-Tetouan',
    },
    {
      id: '2',
      Intitule: 'Ingénieur génie civil et minier ',
      TypeContrat: 'Anapec',
      Poste: 'technicien en mécanique et électrique mécanique et électrique',
      TypePoste: 'Stage',
      NomEntreprise: 'Smart automation technologies',
      TypeEntreprise: 'StartUp',
      Image: '',
      ville: 'Tétouan',
      Secteur: 'Informatique',
      Date: '2022-02-02',
      Competences: 'HTML',
      Pays: 'Maroc',
      NiveauxEtude: 'Bac',
      NiveauxExperience: 'entre 3 et 4',
      langue: 'Français',
      Region: 'Tanger-Tetouan',
    },
    {
      id: '3',
      Intitule: 'développeur3',
      TypeContrat: 'CDD',
      Poste: 'Développeur Front-End',
      TypePoste: 'Alternance',
      NomEntreprise: 'Jumia',
      TypeEntreprise: 'StartUp',
      Image: '',
      ville: 'Tanger',
      Secteur: 'Informatique',
      Date: '2000-02-02',
      Competences: 'HTML',
      Pays: 'Algérie',
      NiveauxEtude: 'Bac',
      NiveauxExperience: 'entre 1 et 2',
      langue: ['Français','arabic'],
      Region: 'Tanger-Tetouan',
    },
    {
      id: '4',
      Intitule: 'Développeur',
      TypeContrat: 'A discuter',
      NomEntreprise: 'Jumia',
      Poste: 'Développeur Back-End',
      TypePoste: 'extra',
      TypeEntreprise: 'StartUp',
      Image: '',
      ville: 'Tétouan',
      Secteur: 'Textile',
      Date: '2022-05-02',
      Competences: 'HTML',
      Pays: 'Maroc',
      NiveauxEtude: 'qualification avant bac',
      NiveauxExperience: 'entre 1 et 2',
      langue: 'Arabe',
      Region: 'Grand Casablanca',
    },
    {
      id: '5',
      Intitule: 'Développeur4',
      TypeContrat: 'CDI',
      NomEntreprise: 'Jumia',
      TypeEntreprise: 'StartUp',
      Poste: 'Développeur Back-End',
      TypePoste: 'Emploi',
      Image: '',
      Secteur: 'Électronique',
      Date: '2022-02-02',
      Competences: 'HTML',
      Pays: 'Algérie',
      ville: 'Tanger',
      Region: 'Grand Casablanca',

      NiveauxEtude: 'qualification avant bac',
      NiveauxExperience: "moins d'un ans",
      langue: 'Espagnol',
    },
  ];
  listOffres: any = [];

  filter(
    searchFiltre: string = '',
    secteurFiltre: string,
    paysFiltre: string,
    regionFiltre: string,
    villeFiltre: string,
    dateFiltre: string,
    contratFiltre: any,
    niveauxEtFiltre: any,
    niveauxExFiltre: any,
    langueFiltre: any
    // sort_by_name: string,
    // sort_by_date: string,
  ) {
    this.listOffres = this.allOffres;

    if (searchFiltre != '') {
      this.listOffres = this.listOffres.filter((offre: any) => {
        offre.Intitule.toLowerCase().includes(searchFiltre.toLowerCase());
      });
      return this.allOffres;
    }

    if (paysFiltre != '') {
      this.listOffres = this.listOffres.filter((offre: any) => {
        return offre.Pays == paysFiltre;
      });
    } else if (regionFiltre != '') {
      this.listOffres = this.listOffres.filter((offre: any) => {
        return offre.Region == regionFiltre;
      });
    } else if (villeFiltre != '') {
      this.listOffres = this.listOffres.filter((offre: any) => {
        return offre.ville == villeFiltre;
      });
    } else if (secteurFiltre != '') {
      this.listOffres = this.listOffres.filter((offre: any) => {
        return offre.Secteur == secteurFiltre;
      });
    }

    if (dateFiltre != '') {
      this.listOffres = this.listOffres.filter((offre: any) => {
        return offre.Date == dateFiltre;
      });
    }
    this.checkboxFiltre(contratFiltre, 'TypeContrat');
    this.checkboxFiltre(niveauxEtFiltre, 'NiveauxEtude');
    this.checkboxFiltre(niveauxExFiltre, 'NiveauxExperience');
    this.checkboxFiltre(langueFiltre, 'langue');
  }

  checkboxFiltre(CheckboxList: any, label: any) {
    let newList2;
    let newList3: any = this.listOffres;
    let isFirstTime: Boolean = true;
    CheckboxList.map((filtre: any) => {
      if (filtre.nativeElement.checked) {
        if (isFirstTime == true) {
          isFirstTime = false;
          newList3 = [];
        }
        newList2 = this.listOffres;
        newList2 = newList2.filter((offre: any) => {
          return offre[label] == filtre.nativeElement.value;
        });

        newList2.map((list: any) => {
          newList3.push(list);
        });
      }
    });
    this.listOffres = newList3;
  }

  getlist() {

    return this.listOffres;

  }

  getByIdWishList(ids: any) {
    return this.http.get<any>(API + '/candidat/wishList', {
      headers: new HttpHeaders({
        ids,
      }),
    });
  }
}
