import { afterNextRender, inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public token = new BehaviorSubject<null | string>(null)
  private router = inject(Router)
  constructor() { 
   afterNextRender(()=>{
     if (typeof localStorage !== 'undefined') {
       const userToken = localStorage.getItem('userToken');
       if(userToken){
        this.token.next(userToken)
        this.router.navigate(['welcome'],{replaceUrl:true})
       }
       else{
         this.token.next(userToken);
       }
     }
   })
  }

  storeToken(token:string){
    this.token.next(token)
    localStorage.setItem('userToken',token)
  }

  clearToken(){
    this.token.next(null)
    localStorage.removeItem('userToken')
    this.router.navigate([''])
  }
}
