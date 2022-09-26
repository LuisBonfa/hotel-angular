import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { BookingCardComponent } from './component/booking-card.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    BookingCardComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    DialogModule,
    ButtonModule,
  ],
  exports: [
    BookingCardComponent
  ],
  bootstrap: [BookingCardComponent]
})
export class BookingCardModule {

 }
