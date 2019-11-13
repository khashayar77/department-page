import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpResponse,
	HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { DepartmentResponse } from '../mocks/departmentResponse.mock-data';

export class DepartmentServiceMockInterceptore implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// if (request.url.endsWith('/departmentrequests/')) {
		// 	return of(new HttpResponse({ status: 200, body: DepartmentResponse, url: request.url }));
		// }

		if (request.url.includes('/departmentrequests/') && request.method.toLocaleLowerCase() == 'get') {
			const id = request.url.split('/').pop();
			const selected_department = DepartmentResponse.Result.find((i) => i.id == id);
			return of(new HttpResponse({ status: 200, body: { Result: selected_department }, url: request.url }));
			// گزفتن لیست همه
		} else if (request.url.includes('/departmentrequests') && request.method.toLocaleLowerCase() == 'get') {
			return of(new HttpResponse({ status: 200, body: DepartmentResponse, url: request.url }));
			//برای اپدیت کزدن
		} else if (request.url.includes('/departmentrequests') && request.method.toLocaleLowerCase() == 'patch') {
			const id = request.url.split('/').pop();
			const selected_department = DepartmentResponse.Result.find((i) => i.id == id);
			return of(new HttpResponse({ status: 200, body: { Result: selected_department }, url: request.url }));
		} else {
			return next.handle(request);
		}
	}
}
