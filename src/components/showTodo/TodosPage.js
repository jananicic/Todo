import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoItem from './TodoItem';
import './css/todosPage.scss';

class TodosPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleIndicatorActive: 'remove',
            toggleIndicatorDone: 'remove',
            showActive: true,
            showDone: true
        }
    }

    /**
     * Show or hide todos in Active and Done lists and change icons (add/remove).
     * @param label
     */
    toggleItems = label => {
        let newState;
        // if Active button is pressed show/hide list and change icon on button.
        if (label === 'active') {
            if (this.state.showActive === true) {
                newState = {
                    ...this.state,
                    showActive: !this.state.showActive,
                    toggleIndicatorActive: 'add'
                }
            } else {
                newState = {
                    ...this.state,
                    showActive: !this.state.showActive,
                    toggleIndicatorActive: 'remove'
                }
            }
        }
        // if Done button is pressed show/hide list and change icon on button.
        if (label === 'done') {
            if (this.state.showDone === true) {
                newState = {
                    ...this.state,
                    showDone: !this.state.showDone,
                    toggleIndicatorDone: 'add'
                }
            } else {
                newState = {
                    ...this.state,
                    showDone: !this.state.showDone,
                    toggleIndicatorDone: 'remove'
                }
            }
        }
        this.setState(newState);
    };

    render() {
        return (
            <>
                <div className="todosNavbar">
                    <div id="createBtn">
                        <button>Create</button>
                    </div>
                    <div id="search">
                        <input type="text" placeholder="Search..."/>
                        <i className="tiny material-icons">search</i>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="activeBtn" onClick={() => this.toggleItems('active')}>
                            <p>Active</p>
                            <i className="tiny material-icons">{this.state.toggleIndicatorActive}</i>
                        </div>
                        <div>
                            {this.state.showActive && this.props.createdTodos.map(el => (
                                <TodoItem key={el.id} icon={el.icon} title={el.title}/>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="doneBtn" onClick={() => this.toggleItems('done')}>
                            <p>Done</p>
                            <i className="tiny material-icons">{this.state.toggleIndicatorDone}</i>
                        </div>
                        <div>
                            {this.state.showDone && this.props.doneTodos.map(el => (
                                <TodoItem key={el.id} icon={el.icon} title={el.title}/>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    let createdTodos = [];
    let doneTodos = [];
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

export default connect(mapStateToProps)(TodosPage);