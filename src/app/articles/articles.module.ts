import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlescommentsComponent } from './articlescomments/articlescomments.component';
import { MaterialModule } from '../material/material.module';
import {MatInputModule} from '@angular/material/input';
import { ArticlecommentsdisplayComponent } from './articlecommentsdisplay/articlecommentsdisplay.component'


@NgModule({
  declarations: [ArticlescommentsComponent, ArticlecommentsdisplayComponent],
  imports: [
    CommonModule, 
    MaterialModule, 
    MatInputModule
   
  ]
})
export class ArticlesModule { }
