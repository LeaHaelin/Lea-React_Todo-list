import React from 'react'

export const Status = ({ isLight, setIsLight }) => {
    return (
        <div className={isLight ? 'status' : 'status dark'}>
            <button className={isLight ? "status__button btn--all" : "status__button dark btn--all"}>All</button>
            <button className={isLight ? "status__button btn--all" : "status__button dark btn--active"}>Active</button>
            <button className={isLight ? "status__button btn--all" : "status__button dark btn--completed"}>Completed</button>
        </div>
    )
}
