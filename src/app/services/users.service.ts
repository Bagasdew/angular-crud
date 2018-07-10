import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

export class User {
  public username: string;
  
  initValues(user: any) {
    this.username = user.username;
    
  }
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url + 'all');
  }


  add(data: User): Observable<any> {
    return this.http.post(this.url + 'add/' + data.username);
  }

}
