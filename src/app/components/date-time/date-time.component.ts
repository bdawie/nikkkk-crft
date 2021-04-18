import { Component } from '@angular/core';
import { DateTimeService } from 'src/app/services/date-time.service';

@Component({
  selector: 'date-time',
  templateUrl: './date-time.component.html',
})
export class DateTimeComponent {
  date;

  timezone;

  constructor(private dateTimeService: DateTimeService) {

    this.dateTimeService.getDateTimeInfo().subscribe(res => {
      this.timezone = res.timezone;
      this.date = new Date(res.datetime);

    });
  }
}
