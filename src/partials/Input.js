import React from 'react'

export const Input = ({ isLight, setIsLight }) => {
    return (
        <div className='input'>
            <input className={isLight ? "input__new" : "input__new dark"} type="text" placeholder="Create a new todo…" />
            <div className={isLight ? "input__radio" : "input__radio dark"} ></div>
        </div>
    )
}
