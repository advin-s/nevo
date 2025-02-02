import { afterNextRender, inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
       const expiresIn = parseInt(
         localStorage.getItem('expiresIn')?.split(',').join('') || '0',
       );
       this.router.events.subscribe(event =>{
         if(event instanceof NavigationEnd){
           localStorage.setItem('lastRoute', event.urlAfterRedirects)
         }
       })
    
       const currentTime = new Date().getTime()
       console.log(currentTime);
       
       if(userToken && expiresIn > currentTime){
        this.token.next(userToken)
        const lastRoute = localStorage.getItem('lastRoute')
        if(lastRoute){
          this.router.navigateByUrl(lastRoute)
        }
        else{
          this.router.navigate(['nevo'],{replaceUrl:true})
        }
       }
       else{
         this.token.next(userToken);
       }
     }
   })
  }


  storeToken(token:string){
    this.token.next(token)
    const expiresIn = new Date().getTime() + 60 * 60 * 1000;
    localStorage.setItem('userToken',token)
    localStorage.setItem('expiresIn', expiresIn.toLocaleString())
  }

  clearToken(){
    this.token.next(null)
    localStorage.removeItem('userToken')
    this.router.navigate([''])
  }
}
