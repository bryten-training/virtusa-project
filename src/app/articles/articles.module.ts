import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { ArticleHomepageComponent } from "./article-homepage/article-homepage.component";
import { ArticlesRoutingModule } from "./articles-routing.module";
import { ArticlescommentsComponent } from './articlescomments/articlescomments.component';
import { MaterialModule } from '../material/material.module';
import {MatInputModule} from '@angular/material/input';
import { ArticlecommentsdisplayComponent } from './articlecommentsdisplay/articlecommentsdisplay.component'

@NgModule({
  declarations: [ArticleHomepageComponent, ArticlescommentsComponent, ArticlecommentsdisplayComponent],
  imports: [
     CommonModule,
    ArticlesRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,   
    MaterialModule, 
    MatInputModule
  ]
})
export class ArticlesModule { }
