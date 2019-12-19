import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ICallingStatics } from '../interfaces/dashboard.interface';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) { }

  call_statics() {
    return this.http.get<ICallingStatics>(`${environment.server_ip}/CallStatics`, {});
  }
}
