import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/** Importa o serviço weatherapi.service */
import { WeatherapiService } from './weatherapi.service';

@Component({
  selector: 'app-pag-localidade',
  templateUrl: './pag-localidade.component.html',
  styleUrls: ['./pag-localidade.component.scss']
})
export class PagLocalidadeComponent implements OnInit {

  //Atributo usado para receber o valor como parametro de uma rota ativa 
  nomecidade: any;

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
  url_icon_temp_atual: any;
  veloc_vento_mps: any;
  horario_nascer_sol: any;
  horario_por_do_sol: any;
  humidade: any;
  url_icon_temp_dawn: any;
  url_icon_temp_morning: any;
  url_icon_temp_afternoon: any;
  url_icon_temp_night: any;

  //Injeta uma rota ativa para pegar o nome da cidade como parametro
  constructor(private weatherapiservices: WeatherapiService,private route: ActivatedRoute,private el: ElementRef,private renderer: Renderer2) {
    this.nomecidade = (this.route.snapshot.params['nomecidade']).toUpperCase();
  }


  ngOnInit(): void {
    //this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', '#57cbdb');

    this.getNomeCidade();
    this.getClimaDescricao();
    this.getClimaTemperaturaCelcius();
    this.getClimaTemperaturaMinCelcius();
    this.getClimaTemperaturaMaxCelcius();
    this.getDawnTemperatura();
    this.getMorningTemperatura();
    this.getAfternoonTemperatura();
    this.getNightTemperatura();
    this.getUrlIconClimaAtual();
    this.getVelocidadeVento();
    this.getHorarioNascerSol();
    this.getHorarioPorDoSol();
    this.getHumidade();
    this.getUrlIconTempDawn();
    this.getUrlIconTempMorning();
    this.getUrlIconTempAfternoon();
    this.getUrlIconTempNight()
  }

  //Recupera o nome da cidade 
  async getNomeCidade(){
    this.data = await this.weatherapiservices.doGetWeatherApi(this.nomecidade);
    
    this.nome_cidade = this.data.location.name.toUpperCase();
    //console.log(this.nome_cidade);
  }

  //Recupera a temperatura do clima em graus celcius °C
  async getClimaTemperaturaCelcius(){
    this.data = await this.weatherapiservices.doGetWeatherApi(this.nomecidade);

    this.temp_atual = this.data.current.temp_c;
    //console.log(this.temp_atual);
  }

  //Recupera a temperatura max do clima em °C
  async getClimaTemperaturaMinCelcius(){
    this.data = await this.weatherapiservices.doGetWeatherApi(this.nomecidade);


    let data_atual = new Date();
    let hora_local = data_atual.getHours();


    let forecast_keys = this.data.forecast.forecastday.find(function(item:any){return item });
    this.temp_min = forecast_keys.day.mintemp_c
  
    
  }

  //Recupera a temperatura max do clima em °C
  async getClimaTemperaturaMaxCelcius(){
    this.data = await this.weatherapiservices.doGetWeatherApi(this.nomecidade);

    let forecast_keys = this.data.forecast.forecastday.find(function(item:any){return item });
    this.temp_max = forecast_keys.day.maxtemp_c
   
  }

  //Recupera a descrição do clima
  async getClimaDescricao(){
    
    this.data = await this.weatherapiservices.doGetWeatherApi(this.nomecidade);

    this.descricao = this.data.current.condition.text;
    
    this.descricao =  this.descricao.charAt(0).toLowerCase() + this.descricao.slice(1);

    if (this.descricao == "partly cloudy" || 
        this.descricao == "clear" ||
        this.descricao == "sunny" ||
        this.descricao == "cloudy" ||
        this.descricao == "overcast" ||
        this.descricao == "mist"
    ) {
      this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', '#57cbdb');
    }else{
      if (this.descricao == "patchy rain nearby" ||
          this.descricao == "thundery outbreaks in nearby" ||
          this.descricao == "patchy light drizzle" ||
          this.descricao == "light drizzle" ||
          this.descricao == "patchy light rain" ||
          this.descricao == "light rain" ||
          this.descricao == "moderate rain at times" ||
          this.descricao == "moderate rain" ||
          this.descricao == "heavy rain at times" ||
          this.descricao == "heavy rain" ||
          this.descricao == "light freezing rain" ||
          this.descricao == "moderate or heavy freezing rain" ||
          this.descricao == "light rain shower" ||
          this.descricao == "moderate or heavy rain shower" ||
          this.descricao == "torrential rain shower" ||
          this.descricao == "Light sleet showers" ||
          this.descricao == "moderate or heavy sleet showers" ||
          this.descricao == "patchy light rain in area with thunder" ||
          this.descricao == "moderate or heavy rain in area with thunder" 
          

      ) {
        this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', '#5d6574');

      }else{
        if (this.descricao == "patchy snow nearby" ||
        this.descricao == "patchy sleet nearby" ||
        this.descricao == "patchy freezing drizzle nearby" ||
        this.descricao == "blowing snow" ||
        this.descricao == "blizzard" ||
        this.descricao == "fog" ||
        this.descricao == "freezing fog" ||
        this.descricao == "freezing drizzle" ||
        this.descricao == "heavy freezing drizzle" ||
        this.descricao == "light sleet" ||
        this.descricao == "moderate or heavy sleet" ||
        this.descricao == "patchy light snow" ||
        this.descricao == "light snow" ||
        this.descricao == "patchy moderate snow" ||
        this.descricao == "moderate snow" ||
        this.descricao == "patchy heavy snow" ||
        this.descricao == "heavy snow" ||
        this.descricao == "ice pellets" ||
        this.descricao == "light snow showers" ||
        this.descricao == "moderate or heavy snow showers" ||
        this.descricao == "light showers of ice pellets" ||
        this.descricao == "moderate or heavy showers of ice pellets" ||
        this.descricao == "patchy light snow in area with thunder" ||
        this.descricao == "moderate or heavy snow in area with thunder" 
        ) {
          this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', '#e0e0e0');

        }
      }
    }
  }

