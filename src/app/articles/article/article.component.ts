import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ArticlesService } from '../service/articles.service';
import { Article } from '../model/article';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

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
  @ViewChild("likeBtn", { static: true }) likeBtn: ElementRef;

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.prevType = param.type;
      this.articlesService.get("api/articles", { params: { subject: param.type, id: param.id } })
        .subscribe((data: Article[]) => {
          if (data == undefined || !Array.isArray(data) || data.length == 0) { // not valid route, redirect to Article Homepage
            this.router.navigateByUrl("articles");
            return;
          }
          this.article = data[0];
          this.articlesService.setArticle(this.article);
          console.log(this.article);
          this.markdownContent = decodeURIComponent(escape(atob(this.article.content)));
          console.log(this.markdownContent)
        })
    });
    fromEvent(this.likeBtn.nativeElement, 'click').pipe(
      debounceTime(3000)
    ).subscribe(() => {
      this.like();
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
