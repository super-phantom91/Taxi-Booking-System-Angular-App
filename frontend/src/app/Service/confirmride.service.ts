import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ConfirmrideService {
  
  private serverUrl = environment.apiUrl;

  constructor(private http: HttpClient) { 
  }
  
  getride(page: Number, limit: Number, search: String, statusfilter: Number, vehiclefilter: String, sortOrder: String): Observable<any>{
    return this.http.post(`${this.serverUrl}/ridesinfo`,{page, limit, search, statusfilter, vehiclefilter, sortOrder});
  }

  getMatchedDriverdata(data: any): Observable<any> {
    const url = `${this.serverUrl}/assigneddriverdata`;
    return this.http.post(url,data);
  }

}
