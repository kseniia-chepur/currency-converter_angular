import { Currencies } from "../enums/currencies";

export interface CurrencyExchangeResponce {
  date: string;
  info: {
    rate: number;
    timestamp: number;
  };
  query: {
    from: Currencies;
    to: Currencies;
    amount: number;
  };
  result: number;
  success: boolean;
}
