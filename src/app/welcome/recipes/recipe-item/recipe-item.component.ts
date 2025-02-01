import { Component, input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss',
  host: {
    class: 'col-12 col-md-6 col-lg-3',
  },
})
export class RecipeItemComponent {
  recipe = input.required<any>();
}
