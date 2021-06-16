import { Component, ComponentRef, EventEmitter, Output, Input } from '@angular/core';
import { Article } from './../article.model';
import { ArticleService } from './../article.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input()
  article: Article = new Article();

  @Output()
  getArticleEvent = new EventEmitter();

  @Output()
  toggleModalEvent = new EventEmitter();

  constructor(
    public articleService: ArticleService
  ) { }

  onSave() {
    if (this.article.id) {
      this.articleService.putArticle(this.article, this.article.id).subscribe(response => {
        this.toggleModalEvent.emit();
        this.getArticleEvent.emit();
      });
    } else {
      this.articleService.postArticle(this.article).subscribe(response => {
        this.toggleModalEvent.emit();
        this.getArticleEvent.emit();
      });;
    }
  }

  closeModal() {
    this.toggleModalEvent.emit();
  }

}
