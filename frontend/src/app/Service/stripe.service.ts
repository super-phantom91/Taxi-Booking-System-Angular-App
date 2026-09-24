import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  private url = environment.apiUrl

  constructor(private http :HttpClient) { }

  getcard(id:any ){
    // console.log(id);
    return this.http.get(`${this.url}/getcard/` + id)
  }

  deletecard(id:any){
    return this.http.delete(`${this.url}/deletecard/` + id)
  }
}
