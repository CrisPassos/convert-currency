import { REQUEST_CURRENCY, GET_CURRENCY } from "../actions/currencyTypes";

const initialState = {
  currencies: [],
};

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CURRENCY:
      return { ...state };

    case GET_CURRENCY:
      return { ...state, stores: action.stores };

    default:
      return state;
  }
};
