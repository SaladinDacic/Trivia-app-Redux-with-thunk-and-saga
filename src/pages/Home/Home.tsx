import { GameStarter, HeaderQuote } from "../../components";

export function Home() {
  return (
    <div className="Home">
      <HeaderQuote />
      <h2>You will be presented with 10 True or False questions</h2>
      <h2 className="homeScreen__question">Can you score 100%</h2>
      <GameStarter />
    </div>
  );
}
