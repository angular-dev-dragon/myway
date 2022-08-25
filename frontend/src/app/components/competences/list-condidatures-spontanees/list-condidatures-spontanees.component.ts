import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-list-condidatures-spontanees',
  templateUrl: './list-condidatures-spontanees.component.html',
  styleUrls: ['./list-condidatures-spontanees.component.scss'],
})
export class ListCondidaturesSpontaneesComponent implements OnInit {
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
