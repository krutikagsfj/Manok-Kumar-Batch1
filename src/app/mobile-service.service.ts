// In this file, we are accessing the json file from the local file directory
// Through Service Module, distributing is to the different components who are subscribing to the service

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobileServiceService {

  constructor(private http:HttpClient) { }
  getProducts()
  {
    let mobile_url="assets/mobile.json";
    return this.http.get(mobile_url);
  }
}