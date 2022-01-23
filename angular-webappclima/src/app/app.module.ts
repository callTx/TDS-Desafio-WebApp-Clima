/* Módulo Raiz da Aplicação */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
/*Import o Component para ser declarado no module*/
import { ClimaAppComponent } from './Components/clima-app/clima-app.component';

import { HttpClientModule } from '@angular/common/http';
import { PagHomeComponent } from './pag-home/pag-home.component';

/* Declarado o Component clima-app.component em declarations*/
@NgModule({
  /** Recebe Components, Directives, Pipes */
  declarations: [
    AppComponent,
    ClimaAppComponent,
    PagHomeComponent
  ],
  /*Recebe os imports do Modules*/
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  /** Recebe os Services */
  providers: [],
  /*Recebe o Component que será instanciando no inicio da aplicação*/
  bootstrap: [AppComponent]
})

/** Módulo raiz da aplicação */
export class AppModule { }
