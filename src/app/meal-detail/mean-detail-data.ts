import {
  HistoryMealModel,
  MealDetailModel
} from "./meal-detail.component";

export class MealDetailData {
  public static readonly GeneratedMeal: MealDetailModel = {
    name: 'Grilled Salmon',
    description: 'Grilled Salmon',
    type: 'Western',
    author: {
      name: 'Mr Nobody',
    },
    ingredients: [
      'salmon 1 units',
      'lemon 1 pcs',
      'pepper 500 grams'
    ],
    videoLinks: [{
      videoName: 'Simple Pan Grilled Salmon | Pan Seared Salmon',
      videoLink: 'https://www.youtube.com/watch?v=1J4d0kJ5DNA'
    }]
  }

  public static readonly HistoryMeals: HistoryMealModel[] = [{
    id: 1,
    mealDetail: {
      name: 'Grilled Salmon',
      description: 'Grilled Salmon',
      type: 'Western',
      author: {
        name: 'Mr Nobody',
      },
      ingredients: [
        'salmon 1 units',
        'lemon 1 pcs',
        'pepper 500 grams'
      ],
      videoLinks: [{
        videoName: 'Simple Pan Grilled Salmon | Pan Seared Salmon',
        videoLink: 'https://www.youtube.com/watch?v=1J4d0kJ5DNA'
      }]
    }
  },
  {
    id: 2,
    mealDetail: {
      name: 'Grilled Steak',
      description: 'Grilled Steak',
      type: 'Western',
      author: {
        name: 'Mr Steak',
      },
      ingredients: [
        'Steak 1 units',
        'lemon 1 pcs',
        'pepper 500 grams'
      ],
      videoLinks: [{
        videoName: 'Simple Pan Grilled Salmon | Pan Seared Salmon',
        videoLink: 'https://www.youtube.com/watch?v=1J4d0kJ5DNA'
      }]
    }
  }


]
}
