import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { toggleTodo } from '../actions';
interface TodoProps {
    text: string,
    completed: boolean,
    id: string
}
const Todo: FC<TodoProps> = ({text, completed, id}) => {
    const dispatch = useDispatch();
    const {filter} = useSelector((state: any) => ({
        filter: state.filter
    }));
    const handleToggleTodo = () => {
        dispatch(toggleTodo(id, filter))
    }
    return (
        <li
            onClick={handleToggleTodo}
            style={{
                textDecoration: completed ? 'line-through' : 'none',
                cursor: 'pointer'
            }}
        >
            {text}
        </li>
    )
}

export  default  Todo