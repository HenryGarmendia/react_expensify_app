import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/app_router';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 45000}));
store.dispatch(addExpense({ description: 'Gas bill', amount: 3500, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('react_container'));