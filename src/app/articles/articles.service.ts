import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Article } from './article';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private http: HttpClient
  ) {
    this.articleSubject = new BehaviorSubject(null);
  }
  articleSubject: BehaviorSubject<Article>;

  get(url: string, options?): Observable<any> {
    return this.http.get<Article[]>(url, options);
  }

  put(url: string, body: Article, options?): Observable<HttpEvent<Article>> {
    return this.http.put<Article>(url, body, options);
  }

  post(url: string, body: Article, options?): Observable<HttpEvent<Article>> {
    return this.http.post<Article>(url, body, options);
  }

  delete(url: string, options?): Observable<any> {
    return this.http.delete<Article>(url, options);
  }

  setArticle(article: Article) {
    this.articleSubject.next(article);
  }
}
