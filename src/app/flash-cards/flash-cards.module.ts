import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlashCardsRoutingModule } from './flash-cards-routing.module';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { FlashCardlistComponent } from './flash-cardlist/flash-cardlist.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [FlashCardlistComponent, FlashCardComponent],
  imports: [
    CommonModule,
    FlashCardsRoutingModule,
    MaterialModule,
  ]
})
export class FlashCardsModule { }
