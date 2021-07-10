import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.scss']
})
export class MealDetailComponent implements OnInit {

  mealDetailModel: MealDetailModel = {
    name: 'Grilled Salmon',
    description: 'Grilled Salmon',
    type: 'Western',
    ingredients: [
      'salmon 1 units',
      'lemon 1 pcs',
      'pepper 500 grams'
    ],
    videoLinks: ['#']
  }
  constructor() { }

  ngOnInit(): void {
  }

}

export interface MealDetailModel {
  name: string;
  description: string;
  type: string;
  ingredients: string[];
  videoLinks: string[];
}

export interface IngredientModel {
  name: string;
}
