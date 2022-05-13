import React, { Component } from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
import lamborghini from "../images/lamborghini.jpg";
import bugatti from "../images/bugatti.jpg";
import audir8 from "../images/audir8.jpg";
import audis5 from "../images/audis5.jpg";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      carData: [
        { id: 1, image: lamborghini, name: "lamborghini", cost: "200k $" },
        { id: 2, image: audis5, name: "audi s5", cost: "60k $" },
        { id: 3, image: bugatti, name: "bugatti", cost: "1.9M $" },
        { id: 4, image: audir8, name: "audi r8", cost: "155k $" },
      ],
    };
  }
  render() {
    return (
      <div className={styles.container}>
        {/* <Card image={lamborghini} name="lamborghini" cost="200k $"/>
                <Card image={bugatti} name="bugatti" cost="1.9M $"/>
                <Card image={audir8} name="audi r8" cost="155k $"/>
                <Card image={audis5} name="audi s5" cost="60k $"/> */}
        {this.state.carData.map((car) => (
          <Card key={car.id} image={car.image} name={car.name} cost={car.cost} />
        ))}
      </div>
    );
  }
}

export default Cards;
