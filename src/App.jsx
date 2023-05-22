import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import IntendedLearners from "./pages/intended-learners";
import CourseMessages from "./pages/course-messages";
import CourseLanding from "./pages/course-landing";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/intended-learners" component={IntendedLearners} />
          <Route exact path="/course-messages" component={CourseMessages} />
          <Route exact path="/course-landing" component={CourseLanding} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
