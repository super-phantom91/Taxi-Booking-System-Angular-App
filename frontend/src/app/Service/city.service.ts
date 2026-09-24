import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private serverUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }

  getcountryData(): Observable<any> {
    return this.http.get(`${this.serverUrl}/countrydata`);
  }


  addcity(cityData:any):Observable<any>{
    return this.http.post<any>(`${this.serverUrl}/cityadd`, cityData );
  }

  getcity(page: number, limit: number):Observable<any>{
    const params = {
      page: page,
      limit: limit,
    };
    // console.log(params)
    const url = `${this.serverUrl}/citydata`;
    return this.http.get(url, { params: params });
  }
  // getcity():Observable<any>{
  //   return this.http.get(`${this.serverUrl}/citydata`);
  // }

  updateCity(cityId: string, cityData: any): Observable<any> {
    console.log(cityId)
    console.log(cityData)
    const url = `${this.serverUrl}/cityupdate/${cityId}`;
    return this.http.put<any>(url, cityData);
  }

  getCityPolygons(countryid: any):Observable<any>{
    console.log(countryid)
    return this.http.get<any>(`${this.serverUrl}/coordinates/${countryid}`);
  } 


}
