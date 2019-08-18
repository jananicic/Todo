import React, {Component} from 'react'
import './index.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
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
    faStar,
    faPlus
} from '@fortawesome/free-solid-svg-icons'
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
        let icons = [faRunning, faDumbbell, faHeart, faImage, faBell, faEnvelope, faCoffee, faSchool, faLaptop, faShareAltSquare, faVideo, faStar];
        let iconsClass = ['faRunning', 'faDumbbell', 'faHeart', 'faImage', 'faBell', 'faEnvelope', 'faCoffee', 'faSchool', 'faLaptop', 'faShareAltSquare', 'faVideo', 'faStar'];
        if(icon === '') icon = faPlus;

        return (
            <>
                <div onClick={this.showIcons} id="expander">
                    <FontAwesomeIcon icon={icon} size="2x"/>
                </div>
                <div id="icons">
                    {this.state.open ? icons.map((el, index) => (<Icon icon={el} iconClass={iconsClass[index]} setIcon={setIcon}/>)) : null}
                </div>
            </>
        );
    }
}

export default Icons;