import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  entryComponents: [ListComponent],
  providers: [],
  bootstrap: []
})
export class AppModule { 
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // All this code can be placed to the constructor function, leaving this function empty.
    const el = createCustomElement(ListComponent, { injector: this.injector });
    // Name of custom element must include dash!
    customElements.define('app-list', el);

    // This component exists in the global register of custom elements
    // We get function.
    console.log(customElements.get('app-list'));
    // This component doesn't exist in the global register of custom elements.
    // We get undefined.
    console.log(customElements.get('app-root'));
}
}
