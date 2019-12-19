import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams, HttpEventType } from '@angular/common/http';
// import { Book, BookListCriteria, Media, Tag } from '../_models';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UploaderService {
	list_updated$ = new EventEmitter();
	constructor(private http: HttpClient) {}

	upload(fd: FormData): Observable<{ status: 'progress' | 'done' | 'failed'; progress: number; body?: any }> {
		debugger;
		return this.http
			.post<any>(`${environment.server_ip}/NumbersList`, fd, {
				reportProgress: true,
				observe: 'events'
			})
			.pipe(
				map((event) => {
					switch (event.type) {
						case HttpEventType.UploadProgress:
							const progress = Math.round(100 * event.loaded / event.total);
							return { status: 'progress', progress };

						case HttpEventType.Response:
							return {
								status: 'done',
								progress: 100,
								body: {
									...event.body
								}
							};
						default:
							return { status: 'failed', progress: 100 };
					}
				})
			);
	}

	uploader(): Observable<void> {
		return this.http.post<void>(`${environment.server_ip}/NumbersList`, {});
	}
}
