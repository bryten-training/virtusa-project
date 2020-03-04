
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AssessmentComponent } from './assessment/assessment/assessment.component';
import { VideoComponent } from './video/video/video.component';
import { SignUpComponent } from './accounts/sign-up/sign-up.component';
import { FlashCardComponent } from './flash-cards/flash-card/flash-card.component';
import { AuthGuardService } from './accounts/services/auth-guard.service';
import { AlreadyAuthService } from './accounts/services/already-auth.service';
import { LoginComponent } from './accounts/login/login.component';
import { AddcardComponent } from './flash-cards/addcard/addcard.component';
import { FlashCardlistComponent } from './flash-cards/flash-cardlist/flash-cardlist.component';

const routes: Routes = [


  { path: "", redirectTo: 'logIn', pathMatch: 'full', canActivate: [AlreadyAuthService] },
  { path: "home", component: HomeComponent, canActivate: [AuthGuardService], data: { state: 'home' } },
  { path: 'logIn', component: LoginComponent, canActivate: [AlreadyAuthService], data: { state: 'login' } },
  { path: 'signUp', component: SignUpComponent, canActivate: [AlreadyAuthService], data: { state: 'signup' } },
  { path: "crdlist/:id", component: FlashCardlistComponent, data: { state: 'cardlist' } },
   { path: 'cards', component: FlashCardlistComponent, data: { state: 'cards' } },
  {
    path: 'articles',
    loadChildren: () =>
      import("./articles/articles.module").then(m => m.ArticlesModule)
  },
  { path: 'assessment', component: AssessmentComponent, data: { state: 'assessment' } },
  { path: 'addcard', component: AddcardComponent, data: { state: 'addcard' }},
  { path: 'card', component: FlashCardComponent, data: { state: 'card' }},
  { path: 'video', component: VideoComponent, data: { state: 'video' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
