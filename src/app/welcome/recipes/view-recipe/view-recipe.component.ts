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

  ngOnInit(): void {
    this.loaderService.showLoader();
    this.recipeService.getRecipes().subscribe({
      next: (res) => {
        const { recipes } = res;
        this.recipes = recipes;
        console.log(this.recipes);
        this.loaderService.hideLoader();
      },
      error: (err) => console.log(err),
    });
  }
}
