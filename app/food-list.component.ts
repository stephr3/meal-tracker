import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  template: `
    <h2 *ngFor="#food of foodList">{{food.name}}</h2>
  `
})
export class FoodListComponent {
  public foodList: Food[];
}
