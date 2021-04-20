import './App.css';
import Home from './client/components/home';
import About from './client/components/about';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";

const App = () => (
  
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>

 // );
)
export default withRouter(App);
