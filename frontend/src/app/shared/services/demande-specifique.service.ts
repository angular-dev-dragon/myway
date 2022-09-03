import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class DemandeSpecifiqueService {
  listDemandes: any = [];
  constructor() {
    this.listDemandes = this.listAllDemandes;
  }
  listAllDemandes: any = [
    {
      Intitule: 'Développeur',
      TypeContrat: 'Stage',
      Poste: 'Developpeur Full Stack (MEAN) ',
      TypePoste: 'Stage Alternance',

      Image: '',
      Ville: 'Tanger',
      Secteur: 'Informatique',
      dateDisponibilite: '2023-02-02',

      Pays: 'Maroc',
      NiveauxEtude: 'Bac',
      NiveauxExperience: 'entre 3 et 4',
      langue: 'Français',
    },
    {
      Intitule: 'Développeur',
      TypeContrat: 'Stage',
      Poste: 'Developpeur Full Stack (MEAN) ',
      TypePoste: 'Stage Alternance',

      Image: '',
      Ville: 'Tanger',
      Secteur: 'Informatique',
      dateDisponibilite: '2023-02-02',

      Pays: 'Maroc',
      NiveauxEtude: 'Bac',
      NiveauxExperience: 'entre 3 et 4',
      langue: 'Français',
    },
  ];

  filter(
    searchFiltre: string = '',
    secteurFiltre: string,
    paysFiltre: string,
    regionFiltre: string,
    villeFiltre: string,
    dateFiltre: string,
    contratFiltre: any,
    niveauxEtFiltre: any,
    niveauxExFiltre: any
  ) {
    this.listDemandes = this.listAllDemandes;
    console.log('entred');

    if (searchFiltre != '') {
      this.listDemandes = this.listDemandes.filter((offre: any) => {
        return offre.Intitule.toLowerCase().includes(
          searchFiltre.toLowerCase()
        );
      });
    }
    if (paysFiltre != '') {
      this.listDemandes = this.listDemandes.filter((offre: any) => {
        return offre.Pays == paysFiltre;
      });
    } else if (regionFiltre != '') {
      this.listDemandes = this.listDemandes.filter((offre: any) => {
        return offre.Region == regionFiltre;
      });
    } else if (villeFiltre != '') {
      this.listDemandes = this.listDemandes.filter((offre: any) => {
        return offre.Ville == villeFiltre;
      });
    } else if (secteurFiltre != '') {
      this.listDemandes = this.listDemandes.filter((offre: any) => {
        return offre.Secteur == secteurFiltre;
      });
    }
    if (dateFiltre != '') {
      this.listDemandes = this.listDemandes.filter((offre: any) => {
        return offre.dateDisponibilite == dateFiltre;
      });
    }
    -this.checkboxFiltre(contratFiltre, 'TypeContrat');
    this.checkboxFiltre(niveauxEtFiltre, 'NiveauxEtude');
    this.checkboxFiltre(niveauxExFiltre, 'NiveauxExperience');
  }

  checkboxFiltre(CheckboxList: any, label: any) {
    let newList2;
    let newList3: any = this.listDemandes;
    let isFirstTime: Boolean = true;
    CheckboxList.map((filtre: any) => {
      if (filtre.nativeElement.checked) {
        if (isFirstTime == true) {
          isFirstTime = false;
          newList3 = [];
        }
        newList2 = this.listDemandes;
        newList2 = newList2.filter((offre: any) => {
          return offre[label] == filtre.nativeElement.value;
        });

        newList2.map((list: any) => {
          newList3.push(list);
        });
      }
    });
    this.listDemandes = newList3;
  }

  getAllInfo() {
    return this.listAllDemandes;
  }
}
