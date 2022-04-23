import React from "react";

import styles from "./Navbar.module.css";
import logo from "../images/logo.jpg";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li>home page</li>
                    <li>products</li>
                    <li>about us</li>
                </ul>
            </div>
            <div className={styles.logo}>
                <img className={styles.logo} src={logo} alt="logo" />
            </div>
        </header>
    );
};

export default Navbar;