import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../app/material/material.module';

import { FlashCardsRoutingModule } from './flash-cards-routing.module';
import { FlashCardlistComponent } from './flash-cardlist/flash-cardlist.component';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { AddcardComponent } from './addcard/addcard.component';


@NgModule({
  declarations: [FlashCardlistComponent, FlashCardComponent, AddcardComponent],
  imports: [
    CommonModule,
    FlashCardsRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    FlashCardComponent
  ]
})
export class FlashCardsModule { }
