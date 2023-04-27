import React from "react";
import styles from "./../../scss/components/Projects/projects.module.scss";

export default function ProjectCard({ name, description, img }) {
    return (
        <>
            <img src={img} alt="image_de_projet" />
            <div className={styles.projectTexts}>
                <h1 className={styles.projectName}>{name}</h1>
                <h2 className={styles.projectDescription}>{description}</h2>
            </div>
        </>
    );
}
