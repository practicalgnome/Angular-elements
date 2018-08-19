import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ItemComponent {

  @Input() carItem;

}


