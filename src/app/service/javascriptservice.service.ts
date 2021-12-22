import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JavascriptserviceService {

  constructor(private http:HttpClient) { }
  getjavascriptjson(){
    return this.http.get<any>("assets/javascript.json");
  }
}
