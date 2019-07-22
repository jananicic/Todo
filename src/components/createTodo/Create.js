import React, {Component} from 'react'
import {connect} from 'react-redux';
import {addTodo} from "../../js/actions";

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: '',
            category: '',
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
    };

    render() {
        return (
            <div>
                <div id="icons">
                    <select name= "icon" onChange={this.handleChange}>
                        <option value="faRunning">Running</option>
                        <option value="faDumbbell">Dumbbell</option>
                        <option value="faHeart">Heart</option>
                        <option value="faImage">Image</option>
                        <option value="faBell">Bell</option>
                        <option value="faEnvelope">Envelope</option>
                        <option value="faCoffee">Coffee</option>
                        <option value="faSchool">School</option>
                        <option value="faLaptop">Laptop</option>
                        <option value="faShareAltSquare">Share</option>
                        <option value="faVideo">Video</option>
                        <option value="faStar">Star</option>
                    </select>
                </div>
                <div id="categories">
                    <select name= "category" onChange={this.handleChange}>
                        <option value="Business">Business</option>
                        <option value="Personal">Personal</option>
                        <option value="Family">Family</option>
                        <option value="Work">Work</option>
                        <option value="School">School</option>
                    </select>
                </div>
                <input id="text" name= "text" onChange={this.handleChange}/>
                <input id="location" name= "location" onChange={this.handleChange}/>
                <input id="date" name= "date" onChange={this.handleChange}/>
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