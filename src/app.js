import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboard = () => (
    <div>
        This is from my DASHBOARD component
    </div>
);

const AddExpense = () => (
    <div>
        This is from my ADD component
    </div>
);

const EditExpense = () => (
    <div>
        This is from my EDIT component
    </div>
);

const HelpPage = () => (
    <div>
        This is from my HELP component
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboard} exact={true}/>
            <Route path="/create" component={AddExpense} />
            <Route path="/edit" component={EditExpense} />
            <Route path="/help" component={HelpPage} />
        </div>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('react_container'));