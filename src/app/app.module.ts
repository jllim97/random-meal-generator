import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './core/header/header.component';
import { MealShowcaseComponent } from './meal-showcase/meal-showcase.component';
import { MealCardComponent } from './meal-card/meal-card.component';
import { MealDetailComponent } from './meal-detail/meal-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MealShowcaseComponent,
    MealCardComponent,
    MealDetailComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
