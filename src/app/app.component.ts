import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { CurrencyConverterComponent } from "./components/currency-converter/currency-converter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CurrencyConverterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}

