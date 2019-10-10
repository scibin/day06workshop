import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../services/weather-service.service';

// NOTE: This should actually be called addcity component
// instead of search-comp
@Component({
  selector: 'app-search-comp',
  templateUrl: './search-comp.component.html',
  styleUrls: ['./search-comp.component.css']
})
export class SearchCompComponent implements OnInit {

  constructor(private weatherSvc: WeatherServiceService) {}

  cityName: string;

  ngOnInit() {
  }

  addCity() {
    if (!(this.cityName === '' || this.cityName === undefined)) {
      // Adds name of city input from user into the cityList array
      // if field is not blank
      this.weatherSvc.setCity(this.cityName);
    }
    this.cityName = '';
  }
  // checkCityList() {
  //   console.info(this.weatherSvc.getCityList());
  // }
}
