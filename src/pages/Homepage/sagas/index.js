import { reject } from "q";
import { put } from "redux-saga/effects";

import http from "../../../utils/config/http";

import { getCurrencies } from "../actions";

export function* getCurrency({ data }) {
  try {
    const resp = yield http.get("/ticket");
    yield put(getCurrencies(resp.data));
  } catch (error) {
    reject(error);
  }
}
