import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyConverterService } from '../../services/currency-converter.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private currencyConverterService = inject(CurrencyConverterService);
  usdRate: number | null = null;
  eurRate: number | null = null;
  currentDate: Date = new Date();

  ngOnInit(): void {
    this.currencyConverterService.getCurrencyRates().subscribe({
      next: (rates) => {
        this.usdRate = 1 / rates.USD;
        this.eurRate = 1 / rates.EUR;

      },
      error: (error) => console.error(error.status, error.error.message),
    });
  }
}
