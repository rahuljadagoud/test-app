import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HtmlserviceService {

  constructor(private http:HttpClient) { }
  gethtmljson(){
    return this.http.get<any>("assets/html.json");
  }
}
