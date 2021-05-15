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
      </Switch>
    </Router>

 // );
)
export default withRouter(App);
