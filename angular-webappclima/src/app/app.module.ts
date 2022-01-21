import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClimaAppComponent } from './Components/clima-app/clima-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ClimaAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
