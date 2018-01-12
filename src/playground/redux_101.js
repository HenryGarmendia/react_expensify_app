import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const increment_by = typeof action.increment_by === 'number' ? action.increment_by : 1;
            return {
                count: state.count + increment_by
            };
        case 'DECREMENT':
            const decrement_by = typeof action.decrement_by === 'number' ? action.decrement_by : 1;
            return {
                count: state.count - decrement_by
            };
        case 'SET':
            return {
                count: action.count
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

store.dispatch({
    type: 'INCREMENT',
    increment_by: 5
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'DECREMENT',
    decrement_by: 10
});

store.dispatch({
    type: 'SET',
    count: 101
});