import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { AddCardComponent } from './add-card/add-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddCardComponent
    
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
