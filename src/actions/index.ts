import {v4} from 'uuid';
import {normalize} from "normalizr";
import {arrayOfTodos, todo} from "./schema";
export interface TodoInfo {
    id: string,
    text: string,
    completed: boolean,
}
const fakeDatabase = {
    todos: [
        {
            id: v4(),
            text: 'hey',
            completed: true
        },
        {
            id: v4(),
            text: 'ho',
            completed: true
        },
        {
            id: v4(),
            text: 'let us go',
            completed: false
        }
    ]
}

const getTodos = (filter: string) => {
    switch (filter) {
        case 'all':
            return fakeDatabase.todos;
        case 'active':
            return fakeDatabase.todos.filter(t => !t.completed);
        case 'completed':
            return fakeDatabase.todos.filter(t => t.completed);
        default:
            throw new Error(`Unknown filter: ${filter}`);
    }
}

export const initTodos = (filter: string) => {
    return {
        type: 'INIT_TODOS',
        filter,
        response: normalize(getTodos(filter), arrayOfTodos)
    }
}
export const getTodoList = (filter: string) => {
    return {
        type: 'GET_TODO_LIST',
        filter
    }
}
export const addTodo = (text: string) => {
    const info = {
        id: v4(),
        text,
        completed: false
    }
    fakeDatabase.todos.push(info);
    return {
        type: 'ADD_TODO',
        response: normalize(info, todo)
    }
}

export const toggleTodo = (id: string, filter: string) => {
    fakeDatabase.todos.forEach((item) => {
        if (id === item.id) {
            item.completed = !item.completed;
        }
    })
    return {
        type: 'TOGGLE_TODO',
        response: normalize(getTodos(filter), arrayOfTodos)
    }
}

export const toggleType = (filter: string) => {
    return {
        type: 'TOGGLE_TYPE',
        filter
    }
}