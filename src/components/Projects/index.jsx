import React, { useState, useEffect } from "react";
import styles from "./../../scss/components/Projects/projects.module.scss";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./../Projects/ProjectCard";

export default function Projects() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        inView && setIsVisible(true);
    }, [inView]);

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
                <div className={styles.projectsDisplay}>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </div>
    );
}
