import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { inject } from '@angular/core';
import { TokenService } from './services/auth/token.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { map } from 'rxjs';

const isAuth:CanMatchFn = (route,segments) =>{
    const tokenService = inject(TokenService)
    const router = inject(Router)
     return tokenService.token.pipe(map(token => 
     {
        if(token){
            return true
        }
        else return new RedirectCommand(router.parseUrl(''))
     }
     ))
}

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent,
        title:'Login to nevo'

    },
    {
        path:'welcome',
        loadComponent:()=>import('./welcome/welcome.component').then(c => c.WelcomeComponent),
        canMatch:[isAuth]
    }
];
