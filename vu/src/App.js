import './App.css';
import Home from './client/components/home';
import About from './client/components/about';
import Coops from './client/components/co-ops';
import Policies from './client/components/policies';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";

const App = () => (
  
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/co-ops" component={Coops} />
        <Route exact path="/policies" component={Policies} />
      </Switch>
    </Router>

 // );
)
export default withRouter(App);
