import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './expense_form';

const EditExpense = (props) => {
   return (
        <div>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    console.log('updated', expense);
                }}
            />
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    };
};

export default connect(mapStateToProps)(EditExpense);