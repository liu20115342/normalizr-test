import React, {FC} from 'react';
interface TodoProps {
    onClick: any,
    text: string,
    completed: boolean
}
const Todo: FC<TodoProps> = ({onClick, text, completed}) => {
    return (
        <li
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {{text}}
        </li>
    )
}

export  default  Todo