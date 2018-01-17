import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './expense_form';
import { addExpense } from '../actions/expenses';

const AddExpense = (props) => (
    <div>
        This is from ADD component...
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
            }}
        />
    </div>
);

export default connect()(AddExpense);