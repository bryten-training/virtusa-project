import { Component, OnInit } from "@angular/core";
import { ARTICLES } from "../dummy-articles";
import { Article } from "../article";

@Component({
  selector: "app-article-homepage",
  templateUrl: "./article-homepage.component.html",
  styleUrls: ["./article-homepage.component.scss"]
})
export class ArticleHomepageComponent implements OnInit {
  dummy_articles: Article[] = ARTICLES;

  constructor() {}

  ngOnInit(): void {}
}
