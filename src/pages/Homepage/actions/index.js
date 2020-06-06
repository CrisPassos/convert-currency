import { REQUEST_CURRENCY, GET_CURRENCY } from "./currencyTypes";

export const requestCurrency = payload => {
  return { type: REQUEST_CURRENCY, stores: payload };
};

export const getCurrencies = payload => {
  return { type: GET_CURRENCY, stores: payload };
};
