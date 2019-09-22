import React, {Component} from 'react'
import './index.scss'
import Icon from "./Icon";

/**
 * Close #icons div if the icon is selected or if user clicks outside of the div.
 */
document.addEventListener("click", function (event) {
    if (event.target.closest("#icons"))
        document.getElementById("icons").style.display = "none";
    else
        document.getElementById("icons").style.display = "none";
});

class Icons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    /**
     * Show icons if user clicks on plus icon and set #icons display from none to grid.
     */
    showIcons = () => {
        this.setState({
            open: true
        });
        document.getElementById("icons").style.display = "grid";
    };

    render() {
        let {icon, setIcon} = this.props;
        let icons = ['work', 'school', 'star', 'favorite', 'fastfood', 'check_circle'];
        if(icon === '') icon = 'add';

        return (
            <div id="iconsContainer">
                <div onClick={this.showIcons} id="expander">
                    <i className="small material-icons">{icon}</i>
                </div>
                <div id="icons">
                    {this.state.open && icons.map(el => (<Icon icon={el} setIcon={setIcon}/>))}
                </div>
            </div>
        );
    }
}

export default Icons;