import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RunningrequestService {
  private url = environment.apiUrl

  constructor() {}

}
