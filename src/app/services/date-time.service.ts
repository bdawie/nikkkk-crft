import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DateTimeService {
  DATE_API_URL = 'http://worldtimeapi.org/api/ip';

  constructor(private http: HttpClient) {}

  public getDateTimeInfo(): Observable<IDateTimeInfo> {
    return this.http.get<IDateTimeInfo>(this.DATE_API_URL);
  }
}

export interface IDateTimeInfo {
  datetime: string;
  timezone: string;
}
