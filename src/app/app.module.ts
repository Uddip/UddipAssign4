/*
* Uddip Amin
* 991518202
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderfooterModule } from "./modules/headerfooter/headerfooter.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './modules/material-ui/material-ui.module';
import { AminComponent } from './amin/amin.component';

@NgModule({
  declarations: [
    AppComponent,
    AminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderfooterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
	  MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
