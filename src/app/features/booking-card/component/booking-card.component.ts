import { Component, Input, OnInit } from '@angular/core';
import { IBooking } from 'src/app/core/entities/booking/IBooking';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.css']
})
export class BookingCardComponent implements OnInit {

  @Input() booking!: IBooking;
  roomSource!: string;
  cancelDialogDisplay: boolean = false;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
      this.roomSource = "assets/img/room_" + (Math.floor(Math.random() * 4) + 1) +".jpg";
  }

  showCancelDialog() {
    this.cancelDialogDisplay = true;
  }

  cancelBooking() {
    let url: string = `http://localhost:8090/booking/${this.booking.bookingId}`;
    this.http.delete(url, httpOptions).subscribe()
    this.cancelDialogDisplay = false;
  }
}
