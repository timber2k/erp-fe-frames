import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import IntendedLearners from "./pages/intended-learners";
import CourseMessages from "./pages/course-messages";
import CourseLanding from "./pages/course-landing";
import CreateCourseWizard from "./pages/create-course-wizard";
import Curriculum from "./pages/curriculum";
import Dashboard from "./pages/dashboard";
import CourseSettings from "./pages/course-settings";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/intended-learners" component={IntendedLearners} />
          <Route exact path="/course-messages" component={CourseMessages} />
          <Route exact path="/course-landing" component={CourseLanding} />
          <Route
            exact
            path="/create-course-wizard"
            component={CreateCourseWizard}
          />
          <Route exact path="/curriculum" component={Curriculum} />
          <Route exact path="/course-settings" component={CourseSettings} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
