import React, { useState, useEffect } from "react";
import styles from "./../../scss/components/Abilities/abilities.module.scss";
import { useInView } from "react-intersection-observer";

export default function Abilities() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        inView && setIsVisible(true);
    }, [inView]);

    const abilitiesLeft = [
        {
            language: "React",
            percentage: "80%",
        },
        {
            language: "Tailwind",
            percentage: "80%",
        },
        {
            language: "Next",
            percentage: "75%",
        },
        {
            language: "JavaScript",
            percentage: "70%",
        },
        {
            language: "TypeScript",
            percentage: "70%",
        },
        {
            language: "CSS et Sass",
            percentage: "70%",
        },
        {
            language: "Redux",
            percentage: "60%",
        },
    ];

    const abilitiesRight = [
        {
            language: "GitHub",
            percentage: "80%",
        },
        {
            language: "Laravel",
            percentage: "75%",
        },
        {
            language: "MySql",
            percentage: "70%",
        },
        {
            language: "Symfony",
            percentage: "65%",
        },
        {
            language: "AWS S3",
            percentage: "65%",
        },
        {
            language: "API Platform",
            percentage: "60%",
        },
        {
            language: "Docker",
            percentage: "50%",
        },
    ];

    const abilitiesLeftDisplay = abilitiesLeft.map((el, i) => {
        return (
            <div className={styles.content} key={i}>
                <div className={styles.langAndPercentage}>
                    <h3>{el.language}</h3>
                    <p>{el.percentage}</p>
                </div>
                <div className={styles.center}>
                    <div className={styles.progressBarContainer}>
                        <div
                            className={styles.progressBar}
                            style={{ width: `${el.percentage}` }}
                        ></div>
                    </div>
                </div>
            </div>
        );
    });

    const abilitiesRightDisplay = abilitiesRight.map((el, i) => {
        return (
            <div className={styles.content} key={i}>
                <div className={styles.langAndPercentage}>
                    <h3>{el.language}</h3>
                    <p>{el.percentage}</p>
                </div>
                <div className={styles.center}>
                    <div className={styles.progressBarContainer}>
                        <div
                            className={styles.progressBar}
                            style={{ width: `${el.percentage}` }}
                        ></div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div ref={ref} className={styles.container} id="compétences">
            <h1>COMPÉTENCES PRINCIPALES</h1>
            <div
                className={
                    isVisible
                        ? styles.abilitiesContainerActive
                        : styles.abilitiesContainer
                }
            >
                <div className={styles.left}>{abilitiesLeftDisplay}</div>
                <div className={styles.right}>{abilitiesRightDisplay}</div>
            </div>
        </div>
    );
}
