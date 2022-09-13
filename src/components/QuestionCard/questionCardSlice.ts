import * as actions from "../../app/actionNames";

const initialState = {
  questions: [""],
  answers: [],
};

export default function questionCardReducer(state = initialState, action: { type: string; payload?: any }) {
  switch (action.type) {
    case actions.GET_QUOTES_FETCH:
      return { ...state, questions: action.payload };
    case actions.UPDATE_ANSWERS:
      return { ...state, answers: [...state.answers, action.payload] };
    case actions.REST_ANSWERS:
      return { ...state, answers: [] };
    default:
      return state;
  }
}

export const getQuotesFetch = (payload: ArrayLike<any>) => {
  return {
    type: actions.GET_QUOTES_FETCH,
    payload,
  };
};
export const getQuotesFetchTrigger = () => {
  //made to trigger Sagas which call getQuotesFetch
  return {
    type: actions.GET_QUOTES_FETCH_TRIGGER,
  };
};

export const updateAnswers = (payload: boolean) => {
  return {
    type: actions.UPDATE_ANSWERS,
    payload,
  };
};

export const restAnswers = () => {
  return {
    type: actions.REST_ANSWERS,
  };
};
