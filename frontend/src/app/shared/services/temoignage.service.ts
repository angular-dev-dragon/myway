import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { API } from './api.service'

@Injectable({
  providedIn: 'root',
})
export class TemoignageService {
  constructor(private http: HttpClient) {}

  public getTemoigne() {
    return this.http.get<any>(API + '/temoigne/')
  }

  public getTemoigneById(id: string) {
    return this.http.get<any>(API + '/temoigne/' + id)
  }
  public postTemoignage(review: any, id: any) {
    return this.http.post(API + '/temoigne/review/' + id, review)
  }
}