  //Recupera a temp de Dawn 3:00
  async getDawnTemperatura(){

    this.data = await this.weatherapiservices.doGetWeatherApi(this.nomecidade);
    let forecast_keys = this.data.forecast.forecastday.find(function(item:any){return item });
    let hours_key = forecast_keys.hour[3];

    this.temp_dawn = hours_key.temp_c;
    
  }

  //Recupera a temp de Morning 9:00
  async getMorningTemperatura(){

    this.data = await this.weatherapiservices.doGetWeatherApi(this.nomecidade);
    let forecast_keys = this.data.forecast.forecastday.find(function(item:any){return item });
    let hours_key = forecast_keys.hour[9];

    this.temp_morning = hours_key.temp_c;
    
  }

  //Recupera a temp de Afternoon 15:00
  async getAfternoonTemperatura(){

    this.data = await this.weatherapiservices.doGetWeatherApi(this.nomecidade);
    let forecast_keys = this.data.forecast.forecastday.find(function(item:any){return item });
    let hours_key = forecast_keys.hour[15];

    this.temp_afternoon = hours_key.temp_c;
    
  }

  //Recupera a temp de Night 21:00
  async getNightTemperatura(){

    this.data = await this.weatherapiservices.doGetWeatherApi(this.nomecidade);
    let forecast_keys = this.data.forecast.forecastday.find(function(item:any){return item });
    let hours_key = forecast_keys.hour[21];

    this.temp_night = hours_key.temp_c;
    
  }

  async getUrlIconClimaAtual(){
    this.data = await this.weatherapiservices.doGetWeatherApi(this.nomecidade);
    let url_icon = this.data.current.condition.icon;
  
    this.url_icon_temp_atual = url_icon;
    //console.log(this.url_icon_temp_atual);
  }

  async getVelocidadeVento(){
    this.data = await this.weatherapiservices.doGetWeatherApi(this.nomecidade);
    let wind_speed_kph = this.data.current.wind_kph;
    let wind_speed_mps = (wind_speed_kph / 3.6).toFixed(1);
    this.veloc_vento_mps = wind_speed_mps+"m/s";

  }

  async getHorarioNascerSol(){
    this.data = await this.weatherapiservices.doGetWeatherApi(this.nomecidade);
    let forecast_keys = this.data.forecast.forecastday.find(function(item:any){return item });
    let sunrise = forecast_keys.astro.sunrise;
    this.horario_nascer_sol = sunrise;
  }

  async getHorarioPorDoSol(){
    this.data = await this.weatherapiservices.doGetWeatherApi(this.nomecidade);
    let forecast_keys = this.data.forecast.forecastday.find(function(item:any){return item });
    let sunset = forecast_keys.astro.sunset;
    this.horario_por_do_sol = sunset;
  }

  async getHumidade(){
    this.data = await this.weatherapiservices.doGetWeatherApi(this.nomecidade);
    let humidity = this.data.current.humidity;
    this.humidade = humidity+"%";
  }

  async getUrlIconTempDawn(){
    this.data = await this.weatherapiservices.doGetWeatherApi(this.nomecidade);
    let forecast_keys = this.data.forecast.forecastday.find(function(item:any){return item });
    let hours_key = forecast_keys.hour[3];

    this.url_icon_temp_dawn = hours_key.condition.icon;
  }

  async getUrlIconTempMorning(){
    this.data = await this.weatherapiservices.doGetWeatherApi(this.nomecidade);
    let forecast_keys = this.data.forecast.forecastday.find(function(item:any){return item });
    let hours_key = forecast_keys.hour[9];

    this.url_icon_temp_morning = hours_key.condition.icon;
  }

  async getUrlIconTempAfternoon(){
    this.data = await this.weatherapiservices.doGetWeatherApi(this.nomecidade);
    let forecast_keys = this.data.forecast.forecastday.find(function(item:any){return item });
    let hours_key = forecast_keys.hour[15];

    this.url_icon_temp_afternoon = hours_key.condition.icon;
  }

  async getUrlIconTempNight(){
    this.data = await this.weatherapiservices.doGetWeatherApi(this.nomecidade);
    let forecast_keys = this.data.forecast.forecastday.find(function(item:any){return item });
    let hours_key = forecast_keys.hour[21];

    this.url_icon_temp_night = hours_key.condition.icon;
  }
  
}
