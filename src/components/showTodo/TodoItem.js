import React from 'react';

const TodoItem = ({id, icon, title}) => {
    const classWithId = `todoItem-`;
    return (
        <div className={classWithId}>
            <i className="tiny material-icons">{icon}</i>
            <p>{title}</p>
        </div>
    );
};

export default TodoItem;