import React from "react";
import styles from "./../../scss/components/Projects/projects.module.scss";
import adonisImg from "./../../images/projet adonis.png";

export default function ProjectCard() {
    return (
        <div className={styles.projectCard}>
            <img src={adonisImg} alt="image_de_projet" />
            <p className={styles.seeMore}>VOIR PLUS</p>
        </div>
    );
}
