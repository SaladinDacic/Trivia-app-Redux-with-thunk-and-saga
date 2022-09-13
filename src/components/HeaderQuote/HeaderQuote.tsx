import { useSelector } from "react-redux";

export const HeaderQuote = ({ pageNumber }: { pageNumber?: number }) => {
  const questions = useSelector((store: any) => store.questionCard.questions);
  const headerQuote = useSelector((store: any) => store.headerQuote.quote);
  return (
    <div className="headerQuote">{pageNumber !== undefined ? <h1>{questions[pageNumber as number].category}</h1> : <h1>{headerQuote} </h1>}</div>
  );
};
