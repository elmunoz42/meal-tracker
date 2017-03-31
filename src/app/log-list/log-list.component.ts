import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../app.component';
import { FilterByCaloriesPipe } from '../filter-by-calories.pipe';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent {

  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
    
  }

  threshold: string = "all-meals";

  onChange(optionFromMenu) {
    this.threshold = optionFromMenu;
  }


}
