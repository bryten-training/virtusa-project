import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {ArticlescommentsComponent} from './articles/articlescomments/articlescomments.component'
import {ArticlecommentsdisplayComponent} from './articles/articlecommentsdisplay/articlecommentsdisplay.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/articles', component: ArticlescommentsComponent}, 
  { path: 'home/articles/display', component: ArticlecommentsdisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
