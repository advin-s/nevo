import { Component, input } from '@angular/core';
import { StarComponent } from './star/star.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [StarComponent, NgFor],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
})
export class RatingComponent {
  public ratingValue = input.required<number>();
  public rating:any[] = []
  ngOnInit() {
    const arr = new Array(Math.floor(this.ratingValue())).fill(1)
    const decimalvalue = this.ratingValue() - Math.floor(this.ratingValue())
    console.log(decimalvalue.toFixed(1));
    arr.push(Number(decimalvalue.toFixed(1)));
    console.log(arr);
    this.rating = arr
  }
}
