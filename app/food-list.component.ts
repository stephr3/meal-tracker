import { Component,EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { FoodComponent } from './food.component';
import { EditFoodDetailsComponent } from './edit-food-details.component';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  directives: [FoodComponent, EditFoodDetailsComponent],
  template: `
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
}
