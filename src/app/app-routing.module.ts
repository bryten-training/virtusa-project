import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './accounts/login/login.component';

import {ArticlescommentsComponent} from './articles/articlescomments/articlescomments.component'
import {ArticlecommentsdisplayComponent} from './articles/articlecommentsdisplay/articlecommentsdisplay.component'

import { AssessmentComponent } from './assessment/assessment/assessment.component';
import { VideoComponent } from './video/video/video.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule) },
  { path: 'home/articles', component: ArticlescommentsComponent}, 
  { path: 'home/articles/display', component: ArticlecommentsdisplayComponent},
  { path: 'assessment', component: AssessmentComponent },
  { path: 'video', component: VideoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
