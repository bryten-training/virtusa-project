import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';

@Component({
  selector: 'app-articlecommentsdisplay',
  templateUrl: './articlecommentsdisplay.component.html',
  styleUrls: ['./articlecommentsdisplay.component.scss']
})
export class ArticlecommentsdisplayComponent implements OnInit {

  constructor(
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.articlesService.articleSubject.subscribe((article: Article) => {
      console.log("ArticlecommentsdisplayComponent:: ", article);
    })
  }

  // REMOVE THIS CODE BEFORE COMMITING TODAT


  names: any[] = [
    {
      name: "Sumit Yadav", topic: "Java", comment: `Java is amaizing and 
   loved the way he taught. Java is amaizing and 
   loved the way he taught.Java is amaizing and 
   loved the way he taught`}
    ,
    {
      name: "Kavita Yadav", topic: "C++", comment: `C++ is amaizing
  and loved the way she taught.C++ is amaizing
  and loved the way she taught.C++ is amaizing
  and loved the way she taught`},
    {
      name: "Sumit Yadav", topic: "Java", comment: `Java is amaizing and 
  loved the way he taught. Java is amaizing and 
  loved the way he taught.Java is amaizing and 
  loved the way he taught`}
    ,
    {
      name: "Kavita Yadav", topic: "Angular", comment: `C++ is amaizing
 and loved the way she taught.C++ is amaizing
 and loved the way she taught.C++ is amaizing
 and loved the way she taught`},

    {
      name: "Jerry Hogs", topic: "NodeJs", comment: `Java is amaizing and 
 loved the way he taught. Java is amaizing and 
 loved the way he taught.Java is amaizing and 
 loved the way he taught`}
    ,
    {
      name: "Tom Smith", topic: "Angular", comment: `C++ is amaizing
and loved the way she taught.C++ is amaizing
and loved the way she taught.C++ is amaizing
and loved the way she taught`}]

}
