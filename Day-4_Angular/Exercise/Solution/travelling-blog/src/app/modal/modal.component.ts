import { Component, OnInit, ComponentRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Article } from './../article.model';
import { ArticleService } from './../article.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  article = new Article();
  isUpdate = false;
  callbackFunction : () => void;

  constructor(public bsModalRef: BsModalRef,
              public articleService: ArticleService) {}

  ngOnInit() {
    console.log(this.article);
  }

  onSave() {
    if (this.isUpdate) {
      this.articleService.putArticle(this.article, this.article.id).subscribe(response => {
        this.callbackFunction();
        this.bsModalRef.hide();
      });
    } else {
      this.articleService.postArticle(this.article).subscribe(response => {
        this.callbackFunction();
        this.bsModalRef.hide();
      });;
    }
  }

}