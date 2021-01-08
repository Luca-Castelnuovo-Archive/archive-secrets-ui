import { Route, Switch } from 'wouter';

import Login from 'routes/Login';
import Dashboard from 'routes/Dashboard';
import NotFound from 'routes/NotFound';

const App = () => (
    <Switch>
        <Route path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
    </Switch>
);

export default App;
