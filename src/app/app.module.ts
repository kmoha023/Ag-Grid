import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AgGridModule} from "ag-grid-angular/main";
import { MyAgGridComponentComponent } from './my-ag-grid-component/my-ag-grid-component.component';
import { RegComponentComponent } from './reg-component/reg-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAgGridComponentComponent,
    RegComponentComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents(
      [RegComponentComponent]
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
