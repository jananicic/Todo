import React from 'react';

const TodoItem = ({icon, title}) => {
    return (
        <div className="todoItem">
            <i className="tiny material-icons">{icon}</i>
            <p>{title}</p>
        </div>
    );
};

export default TodoItem;