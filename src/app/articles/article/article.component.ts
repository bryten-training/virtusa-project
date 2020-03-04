import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../service/articles.service';
import { Article } from '../model/article';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.prevType = param.type;
      this.articlesService.get("articles", { params: { subject: param.type, id: param.id } }).subscribe((data: Article[]) => {
        if (data == undefined || !Array.isArray(data) || data.length == 0) { // not valid route, redirect to Article Homepage
          this.router.navigateByUrl("artcls");
          return;
        }
        this.article = data[0];
        this.articlesService.setArticle(this.article);
        console.log(this.article);
        this.markdownContent = decodeURIComponent(escape(atob(this.article.content)));
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
