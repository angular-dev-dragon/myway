import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { API } from './api.service'

@Injectable({
  providedIn: 'root',
})
export class ForumService {
  constructor(private http: HttpClient) {}

  public getForum() {
    return this.http.get<any>(API + '/forum')
  }

  public getForumById(id: any) {
    return this.http.get(API + '/forum/' + `${id}`)
  }

  public getThemeById(themeId: any) {
    return this.http.get<any>(API + '/forum/' + '/theme/' + `${themeId}`)
  }
}
