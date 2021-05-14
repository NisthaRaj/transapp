import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  constructor(private http:HttpClient) { }

  translate(sen,target,source){
    let pack ={
      q:sen,
      target:target,
      source:source
    }
    return this.http.post('https://libretranslate.com/translate',pack);
  }
}
