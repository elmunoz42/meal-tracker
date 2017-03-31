import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Meal } from '../app.component';

@Component({
  selector: 'app-edit-log',
  templateUrl: './edit-log.component.html',
  styleUrls: ['./edit-log.component.css']
})
export class EditLogComponent implements OnInit {

  @Input() childSelectedMeal: Meal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
  
  constructor() { }

  ngOnInit() {
  }

}
