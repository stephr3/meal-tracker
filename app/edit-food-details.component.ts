import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <input [(ngModel)]="food.name">
    <input [(ngModel)]="food.calories" type="number">
    <input [(ngModel)]="food.details">
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
