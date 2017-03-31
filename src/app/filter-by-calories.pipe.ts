import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCalories'
})
export class FilterByCaloriesPipe implements PipeTransform {

  transform(meals: any, threshold: any): any {
    var outputArr: any[] = [];

    if (threshold==="all-meals"){

      return meals;

    } else if (threshold==="lower-calorie"){

      for(var i = 0; i<meals.length; i++){

        if(meals[i].calories<500){
          outputArr.push(meals[i]);
          console.log(outputArr);
        }

      }
      return outputArr;

    } else if (threshold==="high-calorie"){

      for(var j = 0; j<meals.length; j++){

        if(meals[j].calories>500){
          outputArr.push(meals[j]);
          console.log(outputArr);
        }

      }
      return outputArr;
    }

  }

}
