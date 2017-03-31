import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Meal, AppComponent } from '../app.component';


@Component({
  selector: 'app-create-log',
  templateUrl: './create-log.component.html',
  styleUrls: ['./create-log.component.css']
})
export class CreateLogComponent implements OnInit {

  @Output() newTaskSender = new EventEmitter();

  submitForm(newName: string, newDetails: string, newCalories: any ){
    var newMealToAdd: Meal = new Meal(newName, newDetails, parseFloat(newCalories));
    this.newTaskSender.emit(newMealToAdd);
  }

  constructor() { }

  ngOnInit() {
  }

}
