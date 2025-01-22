import React from "react";
import Dropdown from "./Dropdown"
import styles from "./public/Page.module.css";

const Header = () => {
    return (
        <div className={styles.header}>
            <Dropdown/>
        </div>  
    )
}

export default Header