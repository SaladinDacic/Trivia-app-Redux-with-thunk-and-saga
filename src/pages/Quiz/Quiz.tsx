import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getQuotesFetchTrigger, HeaderQuote, toogleFinished } from "../../components";
import { QuestionCard } from "../../components";
import { updateAnswers } from "../../components";
import { updateQuote } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getQuotesRequest } from "../../app/thunk";

export function Quiz() {
  const dispatch = useDispatch();
  const [isEnd, setIsEnd] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const fetchData = useSelector((store: any) => store.questionCard.questions);
  const alreadyDone = useRef(false);

  useEffect(() => {
    if (!alreadyDone.current) {
      alreadyDone.current = true;
      dispatch(getQuotesRequest() as any); //thunk way
      // dispatch(getQuotesFetchTrigger() as any); //saga way
    }
  }, []);

  const increaseNumber = () => {
    if (pageNumber < 9) {
      setPageNumber((oldNuber) => oldNuber + 1);
    } else {
      setIsEnd(true);
      dispatch(toogleFinished());
      dispatch(updateQuote("Results"));
    }
  };
  const setAnswer = (vote: boolean) => {
    dispatch(updateAnswers(vote));
  };
  return (
    <div className="Quiz">
      <HeaderQuote pageNumber={pageNumber} />
      <QuestionCard pageNumber={pageNumber} />
      <p>
        {isEnd ? (
          <Link to="/result">See Results</Link>
        ) : (
          <>
            <span
              onClick={() => {
                increaseNumber();
                setAnswer(true);
              }}
            >
              True
            </span>
            <span
              onClick={() => {
                increaseNumber();
                setAnswer(false);
              }}
            >
              False
            </span>
          </>
        )}
      </p>
      <h3>{pageNumber + 1} of 10</h3>
    </div>
  );
}
