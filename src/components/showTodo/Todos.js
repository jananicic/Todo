import React from 'react';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Todos = ({todos}) => {
    return (
        <ul>
            {todos.map(el => (
                <li key={el.id}>
                    id: {el.id},
                    icon: <FontAwesomeIcon icon={el.icon} size="1x"/>,
                    category: {el.category},
                    text: {el.text},
                    location: {el.location},
                    date: {el.date},
                    completed: {el.completed.toString()}
                </li>
            ))}
        </ul>
    );
};

const mapStateToProps = state => {
    return {todos: state.todos}
};

export default connect(mapStateToProps)(Todos);