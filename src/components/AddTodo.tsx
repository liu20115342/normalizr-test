import React, {ChangeEvent, FC, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../actions";

const AddTodo: FC = () => {
    const [text, setText] = useState('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setText(value);
    }
    const filter = useSelector((state: any) => {
        return state.filter;
    })
    const dispatch = useDispatch();
    const handleClick = () => {
        if (!text) {
            return false;
        }
        dispatch(addTodo(text));
        setText('');
    }

    return (
        <div>
            <input type="text" value={text} onChange={(e) => handleChange(e)}/>
            <button onClick={handleClick}>新增</button>
        </div>
    )
}

export default AddTodo;