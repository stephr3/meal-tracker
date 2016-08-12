import { Component } from 'angular2/core';
import { Food } from './food.model';
import { FoodListComponent } from './food-list.component';
import { ExerciseCalculatorComponent } from './exercise-calculator.component';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent, ExerciseCalculatorComponent],
  template: `
    <div class="jumbotron">
      <h1>Meal Tracker</h1>
    </div>
    <div class="container">
      <food-list [foodList]="foods"></food-list>
    </div>
    <div class="container">
      <exercise-calculator [foodList]="foods"></exercise-calculator>
    </div>
  `
})
export class AppComponent {
  public foods: Food[];
  constructor() {
    this.foods = [
      new Food("Hotcakes with Sausage",730, "I was craving some high-calorie food!",0, "7:00"),
      new Food("Yogurt",190,"Blueberry flavor, yum!",1, "9:30"),
      new Food("Banana",105,"Eat one every day.",2, "9:30")
    ];
  }
}
