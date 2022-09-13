import { AnyAction } from "@reduxjs/toolkit";
import * as actions from "../../app/actionNames";

const initialState = {
  quote: "Welcome to the Trivia Challenge!",
};

export default function headerQuoteReducer(state = initialState, action: { type: string; payload: any }) {
  switch (action.type) {
    case actions.UPDATE_QUOTE:
      return { ...state, quote: action.payload };
    default:
      return state;
  }
}

export function updateQuote(payload: string): AnyAction {
  return {
    type: actions.UPDATE_QUOTE,
    payload,
  };
}
