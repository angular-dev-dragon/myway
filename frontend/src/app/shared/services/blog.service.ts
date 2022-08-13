import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { API } from './api.service'

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getBlogueur() {
    return this.http.get(API + '/blogueur')
  }
  getBlogueurById(id: any) {
    return this.http.get(API + '/blogueur+' + id)
  }
}
