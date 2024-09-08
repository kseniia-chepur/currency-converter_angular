import { Rates } from "./rates";

export interface CurrentRatesResponce {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Rates;
}
