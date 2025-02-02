import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { inject } from '@angular/core';
import { TokenService } from './services/auth/token.service';
import { map } from 'rxjs';
import { HomeComponent } from './welcome/home/home.component';

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
    path: '',
    component: LoginComponent,
    title: 'Login to nevo',
  },
  {
    path: 'nevo',
    loadComponent: () =>
      import('./welcome/welcome.component').then((c) => c.WelcomeComponent),
    canMatch: [isAuth],
    children: [
      {
        path:'',
        component:HomeComponent
      },
      {
        path: 'recipes',
        loadComponent: () =>
          import('./welcome/recipes/recipes.component').then(
            (c) => c.RecipesComponent,
          ),
        children:[
          {
            path:'',
            loadComponent:()=>import('./welcome/recipes/view-recipe/view-recipe.component').then(c => c.ViewRecipeComponent)
          },
          {
            path:'recipe/:id',
            loadComponent:()=> import('./welcome/recipes/recipe/recipe.component').then(c => c.RecipeComponent)
          }
        ]
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./welcome/users/users.component').then(
            (c) => c.UsersComponent,
          ),
      },
      {
        path: 'posts',
        loadComponent: () =>
          import('./welcome/posts/posts.component').then(
            (c) => c.PostsComponent,
          ),
      },
      {
        path: 'todo',
        loadComponent: () =>
          import('./welcome/todos/todos.component').then(
            (c) => c.TodosComponent,
          ),
      },
      {
        path: 'quotes',
        loadComponent: () =>
          import('./welcome/quotes/quotes.component').then(
            (c) => c.QuotesComponent,
          ),
      },
    ],
  },
];
