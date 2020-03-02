import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ArticleHomepageComponent } from "./article-homepage/article-homepage.component";

const routes: Routes = [
  { path: "", redirectTo: "articles", pathMatch: "full" },
  { path: "articles", component: ArticleHomepageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {}
