import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { Currencies } from '../../enums/currencies';
import { CurrencyConverterService } from '../../services/currency-converter.service';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss'
})
export class CurrencyConverterComponent {
  private currencyConverterService = inject(CurrencyConverterService);
  currencies = Object.values(Currencies);
  fromCurrency: Currencies = Currencies.UAH;
  toCurrency: Currencies = Currencies.EUR;
  fromAmount: number = 0;
  toAmount: number = 0;

  convertCurrency() {
    if (this.fromCurrency === this.toCurrency) {
      this.toAmount = this.fromAmount;
    } else {
      this.currencyConverterService.convertCurrency(this.fromCurrency, this.toCurrency, this.fromAmount).subscribe({
          next: (result) => {
            this.toAmount = Math.round(result * 10000) / 10000;
          },
          error: (error) => console.error(error.status, error.error.message),
        });
    }
  }

  convertCurrencyReverseDirection() {
    if (this.fromCurrency === this.toCurrency) {
      this.fromAmount = this.toAmount;
    } else {
      this.currencyConverterService.convertCurrency(this.toCurrency, this.fromCurrency, this.toAmount).subscribe({
          next: (result) => {
            this.fromAmount = Math.round(result * 10000) / 10000;
          },
          error: (error) => console.error(error.status, error.error.message),
        });
    }
  }
}
