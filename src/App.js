import { Route, Switch } from 'wouter';

import Login from 'routes/Login';
import Dashboard from 'routes/Dashboard';
import NotFound from 'routes/NotFound';

const App = () => (
    <Switch>
        <Route path="/" component={Login} />

        <Route path="/logout">
            <h1>Logout</h1>
        </Route>

        <Route path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/:id">
            {(params) => <h1>Store, {params.id}</h1>}
        </Route>

        <Route path="/:rest*" component={NotFound} />
    </Switch>
);

export default App;
