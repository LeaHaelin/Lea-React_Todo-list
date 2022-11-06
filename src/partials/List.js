import React from 'react'
import cross from '../images/icon-cross.svg';

export const List = ({ isLight, setIsLight }) => {
    return (
        <div className={isLight ? 'list' : 'list dark'}>
            <div className={isLight ? 'list__todo' : 'list__todo dark'}>
                <div className={isLight ? 'list__radio' : 'list__radio dark'}></div>
                <p className="list__text--input" type="text"></p>
                <img src={cross} alt="" className="list__delet" />
            </div>
            <div className='list__control'>
                <p className="list__count">5 items left</p>
                <div className="list__status--desktop">
                    <button className={isLight ? "status__button btn--all" : "status__button dark btn--all"}>All</button>
                    <button className={isLight ? "status__button btn--all" : "status__button dark btn--active"}>Active</button>
                    <button className={isLight ? "status__button btn--all" : "status__button dark btn--completed"}>Completed</button>
                </div>
                <button className='list__clear'>Clear Completed</button>
            </div>
        </div>
    )
}
