import { useSelector } from "react-redux";

export const QuestionCard = ({ pageNumber }: { pageNumber: number }) => {
  const questions = useSelector((store: any) => store.questionCard.questions);

  return (
    <div className="questionCard">
      <h2 dangerouslySetInnerHTML={{ __html: questions[pageNumber].question }}></h2>
    </div>
  );
};
