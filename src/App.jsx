import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import IntendedLearners from "./pages/intended-learners";
import CourseMessages from "./pages/course-messages";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/intended-learners" component={IntendedLearners} />
          <Route exact path="/course-messages" component={CourseMessages} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
