import {ADD_TODO} from "../constants/action-types";

export function addTodo(payload) {
    return {type: ADD_TODO, payload}
}