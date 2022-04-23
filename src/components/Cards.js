import React, { Component } from 'react';
import styles from "./Cards.module.css";
import Card from './Card';

import lamborghini from "../images/lamborghini.jpg"; 
import bugatti from "../images/bugatti.jpg";
import audir8 from "../images/audir8.jpg";
import audis5 from "../images/audis5.jpg";

class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={lamborghini} name="lamborghini" cost="200k $" />
                <Card image={bugatti} name="bugatti" cost="1.9M $" />
                <Card image={audir8} name="audi r8" cost="155k $" />
                <Card image={audis5} name="audi s5" cost="60k $" />
            </div>
        );
    }
}

export default Cards;
