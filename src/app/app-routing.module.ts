import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlashCardComponent } from './flash-cards/flash-card/flash-card.component';
import { FlashCardlistComponent } from './flash-cards/flash-cardlist/flash-cardlist.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'flashcard', component: FlashCardComponent},
  { path: 'fc', component: FlashCardlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
