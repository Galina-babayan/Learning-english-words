import "./App.css";

import Header from "./Components/Header/Header";
import PageMain from "./Components/PageMain/PageMain";
import PageLibrary from "./Components/PageLibrary/PageLibrary";
import PageCards from "./Components/PageCards/PageCards";
import PageWords from "./Components/PageWords/PageWords";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <PageMain />

        <PageWords />
        <PageCards />
        <PageLibrary />
      </main>
    </div>
  );
}

export default App;
