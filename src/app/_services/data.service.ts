import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiKey = 'a4df3ada4915b566f41c90fc440e5b3a';
  public country_code = 'US';
  private uid = "33456677899909000066";

  constructor(private httpClient: HttpClient) { }

  getPaymentMethod(){
    return this.httpClient.get(`https://api.paymentwall.com/api/payment-systems/?key=${this.apiKey}&${this.country_code}`);
  }

  getCountries(){
    return this.httpClient.get(`https://api.paymentwall.com/api/rest/country?key=${this.apiKey}&uid=${this.uid}`);
  }

}
