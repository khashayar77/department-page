import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UpLists } from '../interfaces/UpLists';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class UplistsService {
  update(id: string, value: any) {
    throw new Error("Method not implemented.");
  }
	get(id: any) {
		throw new Error('Method not implemented.');
	}

	constructor(private http: HttpClient) {}

	list() {
		return this.http.get<{ Result: UpLists[]; total: number; page_no: number }>(
			`${environment.server_ip}/uplistsrequests`
		);
	}

	remove(UpListsID: string): Observable<void> {
		debugger;
		return this.http.delete<void>(`${environment.server_ip}/uplistsrequests/${UpListsID}`);
	}

	refresh(UpListsID: string): Observable<void> {
		debugger;
		return this.http.get<void>(`${environment.server_ip}/uplistsrequests/${UpListsID}`);
	}
}
