import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ListComponent {

  cars = [{
    name: 'Ford',
    year: '2015'
  }, {
    name: 'Mazda',
    year: '2010'
  }, {
    name: 'Audi',
    year: '2017'
  }];

  constructor() {
  }

  updateList(car) {
    this.cars.push(car);
  }

}
