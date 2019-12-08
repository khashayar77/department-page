import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpResponse,
	HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { CallRequsetResponse } from '../mocks/CallRequsetResponse.mock-data';

export class CallRequestServiceMockInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (request.url.includes('/PhoneNumbers/') && request.method.toLocaleLowerCase() == 'get') {
			const id = request.url.split('/').pop();
			const selected_callHistory = CallRequsetResponse.Result.find((i) => i.CustomerId == id);
			return of(new HttpResponse({ status: 200, body: { Result: selected_callHistory }, url: request.url }));
			//گرفتن لیست
		} else if (request.url.includes('/PhoneNumbers/') && request.method.toLocaleLowerCase() == 'get') {
			return of(new HttpResponse({ status: 200, body: CallRequsetResponse, url: request.url }));
		} else if (request.url.includes('/callHistory/') && request.method.toLocaleLowerCase() == 'patch') {
			const id = request.url.split('/').pop();

			const selected_callHistory = CallRequsetResponse.Result.find((i) => i.CustomerId == id);
			return of(new HttpResponse({ status: 200, body: { Result: selected_callHistory }, url: request.url }));
		} else {
			return next.handle(request);
		}
	}
}
