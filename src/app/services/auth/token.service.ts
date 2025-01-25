import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public token = new BehaviorSubject<null | string>(null)

  constructor() { 
    if(typeof localStorage !== undefined){
      const userToken = localStorage.getItem('userToken')
      this.token.next(userToken)
    }
    else this.token.next(null)
  }

  storeToken(token:string){
    this.token.next(token)
    localStorage.setItem('userToken',token)
  }

  clearToken(){
    this.token.next(null)
    localStorage.removeItem('userToken')
  }
}
