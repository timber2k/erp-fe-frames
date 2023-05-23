import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import IntendedLearners from "./pages/intended-learners";
import CourseMessages from "./pages/course-messages";
import CourseLanding from "./pages/course-landing";
import CreateCourseWizard from "./pages/create-course-wizard";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/intended-learners" component={IntendedLearners} />
          <Route exact path="/course-messages" component={CourseMessages} />
          <Route exact path="/course-landing" component={CourseLanding} />
          <Route
            exact
            path="/create-course-wizard"
            component={CreateCourseWizard}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
