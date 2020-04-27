import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/article.model';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article =  new Article();
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService, 
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.articleService.getArticlebyId(id).subscribe((response) => {
      this.article = response;
    })
  }

}