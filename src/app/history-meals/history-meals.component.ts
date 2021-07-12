import { Component, Input, OnInit } from '@angular/core';
import { MealState } from '../store/meal/meal.state';
import { HistoryMealModel } from 'src/app/meal-detail/meal-detail.component';

@Component({
  selector: 'app-history-meals',
  templateUrl: './history-meals.component.html',
  styleUrls: ['./history-meals.component.scss']
})
export class HistoryMealsComponent implements OnInit {

  @Input() historyMeals: HistoryMealModel[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
