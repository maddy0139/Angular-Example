#Generate a new app
ng new app-name --style=scss --routing

#Generate component
ng generate component comp-name --module src/app/component
ng g c components/header --module src/app --skip-import

#Generate Services
ng generate service service-name

#Add Ant-Design
ng add ng-zorro-antd --i18n=en_US
ng add ng-zorro-antd --theme --i18n=en_US

#Run Project
ng serve -o

# AngularHrms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
