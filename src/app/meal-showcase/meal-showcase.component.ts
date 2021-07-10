import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-meal-showcase',
  templateUrl: './meal-showcase.component.html',
  styleUrls: ['./meal-showcase.component.scss']
})
export class MealShowcaseComponent implements OnInit {

  isLoading: boolean = false;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  onGenerate() {
    //call api after done.
    const cardElement = document.querySelector('.meal-card-item');
    this.isLoading = true;
    setTimeout(() => {
      if(this.isLoading) {
        this.isLoading = false;
      }
    }, 1000);
  }
}
