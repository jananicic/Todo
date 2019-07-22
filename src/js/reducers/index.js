import {ADD_TODO} from "../constants/action-types";

const initialState = {
    todos: [
        {
            id: '6al4s16w9',
            icon: 'faBell',
            category: 'School',
            text: 'dummy text 1',
            location: 'Zagreb',
            date: Date.now(),
            completed: true
        },
        {
            id: 'yzbt18y3u',
            icon: 'faCoffee',
            category: 'Business',
            text: 'dummy text 1',
            location: 'Zagreb',
            date: Date.now(),
            completed: false
        }
    ]
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            /**
             * Explanation:
             * in the empty object that we will return,
             * copy state and merged state-articles with action.payload array.
             * The concat() method is used to merge two or more arrays.
             * This method does not change the existing arrays, but instead returns a new array.
             */
            return Object.assign({}, state, {
                todos: state.todos.concat(action.payload)
            });
        default:
            return state;
    }
}

export default rootReducer;

/**
 * Note that:
 * We don't mutate the state. We create a copy with Object.assign().
 * Object.assign(state, { visibilityFilter: action.filter }) is also wrong: it will mutate the first argument.
 * You must supply an empty object as the first parameter.
 * You can also enable the object spread operator proposal to write { ...state, ...newState } instead.
 */
