import React from "react";
import styles from "./public/Page.module.css";

const Footer = () => {
    return (
        <div div className={styles.footer}>
            <div className = {styles.social_media_container}>
                <a href = "https://x.com/goribaldy19"> Twitter</a>
                <a className = {styles.medium_anchor} href = "https://www.linkedin.com/in/danielgorbachev1/"> LinkedIn</a>
                <a href = "https://github.com/dgorik"> Github</a>
            </div>
        </div>
    )
}

export default Footer

