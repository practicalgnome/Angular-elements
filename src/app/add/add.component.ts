import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  carName = '';
  carYear = '';

  @Output() onAddCar = new EventEmitter();

  addCar() {
    this.onAddCar.emit({
      name: this.carName,
      year: this.carYear
    });
    this.carName = '';
    this.carYear= '';
  }

}
