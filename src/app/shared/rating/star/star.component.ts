import { NgStyle } from '@angular/common';
import { AfterViewInit, Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss'
})
export class StarComponent implements OnInit, AfterViewInit {

  public value = input.required<number>()


  ngOnInit(): void {
    // const rating = 1

    // if()
  }
  
  ngAfterViewInit(): void {
    
  }

  renderBackground(value:number){
    if(value === 1) {
      return `background: linear-gradient(to right, rgba(255, 255, 0, 1) 50%);`;
    }
    else{
      return `background: linear-gradient(to right, rgba(255, 255, 0, 1) ${value * 100}, rgba(255, 255, 255, 1) ${(1-value)/100});`;
    }
  }
  
}
