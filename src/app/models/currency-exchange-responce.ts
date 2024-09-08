export interface CurrencyExchangeResponce {
  success: boolean;
  date: string;
  historical: string;
  info: {
    rate: number;
    timestamp: number;
  };
  query: {
    amount: number;
    from: string;
    to: string;
  };
  result: number;
}
