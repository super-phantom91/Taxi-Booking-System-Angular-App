import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  private serverUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  addSetting(formValues: any) {
    console.log(formValues)
    return this.http.post<any>(`${this.serverUrl}/setting`, formValues);
  }
  get_setting_data() {
    return this.http.get<any>(`${this.serverUrl}/settingdata`);
  }
  updateSetting(formValues: any) {
    // console.log(formValues)
    return this.http.put<any>(`${this.serverUrl}/updatesetting`, formValues);
  }

  // getEnvData(): Observable<any> {
  //   return this.http.get<any>(`${this.serverUrl}/env`);
  // }

}
