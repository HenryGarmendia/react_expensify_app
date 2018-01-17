import React from 'react';
import ExpenseForm from './expense_form';

const AddExpense = () => (
    <div>
        This is from ADD component...
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                console.log(expense);
            }}
        />
    </div>
);

export default AddExpense;