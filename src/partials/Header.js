import React from 'react';
import iconMoon from '../images/icon-moon.svg';
import iconSun from '../images/icon-sun.svg';
import logoTodo from '../images/logo-todo.svg';

export const Header = ({ isLight, setIsLight }) => {
    const modeHandler = () => {
        setIsLight(!isLight)
    }

    return (
        <div className='header'>
            <img className='header__logo' src={logoTodo} alt="" />
            <img className="header__mode" src={isLight ? iconMoon : iconSun} alt="" onClick={modeHandler} />
        </div>
    )
}
