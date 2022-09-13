import { configureStore } from "@reduxjs/toolkit";
import gameStarterReducer from "../components/GameStarter/gameStarterSlice";
import headerQuoteReducer from "../components/HeaderQuote/headerQuoteSlice";
import questionCardReducer from "../components/QuestionCard/questionCardSlice";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { mySaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { gameStarter: gameStarterReducer, headerQuote: headerQuoteReducer as any, questionCard: questionCardReducer as any },
  middleware: () => [sagaMiddleware, thunk],
});
sagaMiddleware.run(mySaga);
