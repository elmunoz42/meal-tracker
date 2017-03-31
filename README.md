# MealTracker

An app that allows user to log their meals and keep track of the caloric intake. The list of logged meals can be filtered to display lower-calorie meals and high-calorie meals. This project was generated with [angular-cli](https://github.com/angular/angular-cli).

## Development Plan

|Status|Objective|Approach|
|------|---------|--------|
|Done |1)User can view a list of foods they have logged.|a) Create constructor. b) Hard code a couple of instances for testing. c) Use component to display list instead of template.|
|Done |2) User can log a food they have eaten by submitting a form with food name, calories and details. | Create an intake form component. |
|Done |3) User can click a food to edit its name, details or calories.| Use [(ngModule)] two way data-binding to update the chosen object.|
|Done |4) User can choose options to view all foods, only high-calorie foods (more than 500 calories), or only lower-calorie foods (less than 500 calories).| Use a pipe function to filter the instances to be displayed.|

## Installing project

* clone project from github repository https://github.com/elmunoz42/meal-tracker.git
* in terminal  > project directory > run `npm install`.
* `npm list -g` bower to check that bower version is 1.8.0 or later.
* if above is true run `bower init` otherwise `bower install`.
* in _terminal  > project directory >_ run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Support and contact details

_617-780-8362_

## Technologies Used

* _Angular-Cli_
* _Bower_
* _TypeScript_

### License

*MIT*

Copyright (c) 2017 **_Carlos Munoz Kampff_**

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
