import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingListRoutingModule } from './booking-list-routing.module';
import { BookingListComponent } from './component/booking-list.component';
import { BookingCardModule } from 'src/app/features/booking-card/booking-card.module';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { ReactiveFormsModule } from '@angular/forms';
import { TopBarComponent } from '../top-bar/top-bar.component';

@NgModule({
  declarations: [
    BookingListComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    BookingCardModule,
    CalendarModule,
    ReactiveFormsModule,
    BookingListRoutingModule
  ],
  bootstrap: [BookingListComponent]
})
export class BookingListModule { }
