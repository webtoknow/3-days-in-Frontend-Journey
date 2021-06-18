import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/article.model';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  articles$ = this.articleService.articles$;
  showModal: boolean = false;
  article = new Article();

  constructor(
    private articleService: ArticleService,
  ) { }

  ngOnInit() {
  }

  getArticles() {
  }

  openAddModal() {
    this.article =  new Article();
    this.toggleModal();
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  openEditModal(article: Article) {
    this.article = article;
    this.toggleModal();
  }

}
