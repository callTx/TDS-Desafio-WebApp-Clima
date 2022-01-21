import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima-app',
  templateUrl: './clima-app.component.html',
  styleUrls: ['./clima-app.component.scss']
})
export class ClimaAppComponent implements OnInit {

  WeatherData: any;
   
  constructor() { }

  ngOnInit(): void {
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData(){
    //Json OpenWeatherApi
    //let data = JSON.parse('{"coord":{"lon":139.6917,"lat":35.6895},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":273.67,"feels_like":273.67,"temp_min":270.73,"temp_max":275.76,"pressure":1017,"humidity":49},"visibility":10000,"wind":{"speed":0.89,"deg":301,"gust":1.79},"clouds":{"all":0},"dt":1642709957,"sys":{"type":2,"id":2038398,"country":"JP","sunrise":1642715299,"sunset":1642751765},"timezone":32400,"id":1850144,"name":"Tokyo","cod":200}');
    
    //Json WeatherApi
    let data = JSON.parse('{"location":{"name":"London","region":"City of London, Greater London","country":"United Kingdom","lat":51.52,"lon":-0.11,"tz_id":"Europe/London","localtime_epoch":1642724152,"localtime":"2022-01-21 0:15"},"current":{"last_updated_epoch":1642724100,"last_updated":"2022-01-21 00:15","temp_c":2.0,"temp_f":35.6,"is_day":0,"condition":{"text":"Partly cloudy","icon":"//cdn.weatherapi.com/weather/64x64/night/116.png","code":1003},"wind_mph":5.6,"wind_kph":9.0,"wind_degree":320,"wind_dir":"NW","pressure_mb":1040.0,"pressure_in":30.71,"precip_mm":0.0,"precip_in":0.0,"humidity":69,"cloud":50,"feelslike_c":-0.7,"feelslike_f":30.8,"vis_km":10.0,"vis_miles":6.0,"uv":1.0,"gust_mph":8.9,"gust_kph":14.4},"forecast":{"forecastday":[{"date":"2022-01-21","date_epoch":1642723200,"day":{"maxtemp_c":7.4,"maxtemp_f":45.3,"mintemp_c":0.7,"mintemp_f":33.3,"avgtemp_c":3.3,"avgtemp_f":38.0,"maxwind_mph":6.3,"maxwind_kph":10.1,"totalprecip_mm":0.0,"totalprecip_in":0.0,"avgvis_km":10.0,"avgvis_miles":6.0,"avghumidity":76.0,"daily_will_it_rain":0,"daily_chance_of_rain":0,"daily_will_it_snow":0,"daily_chance_of_snow":0,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"uv":1.0},"astro":{"sunrise":"07:54 AM","sunset":"04:30 PM","moonrise":"08:22 PM","moonset":"09:56 AM","moon_phase":"Waning Gibbous","moon_illumination":"71"},"hour":[{"time_epoch":1642723200,"time":"2022-01-21 00:00","temp_c":1.7,"temp_f":35.1,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":5.6,"wind_kph":9.0,"wind_degree":335,"wind_dir":"NNW","pressure_mb":1040.0,"pressure_in":30.7,"precip_mm":0.0,"precip_in":0.0,"humidity":64,"cloud":11,"feelslike_c":-1.0,"feelslike_f":30.2,"windchill_c":-1.0,"windchill_f":30.2,"heatindex_c":1.7,"heatindex_f":35.1,"dewpoint_c":-4.3,"dewpoint_f":24.3,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":8.9,"gust_kph":14.4,"uv":1.0},{"time_epoch":1642726800,"time":"2022-01-21 01:00","temp_c":1.5,"temp_f":34.7,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":4.9,"wind_kph":7.9,"wind_degree":325,"wind_dir":"NW","pressure_mb":1039.0,"pressure_in":30.68,"precip_mm":0.0,"precip_in":0.0,"humidity":65,"cloud":6,"feelslike_c":-0.9,"feelslike_f":30.4,"windchill_c":-0.9,"windchill_f":30.4,"heatindex_c":1.5,"heatindex_f":34.7,"dewpoint_c":-4.3,"dewpoint_f":24.3,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":8.1,"gust_kph":13.0,"uv":1.0},{"time_epoch":1642730400,"time":"2022-01-21 02:00","temp_c":1.3,"temp_f":34.3,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":4.3,"wind_kph":6.8,"wind_degree":328,"wind_dir":"NNW","pressure_mb":1039.0,"pressure_in":30.68,"precip_mm":0.0,"precip_in":0.0,"humidity":66,"cloud":4,"feelslike_c":-0.8,"feelslike_f":30.6,"windchill_c":-0.8,"windchill_f":30.6,"heatindex_c":1.3,"heatindex_f":34.3,"dewpoint_c":-4.3,"dewpoint_f":24.3,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":7.2,"gust_kph":11.5,"uv":1.0},{"time_epoch":1642734000,"time":"2022-01-21 03:00","temp_c":1.2,"temp_f":34.2,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":4.5,"wind_kph":7.2,"wind_degree":316,"wind_dir":"NW","pressure_mb":1039.0,"pressure_in":30.68,"precip_mm":0.0,"precip_in":0.0,"humidity":67,"cloud":4,"feelslike_c":-1.1,"feelslike_f":30.0,"windchill_c":-1.1,"windchill_f":30.0,"heatindex_c":1.2,"heatindex_f":34.2,"dewpoint_c":-4.2,"dewpoint_f":24.4,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":7.8,"gust_kph":12.6,"uv":1.0},{"time_epoch":1642737600,"time":"2022-01-21 04:00","temp_c":1.1,"temp_f":34.0,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":4.3,"wind_kph":6.8,"wind_degree":312,"wind_dir":"NW","pressure_mb":1039.0,"pressure_in":30.67,"precip_mm":0.0,"precip_in":0.0,"humidity":68,"cloud":4,"feelslike_c":-1.1,"feelslike_f":30.0,"windchill_c":-1.1,"windchill_f":30.0,"heatindex_c":1.1,"heatindex_f":34.0,"dewpoint_c":-4.2,"dewpoint_f":24.4,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":7.4,"gust_kph":11.9,"uv":1.0},{"time_epoch":1642741200,"time":"2022-01-21 05:00","temp_c":1.0,"temp_f":33.8,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":3.8,"wind_kph":6.1,"wind_degree":305,"wind_dir":"NW","pressure_mb":1039.0,"pressure_in":30.67,"precip_mm":0.0,"precip_in":0.0,"humidity":69,"cloud":5,"feelslike_c":-0.9,"feelslike_f":30.4,"windchill_c":-0.9,"windchill_f":30.4,"heatindex_c":1.0,"heatindex_f":33.8,"dewpoint_c":-4.1,"dewpoint_f":24.6,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":6.7,"gust_kph":10.8,"uv":1.0},{"time_epoch":1642744800,"time":"2022-01-21 06:00","temp_c":0.9,"temp_f":33.6,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":4.0,"wind_kph":6.5,"wind_degree":288,"wind_dir":"WNW","pressure_mb":1039.0,"pressure_in":30.67,"precip_mm":0.0,"precip_in":0.0,"humidity":70,"cloud":9,"feelslike_c":-1.2,"feelslike_f":29.8,"windchill_c":-1.2,"windchill_f":29.8,"heatindex_c":0.9,"heatindex_f":33.6,"dewpoint_c":-3.9,"dewpoint_f":25.0,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":7.2,"gust_kph":11.5,"uv":1.0},{"time_epoch":1642748400,"time":"2022-01-21 07:00","temp_c":0.8,"temp_f":33.4,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":4.3,"wind_kph":6.8,"wind_degree":283,"wind_dir":"WNW","pressure_mb":1039.0,"pressure_in":30.67,"precip_mm":0.0,"precip_in":0.0,"humidity":73,"cloud":13,"feelslike_c":-1.4,"feelslike_f":29.5,"windchill_c":-1.4,"windchill_f":29.5,"heatindex_c":0.8,"heatindex_f":33.4,"dewpoint_c":-3.5,"dewpoint_f":25.7,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":7.6,"gust_kph":12.2,"uv":1.0},{"time_epoch":1642752000,"time":"2022-01-21 08:00","temp_c":0.7,"temp_f":33.3,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":4.0,"wind_kph":6.5,"wind_degree":280,"wind_dir":"W","pressure_mb":1039.0,"pressure_in":30.68,"precip_mm":0.0,"precip_in":0.0,"humidity":77,"cloud":13,"feelslike_c":-1.4,"feelslike_f":29.5,"windchill_c":-1.4,"windchill_f":29.5,"heatindex_c":0.7,"heatindex_f":33.3,"dewpoint_c":-2.8,"dewpoint_f":27.0,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":7.2,"gust_kph":11.5,"uv":2.0},{"time_epoch":1642755600,"time":"2022-01-21 09:00","temp_c":1.2,"temp_f":34.2,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":3.8,"wind_kph":6.1,"wind_degree":285,"wind_dir":"WNW","pressure_mb":1039.0,"pressure_in":30.69,"precip_mm":0.0,"precip_in":0.0,"humidity":79,"cloud":9,"feelslike_c":-0.7,"feelslike_f":30.7,"windchill_c":-0.7,"windchill_f":30.7,"heatindex_c":1.2,"heatindex_f":34.2,"dewpoint_c":-2.0,"dewpoint_f":28.4,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":6.3,"gust_kph":10.1,"uv":2.0},{"time_epoch":1642759200,"time":"2022-01-21 10:00","temp_c":2.5,"temp_f":36.5,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":4.5,"wind_kph":7.2,"wind_degree":293,"wind_dir":"WNW","pressure_mb":1039.0,"pressure_in":30.68,"precip_mm":0.0,"precip_in":0.0,"humidity":79,"cloud":8,"feelslike_c":0.4,"feelslike_f":32.7,"windchill_c":0.4,"windchill_f":32.7,"heatindex_c":2.5,"heatindex_f":36.5,"dewpoint_c":-0.8,"dewpoint_f":30.6,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":6.5,"gust_kph":10.4,"uv":2.0},{"time_epoch":1642762800,"time":"2022-01-21 11:00","temp_c":4.3,"temp_f":39.7,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":4.7,"wind_kph":7.6,"wind_degree":299,"wind_dir":"WNW","pressure_mb":1039.0,"pressure_in":30.68,"precip_mm":0.0,"precip_in":0.0,"humidity":76,"cloud":19,"feelslike_c":2.4,"feelslike_f":36.3,"windchill_c":2.4,"windchill_f":36.3,"heatindex_c":4.3,"heatindex_f":39.7,"dewpoint_c":0.5,"dewpoint_f":32.9,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":5.6,"gust_kph":9.0,"uv":2.0},{"time_epoch":1642766400,"time":"2022-01-21 12:00","temp_c":5.6,"temp_f":42.1,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":4.9,"wind_kph":7.9,"wind_degree":303,"wind_dir":"WNW","pressure_mb":1039.0,"pressure_in":30.67,"precip_mm":0.0,"precip_in":0.0,"humidity":73,"cloud":16,"feelslike_c":3.9,"feelslike_f":39.0,"windchill_c":3.9,"windchill_f":39.0,"heatindex_c":5.6,"heatindex_f":42.1,"dewpoint_c":1.2,"dewpoint_f":34.2,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":5.6,"gust_kph":9.0,"uv":3.0},{"time_epoch":1642770000,"time":"2022-01-21 13:00","temp_c":6.3,"temp_f":43.3,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":6.0,"wind_kph":9.7,"wind_degree":309,"wind_dir":"NW","pressure_mb":1038.0,"pressure_in":30.66,"precip_mm":0.0,"precip_in":0.0,"humidity":72,"cloud":17,"feelslike_c":4.3,"feelslike_f":39.7,"windchill_c":4.3,"windchill_f":39.7,"heatindex_c":6.3,"heatindex_f":43.3,"dewpoint_c":1.6,"dewpoint_f":34.9,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":6.9,"gust_kph":11.2,"uv":3.0},{"time_epoch":1642773600,"time":"2022-01-21 14:00","temp_c":6.8,"temp_f":44.2,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":6.3,"wind_kph":10.1,"wind_degree":309,"wind_dir":"NW","pressure_mb":1038.0,"pressure_in":30.64,"precip_mm":0.0,"precip_in":0.0,"humidity":72,"cloud":19,"feelslike_c":4.8,"feelslike_f":40.6,"windchill_c":4.8,"windchill_f":40.6,"heatindex_c":6.8,"heatindex_f":44.2,"dewpoint_c":2.1,"dewpoint_f":35.8,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":7.2,"gust_kph":11.5,"uv":3.0},{"time_epoch":1642777200,"time":"2022-01-21 15:00","temp_c":7.4,"temp_f":45.3,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":5.1,"wind_kph":8.3,"wind_degree":309,"wind_dir":"NW","pressure_mb":1038.0,"pressure_in":30.64,"precip_mm":0.0,"precip_in":0.0,"humidity":74,"cloud":6,"feelslike_c":5.9,"feelslike_f":42.6,"windchill_c":5.9,"windchill_f":42.6,"heatindex_c":7.4,"heatindex_f":45.3,"dewpoint_c":3.1,"dewpoint_f":37.6,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":5.8,"gust_kph":9.4,"uv":3.0},{"time_epoch":1642780800,"time":"2022-01-21 16:00","temp_c":6.3,"temp_f":43.3,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":4.7,"wind_kph":7.6,"wind_degree":301,"wind_dir":"WNW","pressure_mb":1038.0,"pressure_in":30.64,"precip_mm":0.0,"precip_in":0.0,"humidity":80,"cloud":12,"feelslike_c":4.8,"feelslike_f":40.6,"windchill_c":4.8,"windchill_f":40.6,"heatindex_c":6.3,"heatindex_f":43.3,"dewpoint_c":3.0,"dewpoint_f":37.4,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":6.3,"gust_kph":10.1,"uv":3.0},{"time_epoch":1642784400,"time":"2022-01-21 17:00","temp_c":5.3,"temp_f":41.5,"is_day":0,"condition":{"text":"Partly cloudy","icon":"//cdn.weatherapi.com/weather/64x64/night/116.png","code":1003},"wind_mph":4.7,"wind_kph":7.6,"wind_degree":300,"wind_dir":"WNW","pressure_mb":1037.0,"pressure_in":30.63,"precip_mm":0.0,"precip_in":0.0,"humidity":83,"cloud":48,"feelslike_c":3.6,"feelslike_f":38.5,"windchill_c":3.6,"windchill_f":38.5,"heatindex_c":5.3,"heatindex_f":41.5,"dewpoint_c":2.7,"dewpoint_f":36.9,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":7.4,"gust_kph":11.9,"uv":1.0},{"time_epoch":1642788000,"time":"2022-01-21 18:00","temp_c":5.6,"temp_f":42.1,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":3.8,"wind_kph":6.1,"wind_degree":288,"wind_dir":"WNW","pressure_mb":1037.0,"pressure_in":30.63,"precip_mm":0.0,"precip_in":0.0,"humidity":84,"cloud":17,"feelslike_c":4.4,"feelslike_f":39.9,"windchill_c":4.4,"windchill_f":39.9,"heatindex_c":5.6,"heatindex_f":42.1,"dewpoint_c":3.2,"dewpoint_f":37.8,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":5.6,"gust_kph":9.0,"uv":1.0},{"time_epoch":1642791600,"time":"2022-01-21 19:00","temp_c":5.3,"temp_f":41.5,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":4.3,"wind_kph":6.8,"wind_degree":289,"wind_dir":"WNW","pressure_mb":1038.0,"pressure_in":30.64,"precip_mm":0.0,"precip_in":0.0,"humidity":87,"cloud":16,"feelslike_c":3.8,"feelslike_f":38.8,"windchill_c":3.8,"windchill_f":38.8,"heatindex_c":5.3,"heatindex_f":41.5,"dewpoint_c":3.3,"dewpoint_f":37.9,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":6.3,"gust_kph":10.1,"uv":1.0},{"time_epoch":1642795200,"time":"2022-01-21 20:00","temp_c":3.7,"temp_f":38.7,"is_day":0,"condition":{"text":"Partly cloudy","icon":"//cdn.weatherapi.com/weather/64x64/night/116.png","code":1003},"wind_mph":4.3,"wind_kph":6.8,"wind_degree":289,"wind_dir":"WNW","pressure_mb":1038.0,"pressure_in":30.66,"precip_mm":0.0,"precip_in":0.0,"humidity":88,"cloud":32,"feelslike_c":2.0,"feelslike_f":35.6,"windchill_c":2.0,"windchill_f":35.6,"heatindex_c":3.7,"heatindex_f":38.7,"dewpoint_c":2.0,"dewpoint_f":35.6,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":7.6,"gust_kph":12.2,"uv":1.0},{"time_epoch":1642798800,"time":"2022-01-21 21:00","temp_c":3.4,"temp_f":38.1,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":4.3,"wind_kph":6.8,"wind_degree":282,"wind_dir":"WNW","pressure_mb":1038.0,"pressure_in":30.66,"precip_mm":0.0,"precip_in":0.0,"humidity":89,"cloud":24,"feelslike_c":1.6,"feelslike_f":34.9,"windchill_c":1.6,"windchill_f":34.9,"heatindex_c":3.4,"heatindex_f":38.1,"dewpoint_c":1.8,"dewpoint_f":35.2,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":7.6,"gust_kph":12.2,"uv":1.0},{"time_epoch":1642802400,"time":"2022-01-21 22:00","temp_c":3.2,"temp_f":37.8,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":4.3,"wind_kph":6.8,"wind_degree":273,"wind_dir":"W","pressure_mb":1038.0,"pressure_in":30.66,"precip_mm":0.0,"precip_in":0.0,"humidity":89,"cloud":7,"feelslike_c":1.4,"feelslike_f":34.5,"windchill_c":1.4,"windchill_f":34.5,"heatindex_c":3.2,"heatindex_f":37.8,"dewpoint_c":1.6,"dewpoint_f":34.9,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":7.6,"gust_kph":12.2,"uv":1.0},{"time_epoch":1642806000,"time":"2022-01-21 23:00","temp_c":3.0,"temp_f":37.4,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":4.5,"wind_kph":7.2,"wind_degree":271,"wind_dir":"W","pressure_mb":1038.0,"pressure_in":30.66,"precip_mm":0.0,"precip_in":0.0,"humidity":89,"cloud":6,"feelslike_c":1.0,"feelslike_f":33.8,"windchill_c":1.0,"windchill_f":33.8,"heatindex_c":3.0,"heatindex_f":37.4,"dewpoint_c":1.4,"dewpoint_f":34.5,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":7.8,"gust_kph":12.6,"uv":1.0}]}]}}')
    this.setWeatherData(data)
  }

  setWeatherData(data: any){
    this.WeatherData = data;

    //Usa o horário do Pôr do Sol 
    //let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000 );
    //this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();

    //Consulta o nome da cidade 
    this.WeatherData.cidade_nome = this.getCidadeNome();
    
    //Verifica pela horário se é dia ou noite 
    this.WeatherData.isDay = this.getE_Dia();
    
    //Pega e atribui a temp em °C 
    this.WeatherData.temp_celcius =  this.getClimaTemperaturaCelcius();

    //Pega e atribui a temp minima em °C
    this.WeatherData.temp_min_celcius = this.getClimaTemperaturaMinCelcius();

    //Pega e atribui a tem maxima em °C
    this.WeatherData.temp_max_celcius = this.getClimaTemperaturaMaxCelcius();

    //Pega e atribui a descricao geral do clima
    this.WeatherData.descricao = this.getClimaDescricao();
  }

  //Pega valor se é dia ou noite
  getE_Dia(){
    let e_dia = this.WeatherData.current.is_day;
    return e_dia
  }

  //Pega o nome da cidade 
  getCidadeNome(){
    let nome_cidade = this.WeatherData.location.name;
    return nome_cidade
  }

  //Pega a temperatura do clima em graus celcius °C
  getClimaTemperaturaCelcius(){
    let temp_celcius = this.WeatherData.current.temp_c;
    return temp_celcius
  }

  //Pega a temperatura max do clima em °C
  getClimaTemperaturaMinCelcius(){
    //let temp_min_celcius = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    //return temp_min_celcius

    let data_atual = new Date();
    let hora_local = data_atual.getHours();


    let forecast_keys = this.WeatherData.forecast.forecastday.find(function(item:any){return item });
    let temp_min_celcius = forecast_keys.day.mintemp_c
    //let hours_key = forecast_keys.hour[hora_local];
    //console.log(temp_min_celcius);
    return temp_min_celcius
  }

  //Pega a temperatura max do clima em °C
  getClimaTemperaturaMaxCelcius(){
    //let temp_max_celcius = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    //return temp_max_celcius
    let forecast_keys = this.WeatherData.forecast.forecastday.find(function(item:any){return item });
    let temp_max_celcius = forecast_keys.day.maxtemp_c
    //console.log(temp_max_celcius)
    return temp_max_celcius
  }

  //Pega a descrição do clima
  getClimaDescricao(){
    //OpenWeatherAPI
    //let weather_keys = this.WeatherData.weather.find(function(item:any){return item })
    //console.log(weather_keys.description);

    //WeatherAPI
    let descricao = this.WeatherData.current.condition.text;
    //console.log(descricao);
    return descricao
  }
}
