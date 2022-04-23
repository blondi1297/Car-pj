import React, { Component } from 'react';
import styles from "./Card.module.css"

class Card extends Component {
    render() {
        const {image, name, cost} = this.props; 
        return (
            <div className={styles.container}>
                <img src={image} alt="car"/>
                <h>{name}</h>
                <p>{cost}</p>
            </div>
        );
    }
}

export default Card;