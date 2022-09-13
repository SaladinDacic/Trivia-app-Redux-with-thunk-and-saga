import { getQuotesFetch } from "../components";

export function getQuotesRequest() {
  return async function (dispatch: Function) {
    let response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean");
    let json = await response.json();
    const results = json.results;
    console.log(response, json, results);
    return dispatch(getQuotesFetch(results));
  };
}
