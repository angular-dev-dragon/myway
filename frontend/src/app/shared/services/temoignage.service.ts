import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { API } from './api.service'

@Injectable({
  providedIn: 'root',
})
export class TemoignageService {
  listcomments: any;

  constructor(private http: HttpClient) {
    this.listcomments = this.allComments;
  }

  public getTemoigne() {
    return this.http.get<any>(API + '/temoigne/');
  }

  public getTemoigneById(id: string) {
    return this.http.get<any>(API + '/temoigne/' + id);
  }
  public postTemoignage(review: any, id: any) {
    return this.http.post(API + '/temoigne/review/' + id, review);
  }

  allComments: any = [
    {
      fonction: 'Testeur',
      commentaire_intervenent:
        'Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis ed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis',
      date: 'April 03, 2022',
      nom_ou_pseudo: 'Admin 1',
      img: 'http://localhost:4200/assets/images/user.png',
    },
    {
      fonction: 'Devlopper',

      commentaire_intervenent:
        'Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis',
      date: 'April 03, 2022',
      nom_ou_pseudo: 'Admin 1',
    },
    {
      fonction: 'Artisant',

      commentaire_intervenent:
        'Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis',
      date: 'April 03, 2022',
      nom_ou_pseudo: 'Admin 1',
    },
    {
      fonction: 'Livreur',

      commentaire_intervenent:
        'Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis',
      date: 'April 03, 2022',
      nom_ou_pseudo: 'Admin 1',
    },
    {
      fonction: 'Vendeur',

      commentaire_intervenent:
        'Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis',
      date: 'April 03, 2022',
      nom_ou_pseudo: 'Admin 1',
    },
  ];

  getlist() {
    return this.listcomments;
  }
}
function getlist(): any {
  throw new Error('Function not implemented.');
}

