import React from 'react';
import ExpenseList from './expense_list';
import ExpenseListFilters from './expense_list_filters';

const ExpenseDashboard = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboard;