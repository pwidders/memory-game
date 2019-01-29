import React from 'react';
import classes from './Header.css';

const Header = (props) => (
        <header className={classes.Jumbotron}>
            <div className={classes.Textbox}>
                <h1>Super Space Memory Game!</h1>
                <h2>Click on an image to start earning points, but don't click an image more than ONCE!</h2>
            </div>
        </header>
);

export default Header;