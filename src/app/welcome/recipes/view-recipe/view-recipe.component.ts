import { Component, inject } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { LoaderService } from '../../../loader/loader.service';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-recipe',
  standalone: true,
  imports: [RecipeItemComponent,CommonModule],
  templateUrl: './view-recipe.component.html',
  styleUrl: './view-recipe.component.scss',
})
export class ViewRecipeComponent {
  private recipeService = inject(RecipesService);
  private loaderService = inject(LoaderService);
  public recipes: any[] = [];
  public currentPage:number = 0;

  ngOnInit(): void {
    this.loaderService.showLoader();
    this.recipeService.getRecipes('limit=10').subscribe({
      next: (res) => {
        const { recipes } = res;
        this.recipes = recipes;
        console.log(this.recipes);
        this.loaderService.hideLoader();
      },
      error: (err) => console.log(err),
    });
  }


  paginate(nav:string){
    this.loaderService.showLoader()
    const itemsPerPage = Math.floor(this.recipes.length)
    console.log(itemsPerPage);
    
    this.currentPage ++
    this.recipeService.getRecipes(`skip=${this.currentPage * itemsPerPage}&limit=10`).subscribe({
      next:(res) => {
        console.log(res)
        const { recipes } = res
        this.recipes = recipes
        this.loaderService.hideLoader()
      }    
    })
  }
}
