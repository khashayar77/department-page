import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpResponse,
	HttpErrorResponse,
	HttpRequest
} from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { UpListsResponse } from '../mocks/uplistsResponse.mock-data';

export class UpListsServiceMockInterceptore implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// if (request.url.endsWith('/uplistsrequests/') && request.method.toLocaleLowerCase() == 'get') {
		// 	return of(new HttpResponse({ status: 200, body: UpListsResponse, url: request.url }));
		// }
		if (request.url.includes('/uplistsrequests/') && request.method.toLocaleLowerCase() == 'get') {
			const id = request.url.split('/').pop();
			// tslint:disable-next-line: variable-name
			const selected_department = UpListsResponse.Result.find((i) => i.Id == id);
			return of(new HttpResponse({ status: 200, body: { Result: selected_department }, url: request.url }));
			// گزفتن لیست همه
		} else if (request.url.includes('/uplistsrequests') && request.method.toLocaleLowerCase() == 'get') {
			return of(new HttpResponse({ status: 200, body: UpListsResponse, url: request.url }));
			//برای اپدیت کزدن
		} else if (request.url.includes('/uplistsrequests') && request.method.toLocaleLowerCase() == 'patch') {
			const id = request.url.split('/').pop();
			// tslint:disable-next-line: variable-name
			const selected_department = UpListsResponse.Result.find((i) => i.Id == id);
			return of(new HttpResponse({ status: 200, body: { Result: selected_department }, url: request.url }));
		} else {
			return next.handle(request);
		}
	}
}
