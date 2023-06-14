import "./App.css";

import Header from "./Components/Header/Header";
import PageMain from "./Pages/PageMain/PageMain";
import PageCards from "./Pages/PageCards/PageCards";
import PageWords from "./Pages/PageWords/PageWords";
import PagePlay from "./Pages/PagePlay/PagePlay";
import Error from "./Pages/Error404/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { WordsContextProvider } from "./context/Context";
import { Provider } from "mobx-react";
import store from "./Components/store/store";

function App() {
  return (
    <Provider {...store}>
      <Router>
        <div className="wrapper">
          <Header />
          <main className="page">
            {/* <PageMain /> */}
            <Routes>
              <Route path="/" element={<PageMain />} />

              <Route path="/PageWords" element={<PageWords />} />

              <Route path="/game" element={<PageCards />} />

              <Route path="/PagePlay" element={<PagePlay />} />

              <Route path="*" element={<Error />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
