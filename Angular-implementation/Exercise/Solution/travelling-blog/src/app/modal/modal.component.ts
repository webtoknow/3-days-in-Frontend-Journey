import { Component, ComponentRef, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from './../article.model';
import { ArticleService } from './../article.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnDestroy {

  @Input()
  article: Article = new Article();

  @Output()
  getArticleEvent = new EventEmitter();

  @Output()
  toggleModalEvent = new EventEmitter();

  putArticleSubscription = new Subscription();
  postArticleSubscription = new Subscription();

  constructor(
    public articleService: ArticleService
  ) { }

  onSave() {
    if (this.article.id) {
      this.putArticleSubscription = this.articleService.putArticle(this.article, this.article.id).subscribe(response => {
        this.toggleModalEvent.emit();
        this.getArticleEvent.emit();
      });
    } else {
      this.postArticleSubscription = this.articleService.postArticle(this.article).subscribe(response => {
        this.toggleModalEvent.emit();
        this.getArticleEvent.emit();
      });;
    }
  }

  closeModal() {
    this.toggleModalEvent.emit();
  }

  ngOnDestroy(): void {
    this.putArticleSubscription.unsubscribe();
    this.postArticleSubscription.unsubscribe();
  }

}
