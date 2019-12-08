import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Department } from '../interfaces/department.interface';
import { QueryMethod } from '../models';

@Injectable({
	providedIn: 'root'
})
export class StrategyService {
	constructor(private http: HttpClient) { }

	list(): Observable<QueryMethod[]> {
		return this.http.get<any[]>(`${environment.server_ip}/departments/querymethods`);
	}

	// return of([
	// 	{
	// 		Id: "1",
	// 		EnglishName: "method 1",
	// 		FarsiName: "متد 1",
	// 		Description: "توضیحی در باره ی متر 1"
	// 	},
	// 	{
	// 		Id: "2",
	// 		EnglishName: "method 2",
	// 		FarsiName: "متد 2",
	// 		Description: "توضیحی در باره ی متر 2"
	// 	},
	// 	{
	// 		Id: "3",
	// 		EnglishName: "method 3",
	// 		FarsiName: "متد 3",
	// 		Description: "توضیحی در باره ی متر 3"
	// 	},
	// 	{
	// 		Id: "4",
	// 		EnglishName: "method 4",
	// 		FarsiName: "متد 4",
	// 		Description: "توضیحی در باره ی متر 4"
	// 	}
	// ] as QueryMethod[]);
	// return this.http.get<Department[]>(`${environment.server_ip}/departments`, {});
}

