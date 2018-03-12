import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'; 
import AddExpense from '../components/add_expense';
import ExpenseDashboard from '../components/expense_dashboard';
import EditExpense from '../components/edit_expense';
import Header from '../components/header';
import HelpPage from '../components/help_page';
import NotFoundPage from '../components/not_found_page';
import LoginPage from '../components/login_page';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>
                <Route path="/dashboard" component={ExpenseDashboard}/>
                <Route path="/create" component={AddExpense} />
                <Route path="/edit/:id" component={EditExpense} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;