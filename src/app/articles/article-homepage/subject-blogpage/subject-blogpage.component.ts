import { Component, OnInit, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { ArticlesService } from "../../service/articles.service";
import { Article } from "../../model/article";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-subject-blogpage",
  templateUrl: "./subject-blogpage.component.html",
  styleUrls: ["./subject-blogpage.component.scss"]
})
export class SubjectBlogpageComponent implements OnInit {
  headerTitle: string;
  articles: Article[];
  markdownContent;
  myControl = new FormControl();
  options: string[] = ["One", "Two", "Three"];
  filteredOptions: Observable<string[]>;

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
          console.log("data " + data);
          data.forEach(article => {
            this.markdownContent = atob(article.content);
            article.content = this.markdownContent;
          });
          //console.log
          this.articles = data;
        });
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(
      option => option.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
