import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Meal Tracker';
  masterMealList = [(new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354)),
  new Meal("Fries", "I only ate half of them.", 365)];

  
  addMeal(newMealFromChild: Meal) {
  this.masterMealList.push(newMealFromChild);
  }
}

export class Meal {

  constructor(public name: string, public details: string, public calories: number) {}

}
