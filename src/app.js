import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignUp from "./Signup";
import Login from "./Login";
import SpecPage from "./components/SpecPage";
import FeedbackPage from "./feedback/FeedbackPage"; // FeedbackPage 경로 수정

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/spec" element={<SpecPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />{" "}
          {/* 피드백 페이지 라우트 */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
