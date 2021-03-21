const byId = (state={}, action: any) => {
    if (action.type === 'INIT_TODOS') {
        console.log(state, action);
        return {
            ...action.response.entities.todos,
        }
    }
    return state;
}

export default byId;

export const getTodo = (state: any, id: string) => state[id];