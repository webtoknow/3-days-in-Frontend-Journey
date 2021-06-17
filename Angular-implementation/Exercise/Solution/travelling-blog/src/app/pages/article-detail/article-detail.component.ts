import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/article.model';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article$: Observable<Article> = this.articleService.article$;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    ) { }

  ngOnInit() {
    this.getArticle();
  }

  getArticle(): void {
    let id: string | null = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.articleService.getArticleById(id);
    }
  }

}
