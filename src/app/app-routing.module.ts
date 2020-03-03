
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './accounts/login/login.component';

import { ArticlescommentsComponent } from './articles/articlescomments/articlescomments.component'
import { ArticlecommentsdisplayComponent } from './articles/articlecommentsdisplay/articlecommentsdisplay.component'

import { AssessmentComponent } from './assessment/assessment/assessment.component';
import { VideoComponent } from './video/video/video.component';
import { SignUpComponent } from './accounts/sign-up/sign-up.component';
import { FlashCardlistComponent } from './flash-cards/flash-cardlist/flash-cardlist.component';


const routes: Routes = [
  { path: "", redirectTo: "logIn", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: 'logIn', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: "crdlist/:id", component: FlashCardlistComponent },
  {
    path: "articles",
    loadChildren: () =>
      import("./articles/articles.module").then(m => m.ArticlesModule)
  },
  { path: 'home/articles', component: ArticlescommentsComponent },
  { path: 'home/articles/display', component: ArticlecommentsdisplayComponent },
  { path: 'assessment', component: AssessmentComponent },
  { path: 'video', component: VideoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
