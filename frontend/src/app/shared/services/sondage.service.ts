import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { API } from './api.service'

@Injectable({
  providedIn: 'root',
})
export class SondageService {
  constructor(private http: HttpClient) {}

  public getSondage() {
    return this.http.get<any>(`${API}/sondage`)
  }
  public getQuestionBySondage(sondage: any) {
    return this.http.get<any>(`${API}/Question_Sondages?sondage=${sondage}`)
  }
  public getChoix(question_sondage: any) {
    return this.http.get<any>(
      `${API}/Choix?question_sondage=${question_sondage}`,
    )
  }
  public edit_sondage(id: any, editedSondage: any) {
    return this.http.put<any>(`${API}/sondage/` + `${id}`, editedSondage)
  }
  public updateChoixSondage(id: any, choix: any) {
    return this.http.put<any>(`${API}/sondage/choix/${id}`, choix)
  }
}
