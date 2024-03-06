import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentProfile from "./StudentProfile";
import CompanyProfile from "./CompanyProfile";
import JobListings from "./JobListings";
import RupeesHistory from "./RupeesHistory";

const Routes = () => {
  return (
    <Router>
      <Route path="/student/profile" component={StudentProfile} />
      <Route path="/company/profile" component={CompanyProfile} />
      <Route path="/jobs" component={JobListings} />
      <Route path="/rupees/history" component={RupeesHistory} />
    </Router>
  );
};

export default Routes;
