import { Component } from 'angular2/core';
import { Food } from './food.model';
import { FoodComponent } from './food.component';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  directives: [FoodComponent],
  template: `
    <food-display *ngFor="#currentFood of foodList" [food]="currentFood"></food-display>
  `
})
export class FoodListComponent {
  public foodList: Food[];
}
