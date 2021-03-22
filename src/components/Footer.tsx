import React, { FC } from 'react';
import {useDispatch} from 'react-redux';
import {toggleType} from '../actions';
const Footer: FC = () => {
    const dispatch = useDispatch();
    const handleClick = (e: any) => {
        const filter = e.target.attributes['data-filter'].value;
        dispatch(toggleType(filter));
    }
    return (
        <div onClick={handleClick}>
            <button data-filter="all">all</button>
            <button data-filter="active">active</button>
            <button data-filter="completed">completed</button>
        </div>
    )
}

export default Footer;