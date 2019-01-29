import React from 'react';
import './Navbar.css';

function Navbar(props) {
    return (
        <nav className="navbar">
        <ul>
            <li class={props}>{props.headTitle}</li>
            <li> Score {props.currentScore} | Top Score {props.topScore}</li>

        </ul>
        </nav>
    )
}

export default Navbar;