import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherServiceService } from '../services/weather-service.service';
import { Weather } from '../models/weather';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute, private router: Router, private weatherSvc: WeatherServiceService) { }

  // Weather object for showing data
  cityWeatherData: Weather;

  ngOnInit() {
    // For debugging
    // console.info(this.activatedRoute.snapshot);
    // GET request from service
    this.weatherSvc.getWeather(this.activatedRoute.snapshot.params.cityName)
    .then(result => {
    // Also converts pressure and temp values to other units
    this.cityWeatherData = this.convertWeatherData(new Weather(result.name, result.main.temp
      , result.main.pressure,
      result.main.humidity,
      result.wind.speed, result.wind.deg));
    // console.info('Showing weather data of city: ', result);
    })
    .catch((error) => {
      return (error);
    });
  }

  convertWeatherData(data: Weather) {
    const tempContainer = data.temp - 273.15;       // Converts from K to degC
    data.temp = parseFloat(tempContainer.toFixed(2));
    const pressureContainer = data.pressure / 1000; // Converts from hPa to bar
    data.pressure = parseFloat(pressureContainer.toFixed(3));
    return data;
  }

  back() {
    this.router.navigate(['/']);
  }

}
