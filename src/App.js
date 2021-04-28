import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Routes from './routes'

export const NotFound = () => (
  <section>
    <h1>Page Not Found</h1>
  </section>
);

export const UserContext = React.createContext({
  currentUser: null,
});
const App =  ()=> {
  return (
    <Router>
      <Layout>
        <Switch>
          {
            Routes.map((route)=> {
              return route?.children?.length?route.children.map((res)=><Route key={res.path} exact path={res.path} component={res.component} />)
                :<Route key={route.path} exact path={route.path} component={route.component} />})
          }
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
