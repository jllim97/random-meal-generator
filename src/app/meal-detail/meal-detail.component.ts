import { Component, OnInit } from '@angular/core';
import { MealDetailData } from './mean-detail-data';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.scss']
})
export class MealDetailComponent implements OnInit {

  mealDetailModel: MealDetailModel = MealDetailData.GeneratedMeal;
  constructor() { }

  ngOnInit(): void {
  }

}

export interface MealDetailModel {
  name: string;
  description: string;
  author: AuthorModel;
  postBy?: string;
  type: string;
  ingredients: string[];
  videoLinks: VideoLinkModel[];
}

export interface IngredientModel {
  name: string;
}

export interface AuthorModel {
  name: string;
  hyperlink?: string;
}
export interface VideoLinkModel {
  videoName: string;
  videoLink: string;
}

export interface HistoryMealModel {
  id: number;
  mealDetail: MealDetailModel;
}
