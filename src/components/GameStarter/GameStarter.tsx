import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateQuote } from "../HeaderQuote";
// import { getQuotesRequest } from "../../app/";
import { toogleFinished } from ".";
import { getQuotesFetch, getQuotesFetchTrigger, restAnswers } from "../QuestionCard";

export const GameStarter = () => {
  const finished = useSelector((store: any) => store.gameStarter.finished);
  const dispatch = useDispatch();

  const goToHomePage = () => {
    dispatch(updateQuote("Welcome to the Trivia Challenge!"));
    dispatch(toogleFinished());
    dispatch(restAnswers());
    dispatch(getQuotesFetch([""]));
  };

  return (
    <div className="gameStarter">
      {finished ? (
        <Link onClick={goToHomePage} to="/">
          START OVER
        </Link>
      ) : (
        <Link to="/quiz">BEGIN</Link>
      )}
    </div>
  );
};
