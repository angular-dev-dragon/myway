import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-offres',
  templateUrl: './list-offres.component.html',
  styleUrls: ['./list-offres.component.scss']
})
export class ListOffresComponent implements OnInit {
  offres:any=[{
    Intitule:"Développeur",
    TypeContrat:"CDI",
    NomEntreprise:"Jumia",
    TypeEntreprise:"StartUp",
    Image:"",
    Ville:"Tanger",
    Secteur:"Informatique",
    Date:"2022-02-02",
    Competences:"HTML"
  },
  {
    Intitule:"Développeur",
    TypeContrat:"CDI",
    NomEntreprise:"jumia",
    TypeEntreprise:"StartUp",
    Image:"",
    Ville:"Tanger",
    Secteur:"Informatique",
    Date:"2022-02-02",
    Competences:"HTML"
  },{
    Intitule:"Développeur",
    TypeContrat:"CDI",
    NomEntreprise:"Jumia",
    TypeEntreprise:"StartUp",
    Image:"",
    Ville:"Tanger",
    Secteur:"Informatique",
    Date:"2022-02-02",
    Competences:"HTML"
  },{
    Intitule:"Développeur",
    TypeContrat:"CDI",
    NomEntreprise:"Jumia",
    TypeEntreprise:"StartUp",
    Image:"",
    Ville:"Tanger",
    Secteur:"Informatique",
    Date:"2022-02-02",
    Competences:"HTML"
  },{
    Intitule:"Développeur",
    TypeContrat:"CDI",
    NomEntreprise:"Jumia",
    TypeEntreprise:"StartUp",
    Image:"",
    Ville:"Tanger",
    Secteur:"Informatique",
    Date:"2022-02-02",
    Competences:"HTML"
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
