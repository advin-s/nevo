import { Component, inject, input, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { LoaderService } from '../../../loader/loader.service';
import { StarComponent } from '../../../shared/rating/star/star.component';
import { RatingComponent } from '../../../shared/rating/rating.component';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [StarComponent,RatingComponent, KeyValuePipe],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent implements OnInit {

  public id = input.required<string>()
  private recipeService = inject(RecipesService)
  private loaderService = inject(LoaderService)
  public recipe:any

  ngOnInit(): void {
    this.loaderService.showLoader()
   this.recipeService.getRecipe(this.id()).subscribe({
    next:(res) => {this.recipe = res; this.loaderService.hideLoader();console.log(this.recipe);
    },
    error:(err) => console.error(err)
   })
  }

  transformCamelCase(value:any){
    const stringWithCaps = value.split(/(?=[A-Z])/);
    return stringWithCaps ? stringWithCaps.join(' ') : value ;
  }

}
