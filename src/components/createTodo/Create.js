import React, {Component} from 'react'
import {connect} from 'react-redux';
import {addTodo} from '../../js/actions';
import Icons from './Icons'

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: '',
            category: 'Business',
            text: '',
            location: '',
            date: null
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
            <div>
                <Icons icon={this.state.icon} setIcon={this.setIcon}/>
                <div id="categories">
                    <select name="category" onChange={this.handleChange}>
                        <option value="Business">Business</option>
                        <option value="Personal">Personal</option>
                        <option value="Family">Family</option>
                        <option value="Work">Work</option>
                        <option value="School">School</option>
                    </select>
                </div>
                <input id="text" name="text" onChange={this.handleChange}/>
                <input id="location" name="location" onChange={this.handleChange}/>
                <input id="date" name="date" onChange={this.handleChange}/>
                <button onClick={this.setTodo}>Create!</button>
            </div>
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