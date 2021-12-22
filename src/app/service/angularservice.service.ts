import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AngularserviceService {

  constructor(private http:HttpClient) { }
  getangularjson(){
    return this.http.get<any>("assets/angular.json");
  }
}
