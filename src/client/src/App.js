import './App.css';
import Home from './client/components/home';
import About from './client/components/about';
import Wil from './client/components/wil';
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
import Trustees from './client/components/trustees';
import CurrentStudents from './client/components/current-students';
import NewStudents from './client/components/new-students';
import Myvustudentportal from './client/components/myvu-student-portal';
import Exams from './client/components/exams';
import Appeals from './client/components/appeals';
import CourseProcedures from './client/components/course-procedures';
import ContactWil from './client/components/contactwil';
import WilCosts from './client/components/costs-and-insurance';
import HowWilWorks from './client/components/how-wil-works';
import Benefits from './client/components/benefits';
import WilHallOfFame from './client/components/wil-hall-of-fame'
import Vclass from './client/components/vclass';
import ProgIndex from './client/components/prog-index';
import CourseOffering from './client/components/course-offering';
import ApplyNow from './client/components/apply-now';
import AboutRes from './client/components/about-res';
import EthicsRes from './client/components/ethics-res';
import AvailRes from './client/components/avail-res';
import AcademRes from './client/components/academic-res';
import SupervRes from './client/components/superv-res';
import ViewProgram from './client/components/view-program';
import LifeVu from './client/components/life-at-vu';
import Library from './client/components/library';

import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";

const App = () => (
  
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/wil" component={Wil} />
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
        <Route exact path="/trustees" component={Trustees} />
        <Route exact path="/current-students" component={CurrentStudents} />
        <Route exact path="/new-students" component={NewStudents} />
        <Route exact path="/myvu-student-portal" component={Myvustudentportal} />
        <Route exact path="/exams" component={Exams} />
        <Route exact path="/appeals" component={Appeals} />
        <Route exact path="/course-procedures" component={CourseProcedures} />
        <Route exact path="/contactwil" component={ContactWil} />
        <Route exact path="/costs-and-insurance" component={WilCosts} />
        <Route exact path="/how-wil-works" component={HowWilWorks} />
        <Route exact path="/benefits" component={Benefits} />
        <Route exact path="/wil-hall-of-fame" component={WilHallOfFame} />
        <Route exact path="/vclass" component={Vclass} />
        <Route exact path="/course-offering" component={CourseOffering} />
        <Route exact path="/apply-now" component={ApplyNow} />
        <Route exact path="/about-res" component={AboutRes} />
        <Route exact path="/ethics-res" component={EthicsRes} />
        <Route exact path="/avail-res" component={AvailRes} />
        <Route exact path="/academic-res" component={AcademRes} />
        <Route exact path="/superv-res" component={SupervRes} />
        <Route exact path="/view-program:program" component={ViewProgram} />
        <Route exact path="/prog-index:program" component={ProgIndex} />
        <Route exact path="/prog-index:facultylevel" component={ProgIndex} />
        <Route exact path="/life-at-vu" component={LifeVu} />
        <Route exact path="/library" component={Library} />
      </Switch>
    </Router>

 // );
)
export default withRouter(App);
