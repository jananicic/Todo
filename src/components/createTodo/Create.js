import React, {Component} from 'react'
import {connect} from 'react-redux';
import {addTodo} from '../../js/actions';
import Icons from './Icons';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';


class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            icon: '',
            title: '',
            todos: [{
                text: 'pomesti pod',
                note: '',
                completed: false
            }, {
                text: 'oprati sude',
                note: '',
                completed: true
            }, {
                text: 'oprati wc',
                note: 'oprati wc skoljku i umivaonik u kupaonici',
                completed: false
            }],
            completed: false
        };
        // good way to bind methods
        //this.updateInput = this.updateInput.bind(this)
    }

    /**
     * get data from input and set state
     * @param event
     */
    handleChange = event => {
        const newState = {
            ...this.state,
            [event.target.name]: event.target.value
        };
        this.setState(newState);
    };

    /**
     * Set new todo_ to the store
     */
    setTodo = () => {
        if (this.state.icon !== '' &&
            this.state.category !== '' &&
            this.state.text !== '' &&
            this.state.location !== '' &&
            this.state.date !== '') {
            this.props.addTodo({
                // Math.random should be unique because of its seeding algorithm.
                // Convert it to base 36 (numbers + letters), and grab the first 9 characters
                // after the decimal.
                id: Math.random().toString(36).substr(2, 9),
                icon: this.state.icon,
                category: this.state.category,
                text: this.state.text,
                location: this.state.location,
                date: this.state.date,
                completed: false
            });
        }
    };

    /**
     * Set icon that was selected.
     * @param icon
     */
    setIcon = icon => {
        const newState = {
            ...this.state,
            icon: icon
        };
        this.setState(newState);
    };

    render() {
        return (
            <>
                <div>
                    <Icons icon={this.state.icon} setIcon={this.setIcon}/>
                    <div id="title" className="input-field">
                        <input type="text" onChange={this.handleChange}/>
                        <label htmlFor="text">Title</label>
                    </div>
                    <button className="btn yellow black-text" onClick={this.setTodo}>Create new todo group!</button>
                </div>
                <div>

                </div>
            </>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addTodo: input => {
            dispatch(addTodo(input))
        }
    };
};

export default connect(null, mapDispatchToProps)(Create);