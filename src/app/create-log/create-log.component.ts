import { Component, OnInit } from '@angular/core';
import { Meal } from '../app.component';

@Component({
  selector: 'app-create-log',
  templateUrl: './create-log.component.html',
  styleUrls: ['./create-log.component.css']
})
export class CreateLogComponent implements OnInit {

  title = "Log a meal."
  testMeal = new Meal("test", "test", 1);
  constructor() { }

  ngOnInit() {
  }

}
