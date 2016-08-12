import { Component,EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { FoodComponent } from './food.component';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { NewFoodComponent } from './new-food.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [CaloriesPipe],
  directives: [FoodComponent, EditFoodDetailsComponent, NewFoodComponent],
  template: `
    <div class="content">
      <div class="row">
        <div class="col-sm-6">
          <new-food (onSubmitNewFood)="createFood($event)"></new-food>
        </div>
        <div class="col-sm-6">
          <h3>Select a Meal Item to Edit It...</h3>
          <edit-food-details *ngIf="selectedFood" [food]="selectedFood"></edit-food-details>
        </div>
      </div>
    </div>
    <div class="content">
    <h3>View Meal Items</h3>
      <select (change)="onChange($event.target.value)" class="form-control">
        <option value="all" selected="selected">Show All</option>
        <option value="high">High Calorie</option>
        <option value="low">Low Calorie</option>
      </select>
      <food-display *ngFor="#currentFood of foodList | calories:filterCalories" [food]="currentFood" (click)="foodClicked(currentFood)" [class.selected]="currentFood === selectedFood"></food-display>
    </div>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  public filterCalories: string = "all";
  constructor(){
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void{
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
    console.log(clickedFood);
  }
  createFood(params: string[]): void{
    this.foodList.push(
      new Food(params[0], parseInt(params[1]), params[2], this.foodList.length)
    );
  }
  onChange(filterOption){
    this.filterCalories = filterOption;
  }
}
