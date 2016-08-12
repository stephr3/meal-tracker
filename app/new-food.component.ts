
import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
  <h3>Log a New Meal Item</h3>
  <form>
    <div class="form-group">
      <input placeholder="Name" #newName class="input-lg">
    </div>
    <div class="form-group">
      <input placeholder="Calories" type="number" #newCalories class="input-lg">
    </div>
    <div class="form-group">
      <input placeholder="Details" #newDetails class="input-lg">
    </div>
    <div class="form-group">
      <input placeholder="Time" #newTime class="input-lg" type="time">
    </div>
    <button (click)="addFood(newName, newCalories, newDetails, newTime)" class=".btn btn-success btn-lg">Log Meal Item</button>
  </form>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<string[]>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(foodName: HTMLInputElement, foodCalories: HTMLInputElement, foodDetails: HTMLInputElement, foodTime: HTMLInputElement){
    var params: string[] = [foodName.value, foodCalories.value, foodDetails.value, foodTime.value];
    this.onSubmitNewFood.emit(params);
    foodName.value = "";
    foodCalories.value = "";
    foodDetails.value = "";
    foodTime.value = "";
  }
}
