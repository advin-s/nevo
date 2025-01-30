import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { TokenService } from "./token.service";
import { switchMap, tap } from "rxjs";
import { Router } from "@angular/router";


export const authInterceptor:HttpInterceptorFn = (req:HttpRequest<unknown>,next:HttpHandlerFn) =>{
    const tokenService = inject(TokenService)
    const router = inject(Router)
    return tokenService.token.pipe(switchMap(token => {
        if(!token){
            router.navigate([''])
            throw new Error('Invalid token')
        }
        const modifiedReq = req.clone({
            headers:req.headers.set('Authorization',`Bearer ${token}`)
        })
        return next(modifiedReq)
    }))
}