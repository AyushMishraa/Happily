import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero=()=>{
    return (
    <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, Let's Be Happy !</h1>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatum rerum explicabo esse praesentium sequi eos ipsa illo adipisci consectetur itaque, officia, soluta exercitationem reiciendis suscipit corrupti minus quis voluptas!</p>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image" className={styles.heroImg}/>
         <div className={styles.topBlur}/>
         <div className={styles.bottomBlur}/>
    </section>
    );
};