import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Todo from "./Todo";
import { initTodos, TodoInfo } from '../actions';

const TodoList = () => {
    const dispatch = useDispatch();
    const {todos, filter}: {todos: TodoInfo[], filter: string} = useSelector((state: any) => {
        const {filter = 'all', listByFilter, byId} = state;
        const ids = listByFilter[filter].ids;
        const todos = ids.map((id: string) => {
            return byId[id];
        }).filter(Boolean);
        return {
            todos,
            filter
        }
    });
    useEffect(() => {
        dispatch(initTodos(filter));
    }, [filter])

    return (
        <ul>
            {
                todos.map(todo => (
                    <Todo
                        key={todo.id}
                        {...todo}
                    />
                ))
            }
        </ul>
    )
}

export default TodoList;