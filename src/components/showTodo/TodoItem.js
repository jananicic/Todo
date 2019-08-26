import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import connect from "react-redux/es/connect/connect";
import {
    faRunning,
    faDumbbell,
    faHeart,
    faImage,
    faBell,
    faEnvelope,
    faCoffee,
    faSchool,
    faLaptop,
    faShareAltSquare,
    faVideo,
    faStar
} from '@fortawesome/free-solid-svg-icons'

const TodoItem = ({todos}) => {
    return (
        <div>
            <FontAwesomeIcon icon={faCoffee} size="1x"/>
            <p>Lorem ipsum</p>
        </div>
    );
};

const mapStateToProps = state => {
    return {todos: state.todos}
};

export default connect(mapStateToProps)(TodoItem);