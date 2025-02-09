import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { LoaderService } from '../../../loader/loader.service';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-view-recipe',
  standalone: true,
  imports: [RecipeItemComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './view-recipe.component.html',
  styleUrl: './view-recipe.component.scss',
})
export class ViewRecipeComponent {
  private recipeService = inject(RecipesService);
  private loaderService = inject(LoaderService);
  public recipes: any[] = [];
  public currentPage: number = 0;
  public disablePrev: boolean = true;
  public disableNext: boolean = false;
  public pageStart: number = 1;
  public pageEnd: number = 10;
  public input = new FormControl();

  ngOnInit(): void {
    this.input.valueChanges.pipe(debounceTime(3000)).subscribe((res) => {
      console.log(res);
    });
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

  paginate(nav: string) {
    this.loaderService.showLoader();
    const itemsPerPage = 10;

    if (nav === 'next') {
      this.currentPage++;
    }
    if (nav === 'prev' && this.currentPage > 0) {
      this.currentPage--;
    }

    this.pageStart = this.currentPage * itemsPerPage + 1;
    this.pageEnd = Math.min((this.currentPage + 1) * itemsPerPage, 50); // Assuming total items = 50

    this.recipeService
      .getRecipes(
        `skip=${this.currentPage * itemsPerPage}&limit=${itemsPerPage}`,
      )
      .subscribe({
        next: (res) => {
          const { recipes } = res;
          this.recipes = recipes;
          this.disablePrev = this.currentPage === 0;
          this.disableNext = this.pageEnd >= 50; // Assuming 50 total items
          this.loaderService.hideLoader();
        },
        error: (err) => {
          console.log(err);
          this.loaderService.hideLoader();
        },
      });
  }
}
