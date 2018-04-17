import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleService } from './article.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';

const appRoutes: Routes = [
  { path: 'articles', component: ArticlesListComponent },
  { path: 'articles/:id', component: ArticleDetailComponent },
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, ArticlesListComponent, ArticleDetailComponent, ModalComponent],
  bootstrap: [AppComponent],
  providers: [HttpClientModule, ArticleService],
  entryComponents: [ModalComponent]
})
export class AppModule { }
