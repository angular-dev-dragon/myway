import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { API } from './api.service'

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  constructor(private http: HttpClient) {}

  getDocuments() {
    return this.http.get<any[]>(`${API}/doc/document`)
  }

  getDocument_by_id(docId: any) {
    return this.http.get(`${API}/doc/document/${docId}`)
  }
}
