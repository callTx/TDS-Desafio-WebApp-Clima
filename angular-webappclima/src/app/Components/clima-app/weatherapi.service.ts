import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from './location';

/**Cria anotação para classe WeatherapiService */
/** Permite injetar a classe WeatherapiService em outras classes */
@Injectable({
  providedIn: 'root'
})
/* Expõe a classe WeatherapiService para todos os arquivos da Aplicação*/
export class WeatherapiService {
  weather_data: any;
  private key= "1e460c534dcd4c719f8233936222001";
  localidade_nome : any;
  forecast_day_number = 1;
  aqi = "no";
  alert = "no";
  private url : any;

  response: any;

  constructor(private httpClient: HttpClient) { 

    //this.getWeatherData();
  }

  doGetWeatherApi(){
    return this.httpClient.get(`http://api.weatherapi.com/v1/forecast.json?key=1e460c534dcd4c719f8233936222001&q=London&days=1&aqi=no&alerts=no`).toPromise();
  
  }

  
}
