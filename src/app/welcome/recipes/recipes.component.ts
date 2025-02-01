import { Component, inject, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { LoaderService } from '../../loader/loader.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent {

 

}
