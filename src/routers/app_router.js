import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AddExpense from '../components/add_expense';
import ExpenseDashboard from '../components/expense_dashboard';
import EditExpense from '../components/edit_expense';
import Header from '../components/header';
import HelpPage from '../components/help_page';
import NotFoundPage from '../components/not_found_page';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboard} exact={true}/>
                <Route path="/create" component={AddExpense} />
                <Route path="/edit/:id" component={EditExpense} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;