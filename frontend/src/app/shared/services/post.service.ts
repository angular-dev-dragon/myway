import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { API } from './api.service'

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  public getAllArticles(): Observable<any> {
    return this.http.get<any>(API + '/post/article/')
  }
  public getArticleById(id: any): Observable<any> {
    return this.http.get<any>(API + '/post/article/' + `${id}`)
  }

  public getAllRubrique(): Observable<any> {
    return this.http.get<any>(API + '/post/rubrique')
  }
  public getRubriqueByName(name: any): Observable<any> {
    return this.http.get<any>(API + '/post/rubrique/' + `${name}`)
  }
  public getRubriqueById(id: any): Observable<any> {
    return this.http.get<any>(API + '/post/rubrique/' + `${id}`)
  }
  public postReview(review: any, id: any) {
    return this.http.post(API + '/post/review/' + id, review)
  }
  public incrementerVueArticle(id: any) {
    return this.http.put<any>(
      API + '/post/article/' + `${id}` + '/vue/incr',
      '',
    )
  }

  public incrementerLikeArticle(id: any) {
    return this.http.put<any>(
      API + '/post/article/' + `${id}` + '/like/incr',
      '',
    )
  }

  public decrementerLikeArticle(id: any) {
    return this.http.put<any>(
      API + '/post/article/' + `${id}` + '/like/decr',
      '',
    )
  }

  public incrementerUnlikeArticle(id: any) {
    return this.http.put<any>(
      API + '/post/article/' + `${id}` + '/unlike/incr',
      '',
    )
  }

  public decrementerUnlikeArticle(id: any) {
    return this.http.put<any>(
      API + '/post/article/' + `${id}` + '/unlike/decr',
      '',
    )
  }

  public incrementerImpressionArticle(id: any) {
    return this.http.put<any>(
      API + '/post/article/' + `${id}` + '/impression/incr',
      '',
    )
  }
  public incrementerPartage(id: any) {
    return this.http.put<any>(
      API + '/post/article/' + `${id}` + '/partage/incr',
      '',
    )
  }
}
