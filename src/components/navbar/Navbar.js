import React, {Component} from 'react';
import './navbar.scss';
import TodoItem from "../showTodo/TodoItem";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showActive: true,
            showDone: true
        };
    }

    toggleItems = label => {
        let newState;
        if (label === 'active') {
            newState = {
                ...this.state,
                showCreate: !this.state.showCreate
            };
        } else {
            newState = {
                ...this.state,
                showCreate: !this.state.showCreate
            };
        }
        this.setState(newState);
    };

    render() {
        return (
            <div id="navbar">
                <div className="createBtn">
                    <a>Create</a>
                </div>
                <div>
                    <a onClick={() => this.toggleItems('active')}>Active</a>
                    <hr/>
                    {this.state.showActive && <TodoItem/>}
                </div>
                <div>
                    <a onClick={() => this.toggleItems('done')}> Done </a>
                    <hr/>
                    {this.state.showDone === true ? <TodoItem/> : null}
                </div>
            </div>
        )
    }
};

export default Navbar;