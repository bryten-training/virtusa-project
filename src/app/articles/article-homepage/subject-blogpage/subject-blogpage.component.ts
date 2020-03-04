import { Component, OnInit, Input } from "@angular/core";
import { ARTICLES } from "../../dummy-articles";
import { Article } from "../../model/article";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-subject-blogpage",
  templateUrl: "./subject-blogpage.component.html",
  styleUrls: ["./subject-blogpage.component.scss"]
})
export class SubjectBlogpageComponent implements OnInit {
  headerTitle: string;
  dummy_articles: Article[] = ARTICLES;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.headerTitle = param.type;
    });
  }
}
