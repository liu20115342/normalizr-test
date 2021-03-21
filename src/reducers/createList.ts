import { combineReducers } from 'redux';
type Filter = 'all' | 'active' | 'completed';
const createList = (filter: Filter) => {
    const ids = (state = [], action: any) => {
        switch (action.type) {
            case 'FETCH_TODOS_SUCCESS':
                return filter === action.filter ?
                    action.response.result :
                    state;
            case 'ADD_TODO_SUCCESS':
                return filter !== 'completed' ?
                    [...state, action.response.result] :
                    state;
            default:
                return state;
        }
    };
    return combineReducers({
        ids
    });
};

export default createList;

export const getIds = (state: any) => state.ids;
export const getIsFetching = (state: any) => state.isFetching;
export const getErrorMessage = (state: any) => state.errorMessage;
