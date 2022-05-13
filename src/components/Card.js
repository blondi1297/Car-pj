import React, { Component } from "react";
import styles from "./Card.module.css";
import up from "../images/up.svg";
import down from "../images/down.svg";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  
  upHandler = () => {
        this.setState((prevstate) => ({ 
        counter: prevstate.counter + 1 }))
  };

  downHandler = () => {
      if(this.state.counter >= 1){
            this.setState((prevstate) => ({ 
            counter: prevstate.counter - 1 }))
      }
  };

  render() {
    const { image, name, cost } = this.props;
    const { counter } = this.state;
    return (
      <div className={styles.container}>
        <img src={image} alt="car" />
        <h1>{name}</h1>
        <p>{cost} {counter ? ` * ${counter} = ${counter * Number(cost.split(" ")[0])} $` : ""}</p>

        <div className={styles.counter}>
          <span>{counter}</span>
          <div className={styles.numbersit}></div>
          <img className={styles.upsvg} src={up} alt="arrow" onClick={this.upHandler}/>
          <img className={styles.downsvg} src={down} alt="arrow" onClick={this.downHandler} 
               id={!counter && styles.deactive}/>
        </div>
       </div>
    );
  }
}

export default Card;
