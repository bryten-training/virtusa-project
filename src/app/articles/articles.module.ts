import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ArticlesRoutingModule } from "./articles-routing.module";
import { MaterialModule } from '../material/material.module';
import { MatCardModule } from "@angular/material/card";
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ArticlesRoutingModule,
    MatCardModule,
    MarkdownModule.forChild()
  ]
})
export class ArticlesModule { }
