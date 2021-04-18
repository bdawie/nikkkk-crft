import { Component, OnInit } from "@angular/core";
import { DateTimeService } from "src/app/services/date-time.service";

import { map, tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "date-time",
  styles: [
    `
      .date-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: Helvetica;
        border: 2px solid #c3c3c3;
        width: 300px;
        margin: 0 auto;
      }
    `,
  ],
  templateUrl: "./date-time.component.html",
})
export class DateTimeComponent implements OnInit {
  date$: Observable<Date>;

  timezone: string;

  constructor(private dateTimeService: DateTimeService) {}

  ngOnInit() {
    this.date$ = this.dateTimeService.getDateTimeInfo().pipe(
      tap((res) => (this.timezone = res.timezone)),
      map((res) => {
        return new Date(res.datetime);
      })
    );
  }
}
