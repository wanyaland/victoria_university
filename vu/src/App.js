import './App.css';
import Home from './client/components/home';
import About from './client/components/about';
import Coops from './client/components/co-ops';
import Policies from './client/components/policies';
import Contact from './client/components/contact';
import Programs from './client/components/programs';
import Admissions from './client/components/admissions';
import Careers from './client/components/careers';
import Council from './client/components/council';
import Alumni from './client/components/alumni';
import Partners from './client/components/partners';
import Apply from './client/components/apply';
import Search from './client/components/search';
import Requirements from './client/components/requirements';
import StudentGuidelines from './client/components/student-guidelines';
import StudentProfile from './client/components/student-profile';
import News from './client/components/news'
import EventsHub from './client/components/events-hub';
import Keydates from './client/components/dates-deadlines'
import Tuition from './client/components/tuition-fees';
import TransferCredit from './client/components/transfer-credit'
import Glance from './client/components/glance';
import Faculties from './client/components/faculties';
import Governing from './client/components/governing';
import History from './client/components/history';
import Staff from './client/components/staff';
import Research from './client/components/research';

import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";

const App = () => (
  
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/co-ops" component={Coops} />
        <Route exact path="/policies" component={Policies} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/programs" component={Programs} />
        <Route exact path="/admissions" component={Admissions} />
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/council" component={Council} />
        <Route exact path="/alumni" component={Alumni} />
        <Route exact path="/partners" component={Partners} />
        <Route exact path="/apply" component={Apply} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/requirements" component={Requirements} />
        <Route exact path="/student-guidelines" component={StudentGuidelines} />
        <Route exact path="/student-profile" component={StudentProfile} />
        <Route exact path="/news" component={News} />
        <Route exact path="/events-hub" component={EventsHub} />
        <Route exact path="/dates-deadlines" component={Keydates} />
        <Route exact path="/tuition-fees" component={Tuition} />
        <Route exact path="/transfer-credit" component={TransferCredit} />
        <Route exact path="/glance" component={Glance} />
        <Route exact path="/faculties" component={Faculties} />
        <Route exact path="/governing" component={Governing} />
        <Route exact path="/history" component={History} />
        <Route exact path="/staff" component={Staff} />
        <Route exact path="/research" component={Research} />
      </Switch>
    </Router>

 // );
)
export default withRouter(App);
