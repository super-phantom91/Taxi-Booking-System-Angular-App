import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RidehistoryService {
  private url = environment.apiUrl

  constructor(private http: HttpClient) {}

  

  //----------------------DOWNLAOD RIDE-HISTORY DATA---------------------//
  downlaodallData(alldataatonce: any): Observable<any>{
    // console.log(alldataatonce);
    
    return this.http.post(`${this.url}/downloadridehistory`,{alldataatonce});
  }

}
