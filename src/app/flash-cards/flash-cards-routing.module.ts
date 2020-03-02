import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlashCardComponent } from './flash-card/flash-card.component';


const routes: Routes = [
  {path: 'flashcard', component: FlashCardComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlashCardsRoutingModule { }
