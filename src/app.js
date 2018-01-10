import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboard = () => (
    <div>
        This is from DASHBOARD component...
    </div>
);

const CreateExpense = () => (
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
        ⚠️ 404 Page Not Found... <Link className="link" to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>    
        <h1>Expensify Web-App</h1>
        <NavLink activeClassName="is_active link" exact={true} to="/">Dashboard</NavLink>
        <NavLink activeClassName="is_active link" to="/create">Create Expense</NavLink>
        <NavLink activeClassName="is_active link" to="/edit">Edit Expense</NavLink>
        <NavLink activeClassName="is_active link" to="/help">Help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboard} exact={true}/>
                <Route path="/create" component={CreateExpense} />
                <Route path="/edit" component={EditExpense} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('react_container'));