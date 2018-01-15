import { createStore, combineReducers } from 'redux';
import uuid from 'uuid''

//ADD_EXPENSE
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createAt = 0 
    } = {}
) => ({ 
    type: 'ADD_EXPENSE',
    expenses: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
 })

//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

//Filter Reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

//Store Creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'HenryGarmendia',
        description: 'JavaScript Course',
        note: 'Et excepteur quis elit proident veniam laboris excepteur labore.',
        amount: 1099,
        createAt: 0
    }],
    filters: {
        text: 'course',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}