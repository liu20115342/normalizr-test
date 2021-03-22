const byId = (state={}, action: any) => {
    if (action.response) {
        console.log('action', action);
        return {
            ...state,
            ...action.response.entities.todos,
        }
    }
    return state;
}

export default byId;

export const getTodo = (state: any, id: string) => state[id];