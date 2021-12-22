import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JavaserviceService {

  constructor(private http:HttpClient) { }
  getjavajson(){
    return this.http.get<any>("assets/java.json");
  }
}
