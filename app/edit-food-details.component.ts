import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <div class="form-group">
      <input [(ngModel)]="food.name" class="input-lg">
    </div>
    <div class="form-group">
      <input [(ngModel)]="food.calories" type="number" class="input-lg">
    </div>
    <div class="form-group">
      <input [(ngModel)]="food.details" class="input-lg">
    </div>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
