import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
    { path: '', redirectTo: 'article', pathMatch: 'full' },
    { path: 'article', component: ArticleComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticlesRoutingModule { }
