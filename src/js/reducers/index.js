import {ADD_TODO} from "../constants/action-types";

const initialState = {
    todos: [
        {
            id: '6al4s16w9',
            icon: 'check_circle',
            title: 'Spremanje',
            todos: [{
                text: 'pomesti pod',
                note: '',
                completed: false
            }, {
                text: 'oprati sude',
                note: '',
                completed: true
            }, {
                text: 'oprati wc',
                note: 'oprati wc skoljku i umivaonik u kupaonici.',
                completed: false
            }],
            completed: false
        },
        {
            id: '6rl6s19w9',
            icon: 'work',
            title: 'Ucenje',
            todos: [{
                text: 'React',
                note: '',
                completed: true
            }, {
                text: 'Angular CLI',
                note: '',
                completed: true
            }, {
                text: 'CSS Grid',
                note: 'Ponoviti css grid kako nebi trebao koristit cheatsheet.',
                completed: false
            }],
            completed: false
        },
        {
            id: '6cl5s16w9',
            icon: 'work',
            title: 'Amplexor properties tests',
            todos: [{
                text: 'dv16547',
                note: 'prijaviti bug na koraku 17 u JIRi',
                completed: true
            }, {
                text: 'dv17899',
                note: 'popraviti bug na QCMP6 okolini',
                completed: true
            }, {
                text: 'dv16767',
                note: '',
                completed: true
            }],
            completed: true
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
