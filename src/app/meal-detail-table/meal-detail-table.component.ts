import { Component, Input, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { MealDetailModel } from 'src/app/meal-detail/meal-detail.component';
import { MealState } from '../store/meal/meal.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-meal-detail-table',
  templateUrl: './meal-detail-table.component.html',
  styleUrls: ['./meal-detail-table.component.scss']
})
export class MealDetailTableComponent implements OnInit {

  @Input() mealDetailModel: MealDetailModel = {} as MealDetailModel;
  constructor() { }

  ngOnInit(): void {
  }

}
