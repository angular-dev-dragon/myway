import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { API } from './api.service'

@Injectable({
  providedIn: 'root',
})
export class LienUtileService {
  listlienUtiles: any;
  constructor(private http: HttpClient) {
    this.listlienUtiles = this.lienUtiles;
  }
  public getLien(): Observable<any> {
    return this.http.get<any>(API + '/lien-utile');
  }
  lienUtiles: any = [
    {
      commentaires_internes: [],
      translations: {
        fr: {
          __designation: 'Enim velit molestias Désignation',
          __descriptif:
            'Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni ',
          __services: [
            'Lorem Ips   opositionum dolor sit amet, consectetur adipiscing',
            'Lorem Ips opositionum dolor sit amet, consectetur',
            'Etiam dolor sit amet, consectetur adipiscing',
            'Etiam dolor sit amet, consectetur adipiscing',
          ],
        },
      },
      valeur_lien: 'www.google.com/searchnt',
      etat_validation: 'en cours de publication',
      etat_objet: 'active',
      image:
        'http://localhost:3600/uploads/images/lien_utile/image-1647446003251.jpg',
    },
    {
      commentaires_internes: [],
      translations: {
        fr: {
          __designation: 'Enim velit molestias Désignation',
          __descriptif:
            'Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni ',
          __services: [],
        },
      },
      valeur_lien: 'www.google.com/searchnt',
      etat_validation: 'en cours de publication',
      etat_objet: 'active',
      image:
        'http://localhost:3600/uploads/images/lien_utile/image-1647446003251.jpg',
    },
    {
      commentaires_internes: [],
      translations: {
        fr: {
          __designation: 'Enim velit molestias Désignation',
          __descriptif:
            'Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni ',
          __services: [],
        },
      },
      valeur_lien: 'www.google.com/searchnt',
      etat_validation: 'en cours de publication',
      etat_objet: 'active',
      image:
        'http://localhost:3600/uploads/images/lien_utile/image-1647446003251.jpg',
    },
    {
      commentaires_internes: [],
      translations: {
        fr: {
          __designation: 'Enim velit molestias Désignation',
          __descriptif:
            'Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni ',
          __services: [],
        },
      },
      valeur_lien: 'www.google.com/searchnt',
      etat_validation: 'en cours de publication',
      etat_objet: 'active',
      image:
        'http://localhost:3600/uploads/images/lien_utile/image-1647446003251.jpg',
    },
    {
      commentaires_internes: [],
      translations: {
        fr: {
          __designation: 'Enim velit molestias Désignation',
          __descriptif:
            'Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni Autem voluptate veni ',
          __services: [],
        },
      },
      valeur_lien: 'www.google.com/searchnt',
      etat_validation: 'en cours de publication',
      etat_objet: 'active',
      image:
        'http://localhost:3600/uploads/images/lien_utile/image-1647446003251.jpg',
    },
  ];

  getlist() {
    return this.listlienUtiles;
  }
}
