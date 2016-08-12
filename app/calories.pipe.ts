import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: 'calories',
  pure: false
})
export class CaloriesPipe implements PipeTransform{
  transform(input: Food[], args){
    var desiredCalories = args[0];
    if(desiredCalories === "all"){
      return input
    }else if(desiredCalories === "low"){
      return input.filter(function(food){
        return(food.calories < 500);
      });
    }else{
      return input.filter(function(food){
        return(food.calories >= 500);
      });
    }
  }
}
