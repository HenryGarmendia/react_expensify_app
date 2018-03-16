import React from 'react';
import ExpenseList from './expense_list';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './expense_summary';

const ExpenseDashboard = () => (
    <div>
        <ExpenseSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboard;