import React, {FC, useState} from 'react';
// import s from './OnOff.module.css'

interface IOnOff {
    value: boolean
    onClick: (value: boolean) => void
}

export const OnOff:FC<IOnOff> = ({value, onClick}) => {

    const onStyle = {
        width: '40px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        cursor: 'pointer',
        backgroundColor: value ? 'green' : 'white'
    }
    const offStyle = {
        width: '40px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        cursor: 'pointer',
        backgroundColor: value ? 'white' : 'red'
    }
    const indicator = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: value ? 'green' : 'red'
    }
    return (
        <div>
            <div style={onStyle} onClick={() => {onClick(true)}}>On</div>
            <div style={offStyle} onClick={() => {onClick(false)}}>Off</div>
            <div style={indicator}></div>
        </div>
    );
};