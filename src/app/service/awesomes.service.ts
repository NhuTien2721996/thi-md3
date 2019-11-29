import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAwesome} from '../awesomes/iawesome';

@Injectable({
  providedIn: 'root'
})
export class AwesomesService {
  private readonly url = 'http://localhost:3000/awesomes';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IAwesome[]> {
    return this.http.get<IAwesome[]>(this.url);
  }

  add(awesome: IAwesome): Observable<IAwesome> {
    return this.http.post <IAwesome>(this.url, awesome);
  }

  findById(id: number): Observable<IAwesome> {
    return this.http.get<IAwesome>(this.url + '/' + id);
  }

  delete(id: number): Observable<IAwesome> {
    return this.http.delete<IAwesome>(this.url + '/' + id);
  }

  update(awesome: IAwesome, idAwesome: number): Observable<IAwesome> {
    return this.http.put<IAwesome>(this.url + '/' + idAwesome, awesome);
  }
}
