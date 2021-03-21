import {combineReducers} from "redux";
import byId from './byId';
import createList from "./createList";

const listByFilter = combineReducers({
    all: createList('all'),
    active: createList('active'),
    completed: createList('completed'),
})

const filterReducers = (
    state: string = 'all',
    action: {type: string, filter: string}
): string => {
    if (action.type === 'TARGET') {
        return action.filter
    }
    return state;
}

const todos = combineReducers({
    byId,
    listByFilter,
    filter: filterReducers
})

export default todos;
