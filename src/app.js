import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboard = () => (
    <div>
        This is from my dashboard component
    </div>
);

const AddExpense = () => (
    <div>
        This is from my Add component
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboard} exact={true}/>
            <Route path="/create" component={AddExpense} />
        </div>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('react_container'));