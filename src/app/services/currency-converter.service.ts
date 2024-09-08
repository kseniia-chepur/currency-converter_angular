import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
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

  getCurrencyRates(): Observable<Rates> {
    return this.http
      .get<CurrentRatesResponce>(
        `${environment.base_url}/latest?apikey=${environment.api_key}&base=UAH&symbols=USD,EUR`
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
        `${environment.base_url}/convert?apikey=${environment.api_key}&to=${convertTo}&from=${convertFrom}&amount=${amount}`
      )
      .pipe(map((response) => response.result));
  }
}
