import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignUp from "./Signup";
import Login from "./Login";
import SpecPage from "./components/SpecPage";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/spec" element={<SpecPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
