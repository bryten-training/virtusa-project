import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Article } from './article';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  articleSubject: BehaviorSubject<Article>;

  constructor( private http: HttpClient) {
    this.articleSubject = new BehaviorSubject(null);
  }
  


  get(url: string, options?): Observable<any> {
    return this.http.get<Article[]>(url, options);
  }

  setArticle(article: Article) {
    this.articleSubject.next(article);
  }

  put(url: string, body: Article, options?): Observable<HttpEvent<Article>> {
    return this.http.put<Article>(url, body, options);
  }

  putmethod(body:Article):Observable<any>{
    return this.http.post(`articles/1`,body)

  }
}
