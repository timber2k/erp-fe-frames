import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import IntendedLearners from "./pages/intended-learners";
import CourseMessages from "./pages/course-messages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/intended-learners"
            element={<IntendedLearners />}
          />
          <Route exact path="/course-messages" element={<CourseMessages />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
