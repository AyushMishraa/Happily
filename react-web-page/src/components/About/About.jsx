import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About=()=>{
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")}
                       alt="sitting wit laptop"
                       className={styles.aboutImage}/>
             <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque natus atque reprehenderit nisi velit veritatis vel libero, dolor sequi! Dolorum deleniti a nostrum maxime, ipsa sapiente expedita obcaecati vitae quibusdam.
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor maxime placeat perspiciatis consequuntur hic. Voluptatum, quasi. Esse consectetur distinctio corporis ab quo velit tempore consequatur impedit? Alias vel id delectus.
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas minima dolorem iure. Voluptatibus minima debitis laboriosam vitae nesciunt ratione numquam quos in nobis quae autem suscipit, ut natus doloremque sit.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minus id eaque sed eos at, beatae amet nemo veritatis nisi fugit nam officiis dicta excepturi! Quibusdam rerum nisi cupiditate dolor.</p>
            </div>
        </section>
    );
}