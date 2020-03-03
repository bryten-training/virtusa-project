import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  setArticle(article: Article) {
    this.articleSubject.next(article);
  }
}
