import { Component, OnInit } from '@angular/core';
import { ArticleService } from './../article.service';
import { Article } from './../article.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalComponent } from './../modal/modal.component';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  articlesList: Article[];
  bsModalRef: BsModalRef;
  constructor(
    private articleService: ArticleService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articleService.getArticles().subscribe((response) => {
      this.articlesList = response;
    })
  }

  openAddModal() {
    const initialState = { callbackFunction: this.getArticles.bind(this) };
    this.bsModalRef = this.modalService.show(ModalComponent, { initialState });
  }

  openEditModal(article: Article) {
    const initialState = { article: Object.assign({}, article), callbackFunction: this.getArticles.bind(this), isUpdate: true };
    this.bsModalRef = this.modalService.show(ModalComponent, { initialState });
  }

  deleteArticle(id: number) {
    this.articleService.deleteArticle(id).subscribe((response) => {
      this.getArticles();
    })
  }
}