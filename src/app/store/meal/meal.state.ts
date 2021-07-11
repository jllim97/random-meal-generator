import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { HistoryMealModel } from "../../meal-detail/meal-detail.component";
import { MEAL_STATE } from "../constants/state.constant";
import { AddHistoryMeal } from './meal.action';

export interface MealStateModel {
  selectedMeal: HistoryMealModel;
  historyMeals: HistoryMealModel[];
}
@State<MealStateModel>({
  name: MEAL_STATE,
  defaults: {
    selectedMeal: {} as HistoryMealModel,
    historyMeals: []
  }
})
@Injectable()
export class MealState {
  @Selector()
  getCurrentId(state: MealStateModel): number {
    const ids: number[] = state.historyMeals.map(history => {
      return history.id;
    });
    return Math.max(...ids);
  }


  @Action(AddHistoryMeal)
  addHistoryMeal(stateContext: StateContext<MealStateModel>, payload: AddHistoryMeal) {
    const state = stateContext.getState();
    const newHistoryMeal: HistoryMealModel = {
      id: this.getCurrentId(state) + 1,
      mealDetail: payload.payload
    };
    stateContext.setState({
      ...state,
      historyMeals: [
        ...state.historyMeals,
        newHistoryMeal
      ]
    });
  }
}
