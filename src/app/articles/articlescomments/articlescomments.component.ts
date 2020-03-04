import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../service/articles.service';
import { Article } from '../model/article';

@Component({
  selector: 'app-articlescomments',
  templateUrl: './articlescomments.component.html',
  styleUrls: ['./articlescomments.component.scss']
})
export class ArticlescommentsComponent implements OnInit {
  comments: string
  article: Article

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {

    this.articlesService.articleSubject.subscribe((article: Article) => {
      console.log("ArticlecommentsdisplayComponent:: ", article);

      this.article = article
      // this.articlesService.setArticle.[comments].comment.push(this.comments)

    })
  }

  commentsubmit() {
    let commentdata = {
      id: 2,
      author: "Mike",
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
