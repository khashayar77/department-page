import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../interfaces/department.interface';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class DepartmentService {
	constructor(private http: HttpClient) { }


	get(id: string): Observable<Department> {
		return this.http
			.get<{ Result: Department }>(`${environment.server_ip}/departmentrequests/${id}`)
			.pipe(map((i) => i.Result));
	}

	update(id: string, model: Partial<Department>): Observable<Department> {
		return this.http
			.patch<{ Result: Department }>(`${environment.server_ip}/departmentrequests/${id}`, model)
			.pipe(map((i) => i.Result));
	}

	list() {
		return this.http.get<{ Result: Department[]; total: number; page_no: number }>(
			`${environment.server_ip}/departmentrequests`
		);
	}

	remove(DepartmentID): Observable<void> {
		return this.http.delete<void>(`${environment.server_ip}/departmentrequests/${DepartmentID}`);
	}
}
