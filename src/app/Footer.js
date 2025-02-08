import React from "react";
import styles from "./public/Page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div div className={styles.footer}>
            <div className = {styles.social_media_container}>
                <div>
                    <a href="https://github.com/dgorik" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{color: "black"}} size="2x" />
                    </a>
                    <a href="https://x.com/goribaldy19" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} style={{color: "black"}} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/danielgorbachev1/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} style={{color: "#0A66C2"}} size="2x" />
                    </a>
                </div>
            </div>
        </div>
            
    )
}

export default Footer

