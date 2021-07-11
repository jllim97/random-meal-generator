import { MealDetailModel } from "src/app/meal-detail/meal-detail.component";

export class AddHistoryMeal {
  static readonly type = '[Meal] Add History Meal';
  constructor(public payload: MealDetailModel) {}
}


