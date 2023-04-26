import React from "react";
import styles from "./../../scss/components/Header/header.module.scss";
import Navbar from "./Navbar";
import profile_img from "./../../images/profile_img.jpg";

export default function Header() {
    const h3Str =
        "Et je suis un Développeur Fullstack Spécialisé dans le Frontend";
    const h3Chars = [...h3Str];

    const h3Text = h3Chars.map((char, i) => {
        const delay = { animationDelay: 0.5 + i / 90 + "s" };
        return (
            <span key={i} style={delay} className={styles.subText}>
                {char}
            </span>
        );
    });

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
                        <h3 className={styles.secondaryText}>{h3Text}</h3>
                    </div>
                </div>
                <img
                    src={profile_img}
                    className={styles.profile_img}
                    alt="profile_img"
                />
            </div>
        </div>
    );
}
