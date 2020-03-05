import { Component, OnInit, Input } from "@angular/core";
import { ArticlesService } from "../../articles.service";
import { Article } from "../../article";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-subject-blogpage",
  templateUrl: "./subject-blogpage.component.html",
  styleUrls: ["./subject-blogpage.component.scss"]
})
export class SubjectBlogpageComponent implements OnInit {
  headerTitle: string;
  articles: Article[];

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.headerTitle = param.type;

      this.articlesService
        .get("api/articles", { params: { subject: param.type } })
        .subscribe((data: Article[]) => {
          data.forEach(article => {
            console.log(article);
          });
          this.articles = data;

          // this.markdownContent = atob(this.article.content);
          // console.log(this.markdownContent);
        });
    });
  }

  addArticle() {
    console.log("In add articles method");
  }
}
