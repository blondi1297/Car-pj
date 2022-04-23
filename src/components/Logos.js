import React from 'react';

import styles from "./Logos.module.css"
import audi from "../images/audilogo.png"
import bugatti from "../images/bugattilogo.png"
import lamborghini from "../images/lamborghinilogo.jpg"

const Logos = () => {
    return (
        <div className={styles.container}>
            <h>
                who support us?
            </h>
            <div>
                <img src={audi} alt="audi" />
                <img src={bugatti} alt="bugatti" />
                <img src={lamborghini} alt="lamborghini" />
            </div>
        </div>
    );
};

export default Logos;