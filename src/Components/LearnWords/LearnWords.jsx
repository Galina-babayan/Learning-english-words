import "./LearnWords.css";

import Header from "../Neader/Header";
import PageMain from "../PageMain/PageMain";
import PageLibrary from "../PageLibrary/PageLibrary";
import PageCards from "../PageCards/PageCards";
import PageWords from "../PageWords/PageWords";

export default function LearnWords() {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <PageMain />
        <PageWords />
        <PageLibrary />
        <PageCards />
      </main>
    </div>
  );
}
