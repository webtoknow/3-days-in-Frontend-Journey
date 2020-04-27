import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article.model';
import { Observable } from 'rxjs';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get('http://localhost:3000/articles') as Observable<Article[]>;
  }

  postArticle(article: Article): Observable<Article> {
    return this.http.post('http://localhost:3000/articles', article) as Observable<Article>;
  }

  putArticle(article: Article, id: number): Observable<Article> {
    return this.http.put(`http://localhost:3000/articles/${id}`, article) as Observable<Article>;
  }

  deleteArticle(id: number): Observable<Article> {
    return this.http.delete(`http://localhost:3000/articles/${id}`) as Observable<Article>;
  }

  getArticlebyId(id: string): Observable<Article> {
    return this.http.get(`http://localhost:3000/articles/${id}`) as Observable<Article>;
  }

}