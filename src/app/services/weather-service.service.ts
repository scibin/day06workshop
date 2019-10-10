import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
// import { Weather } from '../models/weather';


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private httpClientSvc: HttpClient) { }

  // New code: Data array here
  private cityList: string[] = ['Singapore', 'Kuala Lumpur', 'Tokyo', 'Bangkok', 'Hong Kong', 'Beijing'];
  // API key is directly substituted into the service
  apiKey = '476e23fe1116f4e69d2a3e68672604e1';

  setCity(cityName: string) {
    this.cityList.push(cityName);
  }

  getCityList() {
    return this.cityList;
  }

  // Promise function that does a callback for the .get method
  getWeather(cityName: string): Promise<any> {
    const queryParams = new HttpParams()
      .set('q', cityName)
      .set('appid', this.apiKey);

    return this.httpClientSvc.get(environment.api_url, { params: queryParams })
      .toPromise();
  }

}


// From environment, api_url: 'http://api.openweathermap.org/data/2.5/weather'

// getCharacter(id: number): Promise<Character> {
//   const params = new HttpParams()
//       .set('apikey', this.appKey);
//   return (
//       this.http.get<Character>(`https://gateway.marvel.com:443/v1/public/characters/${id}`, { params })
//           .pipe(
//               map(v => v['data']['results'][0]),
//               map((v: any) => {
//                   return (<Character>{
//                       id: v.id,
//                       name: v.name,
//                       description: v.descripton || 'No description',
//                       image: `${v.thumbnail.path}.${v.thumbnail.extension}`
//                   })
//               })
//           )
//           .toPromise()
//   );
// }
