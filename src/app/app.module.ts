import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderfooterModule } from "./modules/headerfooter/headerfooter.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderfooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
