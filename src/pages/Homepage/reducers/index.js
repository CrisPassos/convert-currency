import { REQUEST_CURRENCY, GET_CURRENCY } from "../actions/currencyTypes";

const initialState = {
  currency: [],
};

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CURRENCY:
      return { ...state };

    case GET_CURRENCY:
      return { ...state, currency: action.currency };

    default:
      return state;
  }
};
