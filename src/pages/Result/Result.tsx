import { useSelector } from "react-redux";
import { GameStarter, HeaderQuote } from "../../components";

export function Result() {
  const fetchResults = useSelector((store: any) => store.questionCard.questions);
  const correctAnswers = fetchResults.map((obj: any) => {
    return obj.correct_answer === "True" ? true : false;
  });
  const answers = useSelector((store: any) => store.questionCard.answers);
  const correctCount = () => {
    let correct = 0;
    answers.forEach((vote: boolean, i: number) => {
      if (correctAnswers[i] === vote) {
        correct++;
      }
    });
    return correct;
  };

  const displayAnswers = fetchResults.map((fetchObj: { question: string }, i: number) => {
    const isCorrect = answers[i] === correctAnswers[i] ? "+" : "-";
    return (
      <div className="answerList__container" key={i}>
        <h2
          className={
            "answerList__container--mark" + `${answers[i] === correctAnswers[i] ? " answerList__container--success" : " answerList__container--fail"}`
          }
        >
          {isCorrect}
        </h2>
        <p dangerouslySetInnerHTML={{ __html: fetchObj.question }}></p>
      </div>
    );
  });
  console.log(answers, fetchResults);
  return (
    <div className="Result">
      <HeaderQuote />
      <h1>{correctCount()} of 10</h1>
      <div className="answerList">{displayAnswers}</div>
      <GameStarter />
    </div>
  );
}
