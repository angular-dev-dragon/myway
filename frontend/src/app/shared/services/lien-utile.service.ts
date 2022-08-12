import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { API } from './api.service'

@Injectable({
  providedIn: 'root',
})
export class LienUtileService {
  constructor(private http: HttpClient) {}
  public getLien(): Observable<any> {
    return this.http.get<any>(API + '/lien-utile')
  }
}
