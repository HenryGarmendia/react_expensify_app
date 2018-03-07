import React from 'react';
import ExpenseList from './expense_list';
import ExpenseListFilters from './expense_list_filters';
import ExpenseSummary from './expense_summary';

const ExpenseDashboard = () => (
    <div>
        <ExpenseSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboard;