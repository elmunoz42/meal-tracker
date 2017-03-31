# MealTracker

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development Planning

|Status|Objective|Approach|
|------|---------|--------|
|ToDo | User can log a food they have eaten by submitting a form with food name, calories and details. | a) Create an intake form component. b) Use (click)=”showForm()” function to show form. c) Use (click)=”submitHasBeenPressed()” function to toggle the form to hide.|
|ToDo |User can view a list of foods I have logged.|Use *ngFor to loop through objects.| 
|ToDo |User can choose options to view all foods, only high-calorie foods (more than 500 calories), or only lower-calorie foods (less than 500 calories).| Use a pipe function to filter the instances to be displayed.|
|ToDo |User can click a food to edit its name, details or calories.| Use [(ngModule)] two way data-binding to update the chosen object.|

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.



## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
