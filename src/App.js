import Header from "./components/Header";

import FeedbackList from "./components/FeedbackList";

import FeedbackStat from "./components/FeedbackStat";
import FeebackForm from "./components/FeebackForm";

import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeebackForm></FeebackForm>
                  <FeedbackStat></FeedbackStat>
                  <FeedbackList></FeedbackList>
                </>
              }></Route>

            <Route path="/about" element={<AboutPage />}></Route>
          </Routes>

          {/* <AboutPage></AboutPage> */}
          <AboutIconLink></AboutIconLink>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
