import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCredentials } from '../../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(user:UserCredentials){
   return this.http.post('https://dummyjson.com/auth/login',user);
  }

}
