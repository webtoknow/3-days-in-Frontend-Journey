import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article: Article = new Article();

  @Output()
  getArticleEvent = new EventEmitter();

  @Output()
  editEvent = new EventEmitter<Article>();


  constructor(
    private articleService: ArticleService,
  ) { }

  ngOnInit(): void {
  }

  deleteArticle(id: number) {
    this.articleService.deleteArticle(id).subscribe(() => {
      this.getArticleEvent.emit();
    })
  }

  editArticle(article: Article) {
    this.editEvent.emit(article);
  }

}
