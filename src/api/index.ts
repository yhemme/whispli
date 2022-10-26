import { CurrencyType } from "../models/currencyType";

const getPricesForSymbole = async (symbol: string): Promise<CurrencyType | CurrencyType[]> => {
  const symbolOption = symbol ? `symbol=${symbol}&` : ''
  return fetch(
    `https://api2.binance.com/api/v3/ticker/24hr?${symbolOption}type=MINI`
  )
    .then((res) => res.json())
    .then((response) => response as CurrencyType | CurrencyType[]);
};

export { getPricesForSymbole };
