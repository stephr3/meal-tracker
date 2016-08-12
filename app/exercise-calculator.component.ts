import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'exercise-calculator',
  inputs: ['foodList'],
  template:`
    <div class="content">
      <h3>Exercise Calculator</h3>
      <h4>Total Calories Eaten Today: {{total(foodList)}}</h4>
      <form>
        <div class="form-group">
          <input placeholder="Calories to Lose Today" type="number" #userGoal class="form-control input-lg">
        </div>
        <button class="btn btn-success btn-lg" (click)="save(userGoal)">Calculate</button>
      </form>
      <h4 *ngIf="newGoal">You need to jog for {{calculate(newGoal)}} minutes to burn {{newGoal}} calories.</h4>
    </div>
  `
})
export class ExerciseCalculatorComponent {
  public foodList: Food[];
  public newGoal: number = 0;
  total(lst: Food[]){
    var total: number = 0;
    lst.forEach(function(item){
      total = total + item.calories;
    });
    return total;
  }
  save(userGoal: HTMLInputElement){
    this.newGoal = parseInt(userGoal.value);
    console.log(this.newGoal);
  }
  calculate(goal: number){
    return Math.round((goal/350) * 60);
  }
}
