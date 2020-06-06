import { takeLatest, all } from "redux-saga/effects";
import { REQUEST_CURRENCY } from "../../pages/Homepage/actions/currencyTypes";
import { getCurrency } from "../../pages/Homepage/sagas";

export function* root() {
  yield all([
    takeLatest("ACTION", "METHOD"),
    takeLatest(REQUEST_CURRENCY, getCurrency),
  ]);
}
