import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentProfile from "./StudentProfile";
import CompanyProfile from "./CompanyProfile";
import JobListings from "./JobListings";
import RupeesHistory from "./RupeesHistory";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/student/profile" component={StudentProfile} />
          <Route path="/company/profile" component={CompanyProfile} />
          <Route path="/jobs" component={JobListings} />
          <Route path="/rupees/history" component={RupeesHistory} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
