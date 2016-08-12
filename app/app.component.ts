import { Component } from 'angular2/core';
import { Food } from './food.model';
import { FoodListComponent } from './food-list.component';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <food-list [foodList]="foods"></food-list>
    </div>
  `
})
export class AppComponent {
  public foods: Food[];
  constructor() {
    this.foods = [
      new Food("Hotcakes with Sausage",730, "I was craving some high-calorie food!",0),
      new Food("Yogurt",190,"Blueberry flavor, yum!",1),
      new Food("Banana",105,"Eat one every day.",2)
    ];
  }
}
