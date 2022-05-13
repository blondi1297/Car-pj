import React from "react";

import styles from "./Navbar.module.css";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li><Link to="/">home page</Link></li>
                    <li><Link to="/products">products</Link></li>
                    <li><Link to="/aboutus">about us</Link></li>
                </ul>
            </div>
            <div className={styles.logo}>
                <img className={styles.logo} src={logo} alt="logo" />
            </div>
        </header>
    );
};

export default Navbar;