import { put, call, takeEvery } from "@redux-saga/core/effects";
import { getQuotesFetch } from "../components";
import { GET_QUOTES_FETCH_TRIGGER } from "./actionNames";

function* workGetQuotesFetch(): Generator<any, any, any /* WhatYouYield,WhatYouReturn,WhatYouAccept*/> {
  //call make fetch request
  let response = yield call(fetch, "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean");
  let json = yield response.json();
  const results = json.results;

  //put triggers action (like dispatch)
  yield put(getQuotesFetch(results));
}

export function* mySaga() {
  //takeEvery listen for actions
  yield takeEvery(GET_QUOTES_FETCH_TRIGGER, workGetQuotesFetch);
}
