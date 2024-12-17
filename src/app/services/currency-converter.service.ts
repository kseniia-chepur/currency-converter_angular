import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Rates } from '../models/rates';
import { CurrencyExchangeResponce } from '../models/currency-exchange-responce';
import { CurrentRatesResponce } from '../models/current-rates-responce';

@Injectable({
  providedIn: 'root',
})
export class CurrencyConverterService {
  private http = inject(HttpClient);
  API_KEY = process.env['NG_APP_API_KEY'];
  API_URL = process.env['NG_APP_API_URL'];

  getCurrencyRates(): Observable<Rates> {

    return this.http
      .get<CurrentRatesResponce>(
        `${this.API_URL}/latest?apikey=${this.API_KEY}&base=UAH&symbols=USD,EUR`
      )
      .pipe(map((response) => response.rates));
  }

  convertCurrency(
    convertFrom: string,
    convertTo: string,
    amount: number
  ): Observable<number> {
    return this.http
      .get<CurrencyExchangeResponce>(
        `${this.API_URL}/convert?apikey=${this.API_KEY}&to=${convertTo}&from=${convertFrom}&amount=${amount}`
      )
      .pipe(map((response) => response.result));
  }
}
