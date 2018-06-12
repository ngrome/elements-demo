import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ListComponent } from './list/list.component';

import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  entryComponents: [ListComponent]
})
export class AppModule {

  constructor(private injector: Injector){
    const listComponent = createCustomElement(ListComponent, { injector } );
    customElements.define('app-beer-list', listComponent);
  }

  ngDoBootstrap() {}

}
