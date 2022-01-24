/** Importa as classes do Angular Core */
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Location } from './location';
/** Importa o serviço weatherapi.service */
import { WeatherapiService } from './weatherapi.service';


/*Repasa ao compilador informações da classe em forma de anotação
 Component (
   metadados,
   metadados,
   ...
 )
*/
@Component({
  /*Transforma o selector em tag html*/
  selector: 'app-clima-app',
  templateUrl: './clima-app.component.html',
  styleUrls: ['./clima-app.component.scss']
})

/** Expoe a classe ClimaAppComponent para outros arquivos do Angular */
export class ClimaAppComponent implements OnInit {

  data: any; 

  nome_cidade: any;
  descricao: any;
  temp_atual: any;
  temp_min: any;
  temp_max: any;
  temp_dawn: any;
  temp_morning: any;
  temp_afternoon: any;
  temp_night: any;
  localidade = "London";
  
  
  constructor(private weatherapiservices: WeatherapiService,private el:ElementRef, private renderer:Renderer2  ) {
    
  }

 
  ngOnInit(): void {

    this.getNomeCidade();
    this.getClimaDescricao();
    this.getClimaTemperaturaCelcius();
    this.getClimaTemperaturaMinCelcius();
    this.getClimaTemperaturaMaxCelcius();
    this.getDawnTemperatura();
    this.getMorningTemperatura();
    this.getAfternoonTemperatura();
    this.getNightTemperatura();
  }


  //Recupera o nome da cidade 
  async getNomeCidade(){
    this.data = await this.weatherapiservices.doGetWeatherApi(this.localidade);
    
    this.nome_cidade = this.data.location.name.toUpperCase();
    //console.log(this.nome_cidade);
  }

  //Recupera a temperatura do clima em graus celcius °C
  async getClimaTemperaturaCelcius(){
    this.data = await this.weatherapiservices.doGetWeatherApi(this.localidade);

    this.temp_atual = this.data.current.temp_c;
    //console.log(this.temp_atual);
  }

  //Recupera a temperatura max do clima em °C
  async getClimaTemperaturaMinCelcius(){
    this.data = await this.weatherapiservices.doGetWeatherApi(this.localidade);


    let data_atual = new Date();
    let hora_local = data_atual.getHours();


    let forecast_keys = this.data.forecast.forecastday.find(function(item:any){return item });
    this.temp_min = forecast_keys.day.mintemp_c
  
    
  }

  //Recupera a temperatura max do clima em °C
  async getClimaTemperaturaMaxCelcius(){
    this.data = await this.weatherapiservices.doGetWeatherApi(this.localidade);

    let forecast_keys = this.data.forecast.forecastday.find(function(item:any){return item });
    this.temp_max = forecast_keys.day.maxtemp_c
   
  }

  //Recupera a descrição do clima
  async getClimaDescricao(){
    
    this.data = await this.weatherapiservices.doGetWeatherApi(this.localidade);

    this.descricao = this.data.current.condition.text;
    
    this.descricao =  this.descricao.charAt(0).toLowerCase() + this.descricao.slice(1);
  }

  //Recupera a temp de Dawn 3:00
  async getDawnTemperatura(){

    this.data = await this.weatherapiservices.doGetWeatherApi(this.localidade);
    let forecast_keys = this.data.forecast.forecastday.find(function(item:any){return item });
    let hours_key = forecast_keys.hour[3];

    this.temp_dawn = hours_key.temp_c;
    
  }

  //Recupera a temp de Morning 9:00
  async getMorningTemperatura(){

    this.data = await this.weatherapiservices.doGetWeatherApi(this.localidade);
    let forecast_keys = this.data.forecast.forecastday.find(function(item:any){return item });
    let hours_key = forecast_keys.hour[9];

    this.temp_morning = hours_key.temp_c;
    
  }

  //Recupera a temp de Afternoon 15:00
  async getAfternoonTemperatura(){

    this.data = await this.weatherapiservices.doGetWeatherApi(this.localidade);
    let forecast_keys = this.data.forecast.forecastday.find(function(item:any){return item });
    let hours_key = forecast_keys.hour[15];

    this.temp_afternoon = hours_key.temp_c;
    
  }

  //Recupera a temp de Night 21:00
  async getNightTemperatura(){

    this.data = await this.weatherapiservices.doGetWeatherApi(this.localidade);
    let forecast_keys = this.data.forecast.forecastday.find(function(item:any){return item });
    let hours_key = forecast_keys.hour[21];

    this.temp_night = hours_key.temp_c;
    
  }
}
