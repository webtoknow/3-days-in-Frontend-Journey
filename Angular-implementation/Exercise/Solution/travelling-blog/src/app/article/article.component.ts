import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {

  @Input()
  article: Article = new Article();

  @Output()
  getArticleEvent = new EventEmitter();

  @Output()
  editEvent = new EventEmitter<Article>();

  deleteArticleSubscription = new Subscription()

  constructor(
    private articleService: ArticleService,
  ) { }

  ngOnInit(): void {
  }

  deleteArticle(id: number) {
    this.deleteArticleSubscription = this.articleService.deleteArticle(id).subscribe(() => {
      this.getArticleEvent.emit();
    })
  }

  editArticle(article: Article) {
    this.editEvent.emit(article);
  }

  ngOnDestroy(): void {
    this.deleteArticleSubscription.unsubscribe();
  }

}
