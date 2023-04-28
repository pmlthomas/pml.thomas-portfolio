import React, { useState, useEffect } from "react";
import styles from "./../../scss/components/Projects/projects.module.scss";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./../Projects/ProjectCard";
import adonisImg from "./../../images/projet adonis.png";
import laravelEcommerceImg from "./../../images/laravel e-commerce.webp";
import instaRemakeImg from "./../../images/instagram remake.png";

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
            description: "Reddit version développement personnel avec Next",
            img: adonisImg,
        },
        {
            name: "Laravel e-commerce",
            description: "Site e-commerce avancé avec Laravel",
            img: laravelEcommerceImg,
        },
        {
            name: "Instagram v2",
            description: "Remake d'instagram avec React",
            img: instaRemakeImg,
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
