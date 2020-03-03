import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<[User]>{
    return this.http.get<[User]>(`/userdata`);
  }

  checkUser(user: string, pass: string){
    return this.http.get(`/userdata?username=${user}&password=${pass}`);
  }

  register(user: User) {
    return this.http.post(`/userdata`, user);
}



}
