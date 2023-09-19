import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact=()=>{
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}><h2>Contact</h2><p>Feel free to reach out !</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contacts/mail icon.png")} alt="Email-icon" />
                    <a href="#"></a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contacts/LinkedIn icon.png")} alt="linkedin-icon" />
                    <a href="#"></a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contacts/githubIcon.png")} alt="github-icon" />
                    <a href="#"></a>
                </li>
                
            </ul>
        </footer>
    );
};