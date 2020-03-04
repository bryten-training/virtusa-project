import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../service/articles.service';
import { Article } from '../model/article';
import { User } from 'src/app/accounts/models/user.model';

@Component({
  selector: 'app-articlescomments',
  templateUrl: './articlescomments.component.html',
  styleUrls: ['./articlescomments.component.scss']
})
export class ArticlescommentsComponent implements OnInit {
  comments: string
  article: Article

  user: User = {
    id: 1,
    userName: "username",
    passWord: "123",
    email: "abc",
    firstName: "Eason",
    lastName: "Liu",
    userType: null
  };

  constructor(
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void {

    this.articlesService.articleSubject.subscribe((article: Article) => {
      console.log("ArticlecommentsdisplayComponent:: ", article);

      this.article = article
      // this.articlesService.setArticle.[comments].comment.push(this.comments)

    })

    // this.user = this.articlesService.getCurrentUser();
  }

  commentsubmit() {
    let commentdata = {
      id: 2,
      author: {
        userType: this.user.userType,
        name: this.user.firstName + " " + this.user.lastName
      },
      comment: this.comments,
      datetime: new Date()

    }
    this.article.comments.push(commentdata);
    console.log(this.article);


    this.articlesService.put(`api/articles/${this.article.id}`, this.article).subscribe((data) => {
      console.log("after::", data);


    })
    // this.articlesService.get(`articles`).subscribe((data)=> {
    //   console.log("after:: ", data);

    // this.articlesService.putmethod(this.article)


    // })





  }

}
