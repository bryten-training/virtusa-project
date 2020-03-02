import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { ArticleHomepageComponent } from "./article-homepage/article-homepage.component";
import { ArticlesRoutingModule } from "./articles-routing.module";

@NgModule({
  declarations: [ArticleHomepageComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule
  ]
})
export class ArticlesModule {}
