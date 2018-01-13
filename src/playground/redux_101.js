import { createStore } from 'redux';

// Action generators - functions that return action objects
const increment_count = ({ increment_by = 1 } = {}) => ({
    type: 'INCREMENT',
    increment_by
});

const decrement_count = ({ decrement_by = 1 } = {}) => ({
    type: 'DECREMENT',
    decrement_by
});

const set_count = ({ set } = {}) => ({
    type: 'SET',
    set
});

const reset_count = () => ({
    type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.increment_by
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrement_by
            };
        case 'SET':
            return {
                count: action.set
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;   
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(increment_count({ increment_by: 5 }));

store.dispatch(increment_count());

store.dispatch(reset_count());

store.dispatch(decrement_count());

store.dispatch(decrement_count({ decrement_by: 10 }));

store.dispatch(set_count({ set: 200 }));