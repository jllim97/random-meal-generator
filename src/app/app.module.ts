import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './core/header/header.component';
import { MealShowcaseComponent } from './meal-showcase/meal-showcase.component';
import { MealCardComponent } from './meal-card/meal-card.component';
import { MealDetailComponent } from './meal-detail/meal-detail.component';
import { LayoutModule} from '@angular/cdk/layout';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { MealState } from './store/meal/meal.state';
import { GlobalState } from './store/global/global.state';
import { GLOBAL_STATE, MEAL_STATE } from './store/constants/state.constant';
import { HistoryMealsComponent } from './history-meals/history-meals.component';
import { MealDetailTableComponent } from './meal-detail-table/meal-detail-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MealShowcaseComponent,
    MealCardComponent,
    MealDetailComponent,
    HistoryMealsComponent,
    MealDetailTableComponent
  ],
  imports: [
  BrowserModule,
    CoreModule,
    AppRoutingModule,
    LayoutModule,
    NgxsModule.forRoot([MealState, GlobalState]),
    NgxsStoragePluginModule.forRoot({
      key: [MEAL_STATE, GLOBAL_STATE],
      storage: StorageOption.SessionStorage

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
