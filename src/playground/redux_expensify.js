import { createStore, combineReducers } from 'redux';

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