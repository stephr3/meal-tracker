import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <h2 *ngFor="#food of foods">{{food.name}}</h2>
    </div>
  `
})
export class AppComponent {
  public foods: Food[];
  constructor() {
    this.foods = [
      new Food("Hotcakes with Sausage",730, "I was craving some high-calorie food!"),
      new Food("Yogurt",190,"Blueberry flavor, yum!"),
      new Food("Banana",105,"Eat one every day.")
    ];
  }
}
