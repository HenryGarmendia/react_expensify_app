import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboard = () => (
    <div>
        This is from DASHBOARD component...
    </div>
);

const AddExpense = () => (
    <div>
        This is from ADD component...
    </div>
);

const EditExpense = () => (
    <div>
        This is from EDIT component...
    </div>
);

const HelpPage = () => (
    <div>
        This is from HELP component...
    </div>
);

const NotFoundPage = () => (
    <div>
        ⚠️ 404 Page Not Found...
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboard} exact={true}/>
            <Route path="/create" component={AddExpense} />
            <Route path="/edit" component={EditExpense} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('react_container'));