# EmployeePortal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Steps

1. ng new employeePortal  
2. cd employeePortal
3. npm install bootstrap@latest , import bootstrap in styles.css @import '~bootstrap/dist/css/bootstrap.css'
4. ng serve --open

* generate new components

5. open new terminal inside employeePortal
6. ng g c components/header | ng g c components/footer | ng g c components/main  | ng g c components/employeeDetails
7. emptied app.compoenent.html and added the component elements header , footer, and main in it
8. added employee-details element in main.component.html

* creating and importing user defined interface

9. create utility folder in components add Employee Interface with properties such as empId etc
10. import employee in amployee-details.component.ts and create array of Employee

* accessing employee in html 

11. check if array is empty or not using ngIf="employees.length!=0"
12. display employee using *ngFor="let employee of employees"

* Toggle details using event handler (click)="toggle(employee)" on condition *ngIf="employee.flag"
13. define method toggle(employee:Employee){employee.flag=!employee.flag} inside employee-details.component.ts
