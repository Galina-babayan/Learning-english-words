import "./App.css";

import Header from "./Components/Header/Header";
import PageMain from "./Pages/PageMain/PageMain";
import PageLibrary from "./Pages/PageLibrary/PageLibrary";
import PageCards from "./Pages/PageCards/PageCards";
import PageWords from "./Pages/PageWords/PageWords";
import PagePlay from "./Pages/PagePlay/PagePlay";
import Error from "./Pages/Error404/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main className="page">
          {/* <PageMain /> */}
          <Routes>
            <Route path="/" element={<PageMain />} />

            <Route path="/PageWords" element={<PageWords />} />

            <Route path="/PageCards" element={<PageCards />} />

            <Route path="/PagePlay" element={<PagePlay />} />

            <Route path="*" element={<Error />} />

            {/* <Route path="/PageLibrary" element={<PageLibrary />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
