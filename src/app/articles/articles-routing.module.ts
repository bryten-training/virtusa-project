import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ArticleHomepageComponent } from "./article-homepage/article-homepage.component";

const routes: Routes = [
  { path: '', component: ArticleHomepageComponent },
  { path: ':type', component: ArticleHomepageComponent },
  { path: ':type/:id', component: ArticleComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }