import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private http= inject(HttpClient)

  constructor() { }

  getRecipes(params:string = ''):Observable<any>{
    return this.http.get(`https://dummyjson.com/recipes${params ? `?${params}`:''}`);
  }
}
