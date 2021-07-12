import { Component, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddHistoryMeal } from '../store/meal/meal.action';
import { MealDetailData } from './../meal-detail/mean-detail-data';
import { MealDetailModel } from 'src/app/meal-detail/meal-detail.component';

@Component({
  selector: 'app-meal-showcase',
  templateUrl: './meal-showcase.component.html',
  styleUrls: ['./meal-showcase.component.scss']
})
export class MealShowcaseComponent implements OnInit {

  isLoading: boolean = false;
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onGenerate() {
    //call api after done.
    const cardElement = document.querySelector('.meal-card-item');
    this.isLoading = true;
    setTimeout(() => {
      if(this.isLoading) {
        this.isLoading = false;
        const mealData: MealDetailModel = {...MealDetailData.GeneratedMeal,
        name: 'name' + Math.random()}
        this.store.dispatch(new AddHistoryMeal(mealData));
      }
    }, 1000);
  }
}
