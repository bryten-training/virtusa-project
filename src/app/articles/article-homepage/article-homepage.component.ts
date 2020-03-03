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
  showSubjectGrid: boolean = true;
  subjects = [
    { name: "Angular", imagePath: "/assets/img/angular.jpg" },
    { name: "JavaScript", imagePath: "/assets/img/js.jpg" },
    { name: "NodeJS", imagePath: "/assets/img/nodejs.jpg" }
  ];

  constructor() {}

  ngOnInit(): void {}
}
