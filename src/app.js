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
        <Link activeClassName="link" to="/">Dashboard</Link>
        <Link className="link" to="/create">Create Expense</Link>
        <Link className="link" to="/edit">Edit Expense</Link>
        <Link className="link" to="/help">Help</Link>
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