import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashCardsRoutingModule } from './flash-cards-routing.module';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { FlashCardlistComponent } from './flash-cardlist/flash-cardlist.component';
import { MaterialModule } from '../material/material.module';
import { AddcardComponent } from './addcard/addcard.component';


@NgModule({
  declarations: [FlashCardlistComponent, FlashCardComponent, AddcardComponent],
  imports: [
    CommonModule,
    FlashCardsRoutingModule,
    FormsModule,
    MaterialModule,
  ],
})
export class FlashCardsModule { }
