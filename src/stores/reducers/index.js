import { combineReducers } from "redux";
import { currencyReducer } from "../../pages/Homepage/reducers";

const rootReducer = combineReducers({
  currency: currencyReducer,
});

export default rootReducer;
