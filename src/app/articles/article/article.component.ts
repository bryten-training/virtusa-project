import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.articlesService.get("articles").subscribe((data: Article[]) => {
      this.markdownContent = atob(data["Java"][0].content);
      console.log(this.markdownContent)
    })
  }
  markdownContent = "";
}
