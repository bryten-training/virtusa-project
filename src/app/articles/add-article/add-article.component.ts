import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';
import { count, flatMap } from "rxjs/operators";
import { Subject } from '../subject';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from "../../accounts/user.model";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  constructor(
    private articlesService: ArticlesService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }
  mdText: string;
  user: User = {
    id: 1,
    username: "username",
    password: "123",
    email: "123@qq.com",
    firstName: "Eason",
    lastName: "Liu",
  };
  userType = "";
  subjects: Subject[] = [Subject.Angular, Subject.JavaScript, Subject.NodeJS];
  articleForm: FormGroup = this.fb.group({
    subject: [, [Validators.required]],
    title: [, [Validators.required]],
    image: [, [Validators.required]],
    imageURL: [, [Validators.required]],
    timeToRead: [, [Validators.required, Validators.min(1), Validators.max(100)]],
    tags: [, [Validators.required]],
    mdText: [, [Validators.required]]
  })

  submit() {
    console.log(this.articleForm);
    // retrieve the length of articles, +1 as id
    this.articlesService.get('articles').pipe(
      flatMap(a => a),
      count()
    ).subscribe(num => {
      let newArticle = this.constructANewArticle(num);
      console.log("newArticle:: ", newArticle)
      this.articlesService.post('articles', newArticle).subscribe(response => {
        console.log(response);
      })
    })
  }

  constructANewArticle(num: number): Article {
    let article: Article = {
      id: num + 1,
      subject: this.articleForm.value.subject,
      title: this.articleForm.value.title,
      image: this.articleForm.value.image,
      author: {
        name: `${this.user.firstName} ${this.user.lastName}`,
        avatar: "assets/avatar.jpeg"
      },
      publish_date: new Date(),
      content: btoa(this.articleForm.value.mdText),
      timeToRead: this.articleForm.value.timeToRead,
      tags: this.articleForm.value.tags == undefined ? "" : this.articleForm.value.tags.split(","),
      likes: 0,
      comments: [],
      assessmentURL: ""
    }
    return article;
  }

  onUploadChange(evt: any) {
    const file = evt.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    this.articleForm.controls.image.setValue('data:image/png;base64,' + btoa(e.target.result));
  }
}
