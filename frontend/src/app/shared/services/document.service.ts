import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { API } from './api.service'

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  constructor(private http: HttpClient) {}

  getDocuments() {
    console.warn('getDocuments')

    return this.http.get<any[]>(`${API}/doc/document`)
  }

  getDocumentsPersonnalisee() {
    return this.http.get<any[]>(`${API}/doc/document/personnalisee`)
  }

  getDocument_by_id(docId: any) {
    return this.http.get(`${API}/doc/document/${docId}`)
  }
}
