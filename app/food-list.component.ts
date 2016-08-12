import { Component,EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { FoodComponent } from './food.component';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { NewFoodComponent } from './new-food.component';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  directives: [FoodComponent, EditFoodDetailsComponent, NewFoodComponent],
  template: `
    <new-food (onSubmitNewFood)="createFood($event)"></new-food>
    <edit-food-details *ngIf="selectedFood" [food]="selectedFood"></edit-food-details>
    <food-display *ngFor="#currentFood of foodList" [food]="currentFood" (click)="foodClicked(currentFood)" [class.selected]="currentFood === selectedFood"></food-display>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
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
}
