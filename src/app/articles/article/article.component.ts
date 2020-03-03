import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.prevType = param.type;
      this.articlesService.get("articles", { params: { subject: param.type, id: param.id } }).subscribe((data: Article[]) => {
        this.article = data[0];
        console.log(this.article);
        this.markdownContent = atob(this.article.content);
        console.log(this.markdownContent)
      })
    })
  }
  markdownContent = "";
  article: Article;
  liked = false;
  prevType = "";
  like() {
    setTimeout(() => {
      if (this.liked) {
        this.article.likes -= 1;
      } else {
        this.article.likes += 1;
      }
      this.liked = !this.liked;
    }, 400)
  }
}
