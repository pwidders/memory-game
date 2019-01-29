import React from 'react';
import classes from './Header.css';

function Header() {
    return (
        <header className={classes.Jumbotron}>
            <h1>Super Space Memory Game!</h1>
            <h2>Click on an image to start earning points, but don't click an image more than ONCE!</h2>
        </header>
    )
}

export default Header;