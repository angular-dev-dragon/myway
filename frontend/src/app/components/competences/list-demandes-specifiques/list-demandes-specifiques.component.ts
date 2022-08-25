import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-list-demandes-specifiques',
  templateUrl: './list-demandes-specifiques.component.html',
  styleUrls: ['./list-demandes-specifiques.component.scss'],
})
export class ListDemandesSpecifiquesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  listDemandes: any = [
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
  ]
}
