import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { API } from './api.service'

@Injectable({
  providedIn: 'root',
})
export class AdresseUtileService {
  constructor(private http: HttpClient) {}
  public getAdresse(): Observable<any> {
    return this.http.get<any>(API + '/adresse-utile')
  }
}
