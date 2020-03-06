import { Component, OnInit } from "@angular/core";
import { ArticlesService } from "../../service/articles.service";
import { Article } from "../../model/article";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-subject-blogpage",
  templateUrl: "./subject-blogpage.component.html",
  styleUrls: ["./subject-blogpage.component.scss"]
})
export class SubjectBlogpageComponent implements OnInit {
  searchInput: string;
  headerTitle: string;
  articles: Article[] = [];
  filteredArticles: Article[] = [];
  searchTag: string;
  showUnfilteredArticles: boolean = true;

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
          //console.log("data " + data);
          // data.forEach(article => {
          //   this.markdownContent = atob(article.content);
          //   article.content = this.markdownContent;
          // });
          this.articles = data;
          //console.log(this.articles);
        });
    });
  }

  clearSearch() {
    this.showUnfilteredArticles = !this.showUnfilteredArticles;
    this.filteredArticles = [];
    this.searchInput = "";
  }

  searchArticle(event) {
    this.showUnfilteredArticles = !this.showUnfilteredArticles;
    this.searchTag = event.target.value.toLowerCase();
    this.articles.forEach(article => {
      article.tags.forEach(tag => {
        if (tag.toLowerCase() === this.searchTag) {
          this.filteredArticles.push(article);
        }
      });
    });
    //console.log(this.filteredArticles);
    //this.filteredArticles = [];
  }
}
