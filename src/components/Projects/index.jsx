import React, { useState, useEffect } from "react";
import styles from "./../../scss/components/Projects/projects.module.scss";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./../Projects/ProjectCard";
import adonisImg from "./../../images/projet adonis.png";

export default function Projects() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        inView && setIsVisible(true);
    }, [inView]);

    const projects = [
        {
            name: "Adonis",
            description: "Reddit version développement personnel",
            img: adonisImg,
        },
        {
            name: "Adonis",
            description: "Reddit version développement personnel",
            img: adonisImg,
        },
        {
            name: "Adonis",
            description: "Reddit version développement personnel",
            img: adonisImg,
        },
    ];

    const projectsDisplay = projects.map((el, i) => {
        return (
            <div className={styles.projectCard} key={i}>
                <ProjectCard
                    name={el.name}
                    description={el.description}
                    img={el.img}
                />
            </div>
        );
    });

    return (
        <div ref={ref} className={styles.container} id="portfolio">
            <h1>DERNIERS PROJETS</h1>
            <div
                className={
                    isVisible
                        ? styles.projectsContainerActive
                        : styles.projectsContainer
                }
            >
                <div className={styles.projectsDisplay}>{projectsDisplay}</div>
            </div>
        </div>
    );
}
