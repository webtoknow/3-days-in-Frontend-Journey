import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesListComponent } from './pages/articles-list/articles-list.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { ModalComponent } from './modal/modal.component';
import { ArticleService } from './article.service';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent, 
    ArticlesListComponent, 
    ArticleDetailComponent, 
    ModalComponent, 
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,    
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [HttpClientModule, ArticleService],
  entryComponents: [ModalComponent]
})
export class AppModule { }
