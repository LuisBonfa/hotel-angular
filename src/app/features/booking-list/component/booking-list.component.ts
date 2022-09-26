import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, throwError } from 'rxjs';
import { IBooking } from 'src/app/core/entities/booking/IBooking';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookingDTO } from 'src/app/core/entities/booking/BookingDTO';
import { DatePipe } from '@angular/common';
import { MessageService } from 'primeng/api';
import { IErrorResponse } from 'src/app/core/error/IErrorResponse';
import { AppSettings } from 'src/app/common/AppSettings';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css'],
  providers: [DatePipe]
})
export class BookingListComponent implements OnInit, OnDestroy {
  booking!: Observable<IBooking>;
  bookings: IBooking[] = [];
  display: boolean = false;
  dateValue?: Date;
  minDate!: Date;
  minDateSelected!: Date;
  maxDate!: Date;
  maxDateSelected!: Date;
  myForm!: FormGroup;


  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private messageService: MessageService
  ) { }

  onChanges(): void {
    this.myForm.valueChanges.subscribe(formGroup => {
      let firstDate = formGroup.dateRange[0];
      this.maxDate = new Date(firstDate);
      this.maxDate.setDate(firstDate.getDate() + 2);
    });
  }

  ngOnDestroy(): void {
    
  }

  showDialog() {
    this.display = true;
  }

  ngOnInit(): void {
    this.http.get<{ [key: number]: IBooking }>(`${AppSettings.API_ENDPOINT}/booking`).pipe(
      map(responseData => {
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            this.bookings.push(responseData[key]);
          }
        }
      })
    ).subscribe();

    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1);

    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 30);

    this.myForm = this.formBuilder.group({
      dateRange: []
    });

    this.onChanges();
  }
  


  private addBooking(booking: BookingDTO) {
    return this.http.post<IBooking>(`${AppSettings.API_ENDPOINT}/booking`, booking, httpOptions)
      .pipe(
        catchError(error => this.handleError(error)),
        map(value => {
          this.messageService.add({ severity: 'success', summary: 'Booking', detail: 'Booking created successfully' });
          this.bookings.push(value);
        })
      );
  }

  onSubmit(): void {
    let userId = '96130c20-0d54-4f98-9d8a-6fa6afcffc39';
    let body = this.myForm.value;
    let begin = this.formatDate(body.dateRange[0]);
    let end = this.formatDate(body.dateRange[1]);
    let booking: BookingDTO = { userId: userId, begin: begin, end: end };
    this.addBooking(booking).subscribe();
  }

  private formatDate(date: Date): string {
    let value = this.datePipe.transform(date, 'yyyy-MM-dd');
    if (value != null) {
      return value;
    }
    else {
      return "";
    }
  }

  private handleError(error: HttpErrorResponse) {
    let errorResponse: IErrorResponse = error.error;
    console.log(error)
    this.messageService.add({ severity: 'error', summary: errorResponse.httpStatus, detail: errorResponse.message });
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
