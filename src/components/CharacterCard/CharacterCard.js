import React from 'react';
import classes from './CharacterCard.css';

function CharacterCard(props) {
    return (
        <div className={classes.Gallery}>
            <img
                alt={props.name}
                src={props.image}
                onClick={() => props.shuffleCards(props.id)}
                className="click-item"
            />
        </div>
    );
}

export default CharacterCard;