import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'http://localhost:53754/auth/'

  constructor(private http: HttpClient) { }

  register(user){
    return this.http.post(this.baseUrl+'register',user);
  }

  login(user){
    return this.http.post(this.baseUrl+'login',user);
  }

  logout(){
    localStorage.removeItem('username');
    localStorage.removeItem('token_value');
  }

  get getUsername(){
    return localStorage.getItem('username');
  }

  get isAuthenticated(){
    return !!localStorage.getItem('token_value');
  }
}
