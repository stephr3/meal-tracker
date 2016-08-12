import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template:`
    <h2>{{food.name}} | {{food.calories}} calories |</h2>
    <p>"{{food.details}}"</p>
  `
})
export class FoodComponent {
  public food: Food;
}
