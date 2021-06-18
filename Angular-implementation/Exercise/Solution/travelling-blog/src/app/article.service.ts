import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { URL } from './core/constant';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { }


  articles$ = this.http.get(URL.articles) as Observable<Article[]>;

  private _articleSubject = new BehaviorSubject<string>('');
  articleSelectedAction$ = this._articleSubject.asObservable();
  article$ = this.articleSelectedAction$.pipe(
    switchMap((id: string) => this.http.get(`${URL.articles}/${id}`) as Observable<Article>));

  postArticle(article: Article): Observable<Article> {
    return this.http.post(URL.articles, article) as Observable<Article>;
  }

  putArticle(article: Article, id: number): Observable<Article> {
    return this.http.put(`${URL.articles}/${id}`, article) as Observable<Article>;
  }

  deleteArticle(id: number): Observable<Article> {
    return this.http.delete(`${URL.articles}/${id}`) as Observable<Article>;
  }

  getArticleById(id: string): void {
    this._articleSubject.next(id);
  }
}
