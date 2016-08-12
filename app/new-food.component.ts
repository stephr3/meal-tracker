
import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
    <h3>Log a New Meal Item</h3>
    <form>
      <input placeholder="Name" #newName>
      <input placeholder="Calories" type="number" #newCalories>
      <input placeholder="Details" #newDetails>
      <button (click)="addFood(newName, newCalories, newDetails)">Log Meal Item</button>
    </form>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<string[]>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(foodName: HTMLInputElement, foodCalories: HTMLInputElement, foodDetails: HTMLInputElement){
    var params: string[] = [foodName.value, foodCalories.value, foodDetails.value];
    this.onSubmitNewFood.emit(params);
    foodName.value = "";
    foodCalories.value = "";
    foodDetails.value = "";
  }
}
