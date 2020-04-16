import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ModalComponent } from './modal/modal.component';
import { ArticleService } from './article.service';

@NgModule({
  declarations: [
    AppComponent, 
    ArticlesListComponent, 
    ArticleDetailComponent, 
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,    
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [HttpClientModule, ArticleService],
  entryComponents: [ModalComponent]
})
export class AppModule { }
