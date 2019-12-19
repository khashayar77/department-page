import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpLists } from '../interfaces/UpLists';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UplistsService {
  // update(id: string, value: any) {
  // 	throw new Error('Method not implemented.');
  // }
  // get(id: any) {
  // 	throw new Error('Method not implemented.');
  // }

  constructor(private http: HttpClient) { }

  get(id: string): Observable<UpLists> {
    return this.http
      .get<{ Result: UpLists }>(`${environment.server_ip}/NumbersLists/${id}`)
      .pipe(map((i) => i.Result));
  }

  update(id: string, model: Partial<UpLists>): Observable<UpLists> {
    return this.http
      .patch<{ Result: UpLists }>(`${environment.server_ip}/NumbersList/${id}`, model)
      .pipe(map((i) => i.Result));
  }

  list() {
    return this.http.get<UpLists[]>(`${environment.server_ip}/NumbersLists`, {});
  }

  remove(UpListsID: string): Observable<void> {
    return this.http.delete<void>(`${environment.server_ip}/NumbersList/${UpListsID}`);
  }
}
