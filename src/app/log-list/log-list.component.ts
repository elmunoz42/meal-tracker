import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../app.component';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {

  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

  constructor() { }

  ngOnInit() {
  }

}
