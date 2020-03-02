import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlashCardsRoutingModule } from './flash-cards-routing.module';
import { FlashCardlistComponent } from './flash-cardlist/flash-cardlist.component';
import { FlashCardComponent } from './flash-card/flash-card.component';


@NgModule({
  declarations: [FlashCardlistComponent, FlashCardComponent],
  imports: [
    CommonModule,
    FlashCardsRoutingModule
  ]
})
export class FlashCardsModule { }
