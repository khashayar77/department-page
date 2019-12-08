import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { DashboardInterface } from '../interfaces/dashboard.interface';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class DashboardService {
	constructor(private http: HttpClient) {}

	get(id: string): Observable<DashboardInterface> {
		return this.http
			.get<{ Result: DashboardInterface }>(`${environment.server_ip}/CallStatics/`)
			.pipe(map((i) => i.Result));
	}

	update(model: DashboardInterface): Observable<DashboardInterface> {
		return this.http.put<DashboardInterface>(`${environment.server_ip}/CallStatics`, model);
	}
}
