import React, {Component} from 'react';
import './navbar.scss';
import TodoItem from "../showTodo/TodoItem";
import connect from "react-redux/es/connect/connect";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleIndicatorActive: 'remove',
            toggleIndicatorDone: 'remove',
            showActive: true,
            showDone: true
        };
    }

    toggleItems = label => {
        let newState;
        if (label === 'active') {
            newState = {
                ...this.state,
                showActive: !this.state.showActive
            };
            if (this.state.showActive === true) {
                newState = {
                    ...newState,
                    toggleIndicatorActive: 'add'
                }
            } else {
                newState = {
                    ...newState,
                    toggleIndicatorActive: 'remove'
                }
            }
        } else {
            newState = {
                ...this.state,
                toggleIndicator: 'add',
                showDone: !this.state.showDone
            };
            if (this.state.showDone === true) {
                newState = {
                    ...newState,
                    toggleIndicatorDone: 'add'
                }
            } else {
                newState = {
                    ...newState,
                    toggleIndicatorDone: 'remove'
                }
            }
        }
        this.setState(newState);
    };

    render() {
        return (
            <div id="navbar">
                <div className="createBtn">
                    <button className="createBtn">Create</button>
                    <hr/>
                </div>
                <div className="responsiveLayout">
                    <div className="todoBtn">
                        <p onClick={() => this.toggleItems('active')}>Active</p>
                        <i className="tiny material-icons">{this.state.toggleIndicatorActive}</i>
                    </div>
                    {this.state.showActive && this.props.createdTodos.map(el => (
                        <TodoItem key={el.id} icon={el.icon} title={el.title}/>
                    ))}
                </div>
                <div>
                    <div className="createBtn">
                        <p onClick={() => this.toggleItems('done')}> Done </p>
                        <i className="tiny material-icons">{this.state.toggleIndicatorDone}</i>
                    </div>
                    {this.state.showDone && this.props.doneTodos.map(el => (
                        <TodoItem key={el.id} id={el.id} icon={el.icon} title={el.title}/>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    let createdTodos = [];
    let doneTodos = [];
    console.log(state.todos);
    state.todos.map(el => {
        if (el.completed === true) {
            doneTodos.push(el);
        } else {
            createdTodos.push(el);
        }
    });
    return {
        createdTodos,
        doneTodos
    }
};

export default connect(mapStateToProps)(Navbar);