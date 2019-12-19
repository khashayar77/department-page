import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { CallRequest } from '../interfaces/call-request.interface';
import { CallingRequestQueryRequest } from '../interfaces/calling-request-query-request.interface';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CallResult } from '../interfaces/CallResult';

@Injectable({
	providedIn: 'root'
})
export class CallingService {
	constructor(private http: HttpClient) {}

	get(id: string): Observable<CallRequest> {
		return this.http
			.get<{ Result: CallRequest }>(`${environment.server_ip}/PhoneNumbers/${id}`)
			.pipe(map((i) => i.Result));
	}

	query(
		data: CallingRequestQueryRequest
		// ): Observable<{ Result: CallRequest[]; total_items: number; page_no: number }> {
	): Observable<CallRequest[]> {
		console.log(data);
		if (data.criteria.CustomerId) {
			// return this.http.get<{ Result: CallRequest[]; total_items: number; page_no: number }>(
			return this.http.get<CallRequest[]>(
				`${environment.server_ip}/PhoneNumbers/ByContractId/${data.criteria.CustomerId}/${data.pageNo}`
			);
		} else if (data.criteria.Number) {
			return this.http.get<CallRequest[]>(
				`${environment.server_ip}/PhoneNumbers/ByPhoneNumber/${data.criteria.Number}/${data.pageNo}`
			);
		} else if (data.criteria.Department) {
			return this.http.get<CallRequest[]>(
				`${environment.server_ip}/PhoneNumbers/ByDepartment/${data.criteria.Department}/${data.pageNo}`
			);
		} else {
			return this.http.get<CallRequest[]>(`${environment.server_ip}/PhoneNumbers/${data.pageNo}`);
		}
	}

	update(model: CallRequest): Observable<CallRequest> {
		return this.http.post<CallRequest>(`${environment.server_ip}/callRequests`, {});
	}

	list() {
		return this.http.get<{
			Result: CallRequest[];
			// total: number;
			// page_no: number;
		}>(
			`${environment.server_ip}/callHistory`,
			{
				// params
			}
		);
	}

	remove(callRequestID): Observable<void> {
		return this.http.delete<void>(`${environment.server_ip}/PhoneNumber/${callRequestID}`);
	}
	getResult(PhoneNumber): Observable<CallResult> {
		return this.http.get<CallResult>(`${environment.server_ip}/callHistory/${PhoneNumber}`);
	}

	// getFilterDepartmentName(DepartmentName): Observable<CallResult> {
	// 	return this.http.get<CallResult>(`${environment.server_ip}/PhoneNumbers/ByDepartment/${DepartmentName}`);
	// }

	// getFilterPhoneNumber(PhoneNumber): Observable<CallResult> {
	// 	return this.http.get<CallResult>(`${environment.server_ip}/PhoneNumbers/ByPhoneNumber/${PhoneNumber}`);
	// }

	// getFilterContractId(ContractId): Observable<CallResult> {
	// 	return this.http.get<CallResult>(`${environment.server_ip}/PhoneNumbers/ByContractId/${ContractId}`);
	// }
}
