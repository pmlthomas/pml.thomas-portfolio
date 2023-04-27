import React, { useState, useEffect } from "react";
import styles from "./../../scss/components/Header/header.module.scss";
import Navbar from "./Navbar";
import profile_img from "./../../images/profile_img.jpg";

export default function Header() {
    const [dynamicTextStyle, setDynamicTextStyle] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setDynamicTextStyle(styles.dynamicTexts);
        }, 520);
    }, []);

    return (
        <div className={styles.container} id="accueil">
            <div className={styles.topHeader}>
                <div className={styles.nav}>
                    <a href="#accueil" className={styles.navLeft}>
                        <span className={styles.coloredText}>T</span>
                        <p>homas</p>
                        <span className={styles.dot}>.</span>
                    </a>
                    <Navbar />
                </div>
            </div>
            <div className={styles.middleHeader}>
                <div className={styles.left}>
                    <div className={styles.leftText}>
                        <h2 className={styles.salutation}>Bonjour!</h2>
                        <h1 className={styles.mainText}>
                            Je m'appelle
                            <span> Thomas</span>
                        </h1>
                        <div className={styles.subText}>
                            <p>Et je suis un </p>
                            <div className={styles.dynamicTextsContainer}>
                                <ul
                                    className={
                                        dynamicTextStyle
                                            ? dynamicTextStyle
                                            : styles.hidden
                                    }
                                >
                                    <li>
                                        <span>développeur frontend</span>
                                    </li>
                                    <li>
                                        <span>amoureux du bon code</span>
                                    </li>
                                    <li>
                                        <span>travailleur acharné</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <img
                        src={profile_img}
                        className={styles.profile_img}
                        alt="profile_img"
                    />
                </div>
            </div>
        </div>
    );
}
